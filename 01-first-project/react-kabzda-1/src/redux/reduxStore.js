import profileReducer from './profileReduser';
import dialogsReducer from './dialogsReduser';
import navBarReducer from './navBarReduser';
import {createStore, combineReducers} from 'redux';

let reducers = combineReducers(
    {
    navBar: navBarReducer, 
    profilePage: profileReducer, 
    dialogPage: dialogsReducer
    }
);

let store = createStore(reducers);

export default store;