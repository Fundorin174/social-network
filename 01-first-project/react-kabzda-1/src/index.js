import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import store from './redux/reduxStore';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
// import {adPost, adMsg, changeNewPostText, changeNewMsgText, subscribe} from
// './redux/state';
import {BrowserRouter} from 'react-router-dom';
import StoreContext from './storeContext';

let renderEntireTree = (state) => {
    ReactDOM.render(
    <BrowserRouter>
        <Provider store = {store}>
            <App />
         </Provider>
    </BrowserRouter>, document.getElementById( 'root' ) ); }
        renderEntireTree(store.getState()); store.subscribe(() => {
            let state = store.getState();
            renderEntireTree(state);
        });

    

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls. Learn
// more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();