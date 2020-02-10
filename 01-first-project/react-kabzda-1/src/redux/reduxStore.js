import {combineReducers, compose, createStore} from 'redux';
import dialogsReducer from './dialogsReduser';
import navBarReducer from './navBarReduser';
import profileReducer from './profileReduser';
import userReduser from './userReduser';
import authReducer from './authReduser';
import thunkMiddleware from 'redux-thunk';
import { applyMiddleware } from 'redux';
import {reducer as formReducer} from 'redux-form';
import appReducer from "./appReduser";
import toDoListReducer from './toDoListReduser';


let reducers = combineReducers({
  navBar: navBarReducer,
  profilePage: profileReducer,
  dialogPage: dialogsReducer,
  usersPage: userReduser,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
  toDoList: toDoListReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;