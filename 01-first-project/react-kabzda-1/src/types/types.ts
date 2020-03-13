import { type } from "os"

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
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ProfileContacts
  photos: PhotosType
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

type AIFaceMetaType = {
  confidence: null | number
  gender: null | Array <string>
  age: null | Array <string>,
  ethnicity: null | Array <string>,
  eye_color: null | Array <string>,
  hair_color: null | Array <string>
  hair_length: null | Array <string>,
  emotion: null | Array<string>
}

