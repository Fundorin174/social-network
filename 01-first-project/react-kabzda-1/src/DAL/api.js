
import * as axios from 'axios';


const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
    headers: {
      "API-KEY": "e74a81aa-88b1-45c7-b4dd-7f98f1a44333"
    }
  })

export const usersAPI = {

  getUsers(currentPage = 1, usersPerPageCount = 5) {
    return instance.get(`users?page=${currentPage}&count=${usersPerPageCount}`)
    .then(response => {
      return response.data;
    });
  },

  

  toFollow(userID) {
    return instance.post(`follow/${userID}`)
      .then(response => {
        return response.data;
      });
  },

  unFollow(userID) {
    return instance.delete(`follow/${userID}`)
      .then(response => {
        return response.data;
      });
  },

  auth() {
    return instance.get('auth/me')
    .then(response => {
      console.warn('This is old API. Please, use authApi.auth')
      return authAPI.auth(response);
    });
  }

}

export const authAPI = {

  auth() {
    return instance.get('auth/me')
    .then(response => {
      return response.data;
    });
  },


  login(email, password, rememberMe = false, captcha = '') {
    return instance.post('auth/login', {
      email,
      password,
      rememberMe,
      captcha
    })
      
  },

  logout() {
    return instance.delete('auth/login')
  },

  getCaptcha() {
    return instance.get('security/get-captcha-url')
      .then(response => {
        return response.data;
      });
  }
}

export const profileAPI = {

  getProfile(userID) {

    return instance.get(`profile/${userID}`)
        .then(response => {
          return response.data;
        });
      },

  getStatus(userID) {

    return instance.get(`profile/status/${userID}`)
        .then(response => {
          return response.data;
        });
      },

  setProfile(data) {

    return instance.put('profile', {...data})
    .then(response => {
      return response.data;
    })
  },

  setStatus(status) {

    return instance.put('profile/status', {status})
    .then(response => {
      return response.data;
    })
  },

  upLoadAvatar(avatar) {
    const formData = new FormData();
    formData.append('image', avatar);
    return instance.put('profile/photo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        return response.data;
      })
  }
}

export const toDoListAPI = {

    setNewToDoList(title) {

    return instance.post('todo-lists', {
      title: title
    })
  },

  getAllToDoLists(){
    return instance.get('todo-lists')
        .then(response => {
          return response.data;
        });
      },

  deleteToDoList(todolistId) {
    return instance.delete(`todo-lists/${todolistId}`)
    .then(response => {
      return response.data;
    });
  },

  renameToDoList(todolistId, title) {

    return instance.put(`todo-lists/${todolistId}`, {
      title: title
    })
  },
  
  setNewTask(todolistId, task) {

    return instance.post(`todo-lists/${todolistId}/tasks`, {
      ...task
    })
    .then(response => {
      return response.data;
    });
  },
  
  getTasksThisList(todolistId, currentPage = 1, tasksPerPageCount = 10){
    return instance.get(`todo-lists/${todolistId}/tasks?page=${currentPage}&count=${tasksPerPageCount}`)
        .then(response => {
          return response.data;
        });
      },

  changeExistingTask(todolistId, taskId, task) {

    return instance.put(`todo-lists/${todolistId}/tasks/${taskId}`, {
      ...task
    })
    .then(response => {
      return response.data;
    });
  },

  deleteTaskFromList(todolistId, taskId) {
    return instance.delete(`todo-lists/${todolistId}/tasks/${taskId}`)
    .then(response => {
      return response.data;
    });
  }
}



