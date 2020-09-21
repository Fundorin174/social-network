
export type DialogsType = {
  id: number,
  name: string,
  date: string,
  avaSrc: null | string
}

export type MessagesType = {
  id: number
  msg: string
  name: string
  date: string
}

export type FrendType = {
  name: string,
  id: number,
  uniqueUrlName: null | string,
  photos: {
      small: null | string,
      large: null | string
  },
  status: null | string,
  followed: boolean
}

export type AuthDataType = {
  id: number
  email: string
  login: string
  }

  export type PhotosType = {
    small: null | string
    large: null | string
  }

  export type UserType = {
    id: number
    name: string
    status: null | string
    photos: PhotosType
    followed: boolean
  }

  export type UsersType = {
    items: Array<UserType>
    totalCount: number
    error: string
  }


export type ProfileContacts = {
  github: null | string
  vk: null | string
  facebook: null | string
  instagram: null | string
  twitter: null | string
  website: null | string
  youtube: null | string
  mainLink: null | string
}

export type ProfileType = {
  userId?: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ProfileContacts
  photos: null | PhotosType
  aboutMe?: string
}

export type UploadAvatarResponseType = {
  data: {
    photos: PhotosType
  }
resultCode: number
messages: Array<string>
}

export type AIGeneratedFacesType = {  
  faces: Array <AIFaceType>,
  total: number
}

export type AIFaceType = {
  id: number
  urls: [
    { 32: string },
    { 64: string }, 
    { 128: string }, 
    { 256: string }, 
    { 512: string }],
  meta: AIFaceMetaType 
}

export type AIFaceMetaType = {
  confidence?: null | number
  gender: null | Array <string>
  age: null | Array <string>,
  ethnicity: null | Array <string>,
  eye_color: null | Array <string>,
  hair_color: null | Array <string>
  hair_length: null | Array <string>,
  emotion: null | Array<string>
}


export type LoginValuesType = {
  email: string
  password: string
  rememberMe: boolean,
  captcha: undefined | string;
}

export type LoginResponseType = {
      resultCode: ResponseLogin
      messages: Array<string>,
      data: {
        userId: number
      }
}

export type LetAuthType = {
  data: {
    id: number
    email: string
    login: string    
  }
resultCode: number
messages: Array<string>

}


export type ToDoListItemsType = {
  id: string
  title: string
  description: null | string
  completed: boolean
  todoListId: string
  order: number
  status: null | number
  priority: null | number
  startDate: null | string
  deadline: null | string
  addedDate: null | string
}

export type ToDoListType = {
  id: string
  title: null | string
  addedDate: null | string
  order: number
  items: Array<ToDoListItemsType>
}

export type GetTasksThisListResponseType = {
  items: Array<ToDoListItemsType>
  totalCount: number
  error: string | null
}

export type ToDoListTaskItemType = {
  title: string
description: string
completed?: boolean
status?: number
priority?: number
startDate?: Date
deadline?: Date
}

export type StandartResponseFromServerType = {
data: Object
messages: Array<string>
resultCode: number
}

export type SetNewTaskResponseType = {
  data: ToDoListItemsType
  messages: Array<string>
  resultCode: number
  }


export enum ResponseLogin {
  success =  0,
  error = 1,
  needCapcha = 10
}

export enum ResponseEnum {
  success =  0,
  error = 1
}


