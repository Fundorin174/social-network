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




let rootReducer = combineReducers({
  navBar: navBarReducer,
  profilePage: profileReducer,
  dialogPage: dialogsReducer,
  usersPage: userReduser,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
  toDoList: toDoListReducer
});

type RootReduserType = typeof rootReducer

export type AppStateType = ReturnType<RootReduserType>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
//@ts-ignore
window.__store__ = store;

export default store;