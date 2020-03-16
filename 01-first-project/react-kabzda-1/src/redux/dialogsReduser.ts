import { MessagesType, DialogsType } from "../types/types";

const ADD_MSG = 'SOCIAL-NETWORK/DIALOGS/ADD-MSG',
    CHANGE_NEW_MSG_TEXT = 'SOCIAL-NETWORK/DIALOGS/CHANGE-NEW-MSG-TEXT';

type AddNewMsgActionType = {
  type: typeof ADD_MSG
  someNewMsg: string
}

export const addNewMsg = (newMsg: string): AddNewMsgActionType => (
    {type: ADD_MSG, someNewMsg: newMsg}
);

type ChangeNewMsgTextActionType = {
  type: typeof CHANGE_NEW_MSG_TEXT
  newAddedMsg: string
}

export const changeNewMsgText = (newMsgText: string): ChangeNewMsgTextActionType => (
    {type: CHANGE_NEW_MSG_TEXT, newAddedMsg: newMsgText}
);

type ActionType = AddNewMsgActionType | ChangeNewMsgTextActionType



let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Alex',
            date: 'June, 25, 2019',
            avaSrc: './../../../../img/usersAvatars/alex.jpg'
        }, {
            id: 2,
            name: 'Dima',
            date: 'June, 24, 2019',
            avaSrc: './../../../../img/usersAvatars/dima.jpg'
        }, {
            id: 3,
            name: 'Sveta',
            date: 'June, 23, 2019',
            avaSrc: './../../../../img/usersAvatars/sveta.jpg'
        }, {
            id: 4,
            name: 'Lyudmila',
            date: 'May, 24, 2019',
            avaSrc: './../../../../img/usersAvatars/lyudmila.jpg'
        }, {
            id: 5,
            name: 'Dmitry',
            date: 'June, 24, 2018',
            avaSrc: './../../../../img/usersAvatars/dmitry.jpg'
        }, {
            id: 6,
            name: 'Boris',
            date: 'June, 04, 2017',
            avaSrc: './../../../../img/usersAvatars/boris.jpg'
        }
    ] as Array <DialogsType>,

    messages: [
        {
            id: 1,
            msg: 'Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris ' +
                    'consectetur et.',
            name: 'Alex',
            date: 'June, 25, 2019'
        }, {
            id: 2,
            msg: '2Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris' +
                    ' consectetur et.',
            name: 'Dima',
            date: 'June, 24, 2019'
        }, {
            id: 3,
            msg: '3Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris' +
                    ' consectetur et.',
            name: 'Sveta',
            date: 'June, 23, 2019'
        }, {
            id: 4,
            msg: '4Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris' +
                    ' consectetur et.',
            name: 'Viktor',
            date: 'June, 24, 2018'
        }, {
            id: 5,
            msg: '5Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris' +
                    ' consectetur et.',
            name: 'Valera',
            date: 'June, 04, 2017'
        }
    ] as Array <MessagesType>,

    newMsgText: ''
}

type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case ADD_MSG:
            let date = new Date(),
                year = date.getFullYear(),
                month = date.toLocaleString('ru', {month: 'long'}),
                day = date.getDate(),
                hours = date.getHours(),
                minutes = date.getMinutes(),
                sec = date.getSeconds();

            let newMsg = {
                id: (+`${state.messages.length + 1}`),
                msg: action.someNewMsg,
                name: 'Я',
                date: (`${year} ${month} ${day}, Время: ${hours}ч ${minutes}м ${sec}с `)
            };

            return {
                ...state,
                messages: [
                    ...state.messages,
                    newMsg
                ],
                newMsgText: ''
            };

        case CHANGE_NEW_MSG_TEXT:

            return {
                ...state,
                newMsgText: action.newAddedMsg
            };

        default:
            return state;
    }

}

export default dialogsReducer;