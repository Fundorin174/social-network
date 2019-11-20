import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postData = [
    {id: '1', msg: 'Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur et.', numOfLikes: '5'},
    {id: '2', msg: 'Fuck', numOfLikes: '500'},
    {id: '3', msg: 'Ахахахахахахах', numOfLikes: '50'},
    {id: '4', msg: 'Ахахахаха', numOfLikes: '100'},
    {id: '5', msg: 'Получилось!!!', numOfLikes: '1000'}
  ]


let dialogsData = [
    {id: '1', name: 'Alex', date: 'June, 25, 2019'},
    {id: '2', name: 'Dima', date: 'June, 24, 2019'},
    {id: '3', name: 'Sveta', date: 'June, 23, 2019'},
    {id: '4', name: 'Vasja', date: 'May, 24, 2019'},
    {id: '5', name: 'Viktor', date: 'June, 24, 2018'},
    {id: '6', name: 'Valera', date: 'June, 04, 2017'}
    ];
    

let messagesData = [
    {id: 1, msg: 'Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur et.', name: 'Alex', date: 'June, 25, 2019'},
    {id: 2, msg: '2Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur et.', name: 'Dima', date: 'June, 24, 2019'},
    {id: 3, msg: '3Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur et.', name: 'Sveta', date: 'June, 23, 2019'},
    {id: 4, msg: '4Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur et.', name: 'Viktor', date: 'June, 24, 2018'},
    {id: 5, msg: '5Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur et.', name: 'Valera', date: 'June, 04, 2017'},
    {id: 6, msg: '6Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur etDeserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur et.', name: 'Anton', date: 'June, 04, 2017'}
]
//   let idElements = postData.map( post => post.id ),
//       msgElements = postData.map( msg => msg.msg ),
//       numOfLikeselements = postData.map( number => number.numOfLikes );



ReactDOM.render(<App posts={postData} dialogs={dialogsData} messages={messagesData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
