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


let messagesData = [
    {id: 1, msg: 'Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur et.'},
    {id: 2, msg: '2Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur et.'},
    {id: 3, msg: '3Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur et.'},
    {id: 4, msg: '4Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur et.'},
    {id: 5, msg: '5Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur et.'},
    {id: 6, msg: '6Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur etDeserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur et.'}
]
//   let idElements = postData.map( post => post.id ),
//       msgElements = postData.map( msg => msg.msg ),
//       numOfLikeselements = postData.map( number => number.numOfLikes );



ReactDOM.render(<App posts={postData} messages={messagesData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
