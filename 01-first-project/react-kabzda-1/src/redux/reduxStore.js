import { combineReducers, createStore } from 'redux';
import dialogsReducer from './dialogsReduser';
import navBarReducer from './navBarReduser';
import profileReducer from './profileReduser';
import userReduser from './userReduser';
import authReducer from './authReduser';
import thunkMiddleware from 'redux-thunk';
import { applyMiddleware } from 'redux';


let reducers = combineReducers({
  navBar: navBarReducer,
  profilePage: profileReducer,
  dialogPage: dialogsReducer,
  usersPage: userReduser,
  auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;