import {stopSubmit} from 'redux-form';
import {toDoListAPI} from '../DAL/api';
import {isloading} from './userReduser';


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

 const setToDoLists = (data:Array<SetToDoListActionDataType>):SetToDoListsActionType => (
  {type: SET_ALL_LISTS, 
  data}
)
 const setTasksOfThisList = (listId:number, data:any) => (
  {type: SET_TASKS_OF_THIS_LIST, listId, data}
)



// THUNKS

export const createNewToDoList = (title:any) => (dispatch:any) => {
  dispatch(isloading(true));
  toDoListAPI.setNewToDoList(title)
  .then(() =>{
    toDoListAPI.getAllToDoLists()
  .then((data:any)=>{
    dispatch(setToDoLists(data))
    console.log(data);
  })
  })

  dispatch(isloading(false));
}


export const getAllToDoLists = () => (dispatch:any) => {
    toDoListAPI
        .getAllToDoLists()
        .then((data:any) => {
            dispatch(setToDoLists(data))
            return data
        })
        .then((toDoLists:any) => {
            dispatch(setAllTaskofAllLists(toDoLists))
        })
}

const setAllTaskofAllLists = (toDoLists:any) => (dispatch:any) => {
    toDoLists.map((toDoList:any) => {
        let listId = toDoList.id;
        toDoListAPI
            .getTasksThisList(listId)
            .then((data:any) => {
                if (!data.error) {
                    dispatch(setTasksOfThisList(listId, data))
                } else {
                    let message = data.error;
                    let action = stopSubmit('NewTaskForm', {_error: message})
                    dispatch(action);
                }
            })
    })
    
}


export const deleteToDoList = (todolistId:any) => (dispatch:any) => {
  toDoListAPI.deleteToDoList(todolistId)
  .then(() => {
    toDoListAPI.getAllToDoLists()
    .then((data:any)=>{
      dispatch(setToDoLists(data))
    })
  })

}

export const loadNewTask = (newTask:any, listId:any) => (dispatch:any) => {
    toDoListAPI
        .setNewTask(newTask, listId)
        .then((data:any) => {
            if (data.resultCode === 0) {
                toDoListAPI
                    .getTasksThisList(listId)
                    .then((data:any) => {
                        if (!data.error) {
                            dispatch(setTasksOfThisList(listId, data))
                        } else {
                            let message = data.error;
                            let action = stopSubmit('NewTaskForm', {_error: message})
                            dispatch(action);
                        }
                    })
            } else {
                let message = data.messages;
                let action = stopSubmit('NewTaskForm', {_error: message})
                dispatch(action);
            }
        })
}

export const changeTask = (task:any, taskId:any, listId:any) => (dispatch:any) => {
        toDoListAPI
            .changeExistingTask(listId, taskId, task)
            .then((response:any) => {
                if (!response.message) {

                    toDoListAPI
                        .getTasksThisList(listId)
                        .then((response:any) => {
                            if (!response.message) {
                                dispatch(setTasksOfThisList(listId, response))
                            } else {
                                let message = response.message;
                                console.log(message)
                                let action = stopSubmit('ChangeTaskForm', {_error: message})
                                dispatch(action);
                            }
                        })
                } else {
                    let message = response.message;
                    console.log(message)
                    let action = stopSubmit('ChangeTaskForm', {_error: message})
                    dispatch(action);
                }
            })

}

export const deleteTaskFromList = (todolistId:any, taskId:any) => (dispatch:any) => {
  toDoListAPI.deleteTaskFromList(todolistId, taskId)
  .then(()=>{
    toDoListAPI
      .getTasksThisList(todolistId)
      .then((data:any) => {
        if (!data.error) {
          dispatch(setTasksOfThisList(todolistId, data))
        } else {
          console.log('Ошибка получения данных')
        }
      }
  )
})
}

export const reorderedToDoList = (todolistId:any, putAfterItemId:any) => (dispatch:any) => {
  toDoListAPI.reorderedToDoList(todolistId, putAfterItemId)
  .then( (data:any) => {
    if (data.resultCode === 0){
      dispatch(getAllToDoLists());
    } 
    else {
      console.log(data.messages);
    }
  })

}

export const reorderedTask = (toDoListId:any, taskId:any, putAfterItemId:any) => (dispatch:any) => {
  toDoListAPI.reorderedTask(toDoListId, taskId, putAfterItemId)
  .then( (data:any) => {
    if (data.resultCode === 0){
      toDoListAPI
        .getTasksThisList(toDoListId)
        .then((response:any) => {
          if (!response.message) {
            dispatch(setTasksOfThisList(toDoListId, response))
          } else {
            let message = response.message;
            console.log(message)
          }
        })
    } 
    else {
      console.log(data.messages);
    }
  })

}




// INITIAL STATE
let initialState:any = {
  toDoLists: []
};



const toDoListReducer = (state = initialState, action:any) => {

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
        for(let i = 0; i< stateCopy.toDoLists.length; i++){
          if (stateCopy.toDoLists[i].id && stateCopy.toDoLists[i].id === action.listId){
            stateCopy.toDoLists[i].items = action.data.items
          }
        }
      return stateCopy;

//  case DELETE_TODO_LIST:
//         console.log(state);
//           return {
//               ...state,
//               toDoLists: state.toDoLists.push(...action.data)
//           };

      default:
          return state;

  }
}

export default toDoListReducer;