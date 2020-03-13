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