import {reset} from 'redux-form';
import {toDoListAPI} from './../DAL/api';
import {isloading} from './userReduser';

const SET_ALL_LISTS = 'SOCIAL-NETWORK/TO_DO_LIST/SET_ALL_LISTS';



    //  ACTION-CREATORS


 const setToDoLists = (data) => (
  {type: SET_ALL_LISTS, data}
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
  toDoListAPI.getAllToDoLists()
  .then((data)=>{
    dispatch(setToDoLists(data))
  })

  dispatch(isloading(false));
}

export const deleteToDoList = (todolistId) => (dispatch) => {
  toDoListAPI.deleteToDoList(todolistId)

}



// INITIAL STATE
let initialState = {
  toDoLists: [
    {
      id: "8f27f97b-bc63-4114-9baa-c91facbd4ffb",
      title: "Пробный первый список",
      addedDate: "2019-07-30T12:24:15.063",
      order: 0
   },
   {
    id: "9f27f97b-bc63-4114-9baa-c91facbd4ffa",
    title: "Пробный второй список",
    addedDate: "2020-01-30T12:24:15.063",
    order: 1
 }]
};



const toDoListReducer = (state = initialState, action) => {

  switch (action.type) {
         
      case SET_ALL_LISTS:
    console.log(state)
          return {
              ...state,
              toDoLists: state.toDoLists.push(...action.data)
          };

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