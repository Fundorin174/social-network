import profileReducer from './profileReduser';
import dialogsReducer from './dialogsReduser';
import navBarReducer from './navBarReduser';
import userReduser from './userReduser';
import {createStore, combineReducers} from 'redux';

let reducers = combineReducers(
    {navBar: navBarReducer, profilePage: profileReducer, dialogPage: dialogsReducer, usersPage: userReduser}
);

let store = createStore(reducers);

window.store = store;

export default store;