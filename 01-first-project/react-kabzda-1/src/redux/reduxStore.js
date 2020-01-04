import { combineReducers, createStore } from 'redux';
import dialogsReducer from './dialogsReduser';
import navBarReducer from './navBarReduser';
import profileReducer from './profileReduser';
import userReduser from './userReduser';
import authReducer from './authReduser';


let reducers = combineReducers({
  navBar: navBarReducer,
  profilePage: profileReducer,
  dialogPage: dialogsReducer,
  usersPage: userReduser,
  auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;