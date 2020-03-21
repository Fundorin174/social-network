  import axios from 'axios';
import { UsersType, LetAuthType, LoginResponseType, ProfileType, ToDoListType, GetTasksThisListResponseType, ToDoListTaskItemType,  StandartResponseFromServerType, UploadAvatarResponseType,  SetNewTaskResponseType, AIGeneratedFacesType } from '../types/types';


const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
    headers: {
      "API-KEY": "38e52804-c31b-451f-9c8d-68163e22ba69"
    }
  });

  const toDoInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.1/',
  withCredentials: true,
    headers: {
      "API-KEY": "38e52804-c31b-451f-9c8d-68163e22ba69"
    }
  });



export const usersAPI = {

  getUsers(currentPage = 1, usersPerPageCount = 5, term = '') {
    return instance.get<UsersType>(`users?page=${currentPage}&count=${usersPerPageCount}&term=${term}`)
    .then(response => {
      return response.data;
    });
  },

  
  

  toFollow(userID:number) {
    return instance.post<StandartResponseFromServerType>(`follow/${userID}`)
      .then(response => {
        return response.data;
      });
  },

  unFollow(userID:number) {
    return instance.delete<StandartResponseFromServerType>(`follow/${userID}`)
      .then(response => {
        return response.data;
      });
  },

  auth() {
    return instance.get<LetAuthType>('auth/me')
    .then(response => {
      console.warn('This is old API. Please, use authApi.auth');
      return authAPI.auth();
    });
  }

}

type GetCaptchaResponseType = {
    url: string
}

export const authAPI = {

  auth() {
    return instance.get<LetAuthType>('auth/me')
    .then(response => {
      return response.data;
    });
  },


  login(email:string, password:string, rememberMe = false, captcha = '') {
    return instance.post<LoginResponseType>('auth/login', {
      email,
      password,
      rememberMe,
      captcha
    }).then(res => {return res.data});
      
  },

  logout() {
    return instance.delete<LoginResponseType>('auth/login');
  },


  getCaptcha() {
    return instance.get<GetCaptchaResponseType>('security/get-captcha-url')
      .then(response => {
        return response.data;
      });
  }
}

type SetStatusResponseType = {
  data: Object
messages: Array<string>
resultCode: number
}

export const profileAPI = {

  getProfile(userID: number) {

    return instance.get<ProfileType>(`profile/${userID}`)
        .then(response => {
          return response.data;
        });
      },

  getStatus(userID: number) {

    return instance.get<string>(`profile/status/${userID}`)
        .then(response => {
          return response.data;
        });
      },

  setProfile(data:ProfileType) {

    return instance.put('profile', {...data})
    .then(response => {
      return response.data;
    })
  },

  setStatus(status: string) {

    return instance.put<SetStatusResponseType>('profile/status', {status})
    .then(response => {
      return response.data;
    })
  },

  upLoadAvatar(avatar:any) {
    const formData = new FormData();
    formData.append('image', avatar);
    return instance.put<UploadAvatarResponseType>('profile/photo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        return response.data;
      })
  }
}

type SetToDoListsResponseType = {
  data: {
    item: {
      id: string
      addedDate: Date
      order: number
      title: string
      }
    }
  resultCode: number
  messages: Array<string>
}



export const toDoListAPI = {

    setNewToDoList(title:string) {

    return instance.post<SetToDoListsResponseType>('todo-lists', {
      title: title
    })
  },

  getAllToDoLists(){
    return instance.get<Array<ToDoListType>>('todo-lists')
        .then(response => {
          return response.data;
        });
      },

  deleteToDoList(todolistId:string) {
    return instance.delete<StandartResponseFromServerType>(`todo-lists/${todolistId}`)
    .then(response => {
      return response.data;
    });
  },


  renameToDoList(todolistId:string, title:string) {

    return instance.put(`todo-lists/${todolistId}`, {
      title: title
    })
  },
  
  setNewTask(newTask:ToDoListTaskItemType, todolistId:string) {

    return instance.post<SetNewTaskResponseType>(`todo-lists/${todolistId}/tasks`, {
      ...newTask
    })
    .then(response => {
      return response.data;
    });
  },
  

  getTasksThisList(todolistId:string, currentPage = 1, tasksPerPageCount = 10){
    return instance.get<GetTasksThisListResponseType>(`todo-lists/${todolistId}/tasks?page=${currentPage}&count=${tasksPerPageCount}`)
        .then(response => {
          return response.data;
        });
      },

  changeExistingTask(todolistId:string, taskId:string, task:ToDoListTaskItemType) {
        return toDoInstance.put<SetToDoListsResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`, {
            ...task
          })
          .then(response => {
            return response.data;
          });
  },

  deleteTaskFromList(todolistId:string, taskId:string) {
    return toDoInstance.delete<StandartResponseFromServerType>(`todo-lists/${todolistId}/tasks/${taskId}`)
    .then(response => {
      return response;
    });
  },

  reorderedToDoList(todolistId:string, putAfterItemId: null|string = null ) {
    return toDoInstance.put<StandartResponseFromServerType>(`todo-lists/${todolistId}/reorder`, {
      putAfterItemId: putAfterItemId
    })
    .then(response => {
      return response.data;
    });
  },

  reorderedTask(toDoListId:string, taskId:string, putAfterItemId: null |string = null) {
    return toDoInstance.put<StandartResponseFromServerType>(`todo-lists/${toDoListId}/tasks/${taskId}/reorder`, {
      putAfterItemId: putAfterItemId
    })
    .then(response => {
      return response.data;
    });
  }
}




export const generatedFotoAPI = {
    getGeneratedPhoto(faceParams:any, page = 1, per_page = 1, order_by='random') {
      let url = `https://api.generated.photos/api/v1/faces?api_key=6pydmUJIYJE48FXPqo-E0Q&page=${page}&per_page=${per_page}`;
      for (let value in faceParams) {
        url = url + '&' + value +'='+ faceParams[value];
      }
    return axios.get<AIGeneratedFacesType>(url)
        .then(response => {
          return response.data;
        });
      }
 
}

