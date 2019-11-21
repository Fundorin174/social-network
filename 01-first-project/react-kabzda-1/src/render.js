import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {adPost} from './redux/state';
import {adMsg} from './redux/state';
import {BrowserRouter} from 'react-router-dom';


export let renderEntireTree = (state) => {
    
    ReactDOM.render(
        <BrowserRouter>
        <App state={state} adPost={adPost} adMsg={adMsg} />
        </BrowserRouter>,
         document.getElementById('root'));

}