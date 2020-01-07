
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

  getProfile(userID) {

return instance.get(`profile/${userID}`)
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
      return response.data;
    });
  }

}

