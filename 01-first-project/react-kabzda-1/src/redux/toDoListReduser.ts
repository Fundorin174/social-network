import { ToDoListType, ResponseEnum, ToDoListItemsType, ToDoListTaskItemType } from './../types/types';
import {
  stopSubmit
} from 'redux-form';
import {
  toDoListAPI
} from '../DAL/api';
import {
  isloading, IsloadingActionType
} from './userReduser';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './reduxStore';


const SET_ALL_LISTS = 'SOCIAL-NETWORK/TO_DO_LIST/SET_ALL_LISTS',
  SET_TASKS_OF_THIS_LIST = 'SOCIAL-NETWORK/TO_DO_LIST/SET_TASKS_OF_THIS_LIST';


//  ACTION-CREATORS

type SetToDoListActionDataType = {
  id: null | string
  title: null | string
  addedDate: null | string
  order: number
}

type SetToDoListsActionType = {
  type: typeof SET_ALL_LISTS,
  data: Array<SetToDoListActionDataType>
}

const setToDoLists = (data: Array<SetToDoListActionDataType>): SetToDoListsActionType => ({
  type: SET_ALL_LISTS,
  data
})

// type SetTasksOfThisListDataITEMSType = {
//   id: string | null
//   title: string | null
//   description: string | null
//   completed: boolean
//   todoListId: string | null
//   order: number
//   status: number | null
//   priority: number | null
//   startDate: string | null
//   deadline: string | null
//   addedDate: string | null
// }

type SetTasksOfThisListDATAType = {
  items: Array<ToDoListItemsType>
  // length?: number | null
  totalCount: number 
  error: string | null
}

type SetTasksOfThisListType = {
  type: typeof SET_TASKS_OF_THIS_LIST,
  listId: string,
  data: SetTasksOfThisListDATAType
}

const setTasksOfThisList = (listId: string, data: SetTasksOfThisListDATAType): SetTasksOfThisListType => ({
  type: SET_TASKS_OF_THIS_LIST,
  listId,
  data
})

type ActionType = SetTasksOfThisListType | SetToDoListsActionType |IsloadingActionType
// THUNKS

export const createNewToDoList = (title: string):ThunkAction<void, AppStateType, unknown, ActionType> => (dispatch, getState) => {
  dispatch(isloading(true));
  toDoListAPI.setNewToDoList(title)
    .then(() => {
      toDoListAPI.getAllToDoLists()
        .then((data) => {
          dispatch(setToDoLists(data))
        })
    })

  dispatch(isloading(false));
}


export const getAllToDoLists = ():ThunkAction<void, AppStateType, unknown, ActionType> => (dispatch) => {
  toDoListAPI
    .getAllToDoLists()
    .then((data) => {
      dispatch(setToDoLists(data))
      return data
    })
    .then((toDoLists) => {
      dispatch(setAllTaskofAllLists(toDoLists))
    })
}

const setAllTaskofAllLists = (toDoLists: Array<ToDoListType>):ThunkAction<void, AppStateType, unknown, ActionType> => (dispatch) => {
  toDoLists.map((toDoList:ToDoListType) => {
    let listId = toDoList.id;
    toDoListAPI
      .getTasksThisList(listId)
      .then((data) => {
        if (!data.error) {
          dispatch(setTasksOfThisList(listId, data))
        } else {
          let message = data.error;
          let action = stopSubmit('NewTaskForm', {
            _error: message
          })
//@ts-ignore
          dispatch(action);
        }
      })
  })

}


export const deleteToDoList = (todolistId: string):ThunkAction<void, AppStateType, unknown, ActionType> => (dispatch) => {
  toDoListAPI.deleteToDoList(todolistId)
    .then(() => {
      toDoListAPI.getAllToDoLists()
        .then((data) => {
          dispatch(setToDoLists(data))
        })
    })

}

export const loadNewTask = (newTask: ToDoListTaskItemType, listId: string):ThunkAction<void, AppStateType, unknown, ActionType> => (dispatch) => {
  toDoListAPI
    .setNewTask(newTask, listId)
    .then((data) => {
      if (data.resultCode === ResponseEnum.success) {
        toDoListAPI
          .getTasksThisList(listId)
          .then((data) => {
            if (!data.error) {
              dispatch(setTasksOfThisList(listId, data))
            } else {
              let message = data.error;
              let action = stopSubmit('NewTaskForm', {
                _error: message
              })
              //@ts-ignore
              dispatch(action);
            }
          })
      } else {
        let message = data.messages;
        let action = stopSubmit('NewTaskForm', {
          _error: message
        })
        //@ts-ignore
        dispatch(action);
      }
    })
}

export const changeTask = (task: ToDoListTaskItemType, taskId: string, listId: string):ThunkAction<void, AppStateType, unknown, ActionType> => (dispatch) => {
  toDoListAPI
    .changeExistingTask(listId, taskId, task)
    .then((response) => {
      if (!response.messages[0]) {

        toDoListAPI
          .getTasksThisList(listId)
          .then((response) => {
            if (!response.error) {
              dispatch(setTasksOfThisList(listId, response))
            } else {
              let message = response.error;
              let action = stopSubmit('ChangeTaskForm', {
                _error: message
              })
 //@ts-ignore
              dispatch(action);
            }
          })
      } else {
        let message = response.messages;
        let action = stopSubmit('ChangeTaskForm', {
          _error: message
        })
         //@ts-ignore
        dispatch(action);
      }
    })

}

export const deleteTaskFromList = (todolistId: string, taskId: string):ThunkAction<void, AppStateType, unknown, ActionType> => (dispatch) => {
  toDoListAPI.deleteTaskFromList(todolistId, taskId)
    .then(() => {
      toDoListAPI
        .getTasksThisList(todolistId)
        .then((data) => {
          if (!data.error) {
            dispatch(setTasksOfThisList(todolistId, data))
          } else {
            console.log('Ошибка получения данных')
          }
        })
    })
}

export const reorderedToDoList = (todolistId: string, putAfterItemId: string | null):ThunkAction<void, AppStateType, unknown, ActionType> => (dispatch) => {
  toDoListAPI.reorderedToDoList(todolistId, putAfterItemId)
    .then((data) => {
      if (data.resultCode === ResponseEnum.success) {
        dispatch(getAllToDoLists());
      } else {
        console.log(data.messages);
      }
    })

}

export const reorderedTask = (toDoListId: string, taskId: string, putAfterItemId: string | null):ThunkAction<void, AppStateType, unknown, ActionType> => (dispatch) => {
  toDoListAPI.reorderedTask(toDoListId, taskId, putAfterItemId)
    .then((data) => {
      if (data.resultCode === ResponseEnum.success) {
        toDoListAPI
          .getTasksThisList(toDoListId)
          .then((response) => {
            if (!response.error) {
              dispatch(setTasksOfThisList(toDoListId, response))
            } else {
              let message = response.error;
              console.log(message)
            }
          })
      } else {
        console.log(data.messages);
      }
    })

}


// INITIAL STATE



let initialState = {
  toDoLists: [] as Array<ToDoListType>
};

type InitialStateType = typeof initialState;


const toDoListReducer = (state = initialState, action: any): InitialStateType => {

  switch (action.type) {

    case SET_ALL_LISTS:
      return {
        ...state,
        toDoLists: action.data
      };

    case SET_TASKS_OF_THIS_LIST:
      let stateCopy = {
        ...state,
        toDoLists: [...state.toDoLists]
      };
      for (let i = 0; i < stateCopy.toDoLists.length; i++) {
        if (stateCopy.toDoLists[i].id && stateCopy.toDoLists[i].id === action.listId) {
          stateCopy.toDoLists[i].items = action.data.items
        }
      }
      return stateCopy;

    default:
      return state;

  }
}

export default toDoListReducer;