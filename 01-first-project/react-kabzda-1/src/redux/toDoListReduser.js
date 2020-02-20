import {reset, stopSubmit} from 'redux-form';
import {toDoListAPI} from './../DAL/api';
import {isloading} from './userReduser';
import { getToDoListsSelector } from './toDoListsSelectors';

const SET_ALL_LISTS = 'SOCIAL-NETWORK/TO_DO_LIST/SET_ALL_LISTS',
SET_TASKS_OF_THIS_LIST = 'SOCIAL-NETWORK/TO_DO_LIST/SET_TASKS_OF_THIS_LIST';



    //  ACTION-CREATORS


 const setToDoLists = (data) => (
  {type: SET_ALL_LISTS, data}
)
 const setTasksOfThisList = (listId, data) => (
  {type: SET_TASKS_OF_THIS_LIST, listId, data}
)

// export const deleteToDoList = (todolistId) => (
// {type: DELETE_TODO_LIST, todolistId}
// );

// export const setNewTask = (todolistId, task) => (
// {type: SET_NEW_TASK, todolistId, task}
// );

// THUNKS

export const createNewToDoList = (title) => (dispatch) => {
  dispatch(isloading(true));
  toDoListAPI.setNewToDoList(title)
  .then(() =>{
    toDoListAPI.getAllToDoLists()
  .then((data)=>{
    dispatch(setToDoLists(data))
  })
  })

  dispatch(isloading(false));
}


export const getAllToDoLists = () => (dispatch) => {
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

const setAllTaskofAllLists = (toDoLists) => (dispatch) => {
    toDoLists.map(toDoList => {
        let listId = toDoList.id;
        toDoListAPI
            .getTasksThisList(listId)
            .then((data) => {
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


export const deleteToDoList = (todolistId) => (dispatch) => {
  toDoListAPI.deleteToDoList(todolistId)
  .then(() => {
    toDoListAPI.getAllToDoLists()
    .then((data)=>{
      dispatch(setToDoLists(data))
    })
  })

}

export const loadNewTask = (newTask, listId) => (dispatch) => {
    toDoListAPI
        .setNewTask(listId, newTask.title)
        .then((data) => {
            if (data.resultCode === 0) {
                toDoListAPI
                    .getTasksThisList(listId)
                    .then((data) => {
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

export const changeTask = (task, listId) => (dispatch) => {
    toDoListAPI
        .changeExistingTask(listId, task.id, task)
        .then((data) => {
            if (data.resultCode === 0) {
                toDoListAPI
                    .getTasksThisList(listId)
                    .then((data) => {
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

export const deleteTaskFromList = (todolistId, taskId) => (dispatch) => {
  toDoListAPI.deleteTaskFromList(todolistId, taskId)
  .then(()=>{
    dispatch(getAllToDoLists);
  })
}


// INITIAL STATE
let initialState = {
  toDoLists: []
};



const toDoListReducer = (state = initialState, action) => {

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
          if (stateCopy.toDoLists[i].id === action.listId){
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