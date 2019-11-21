import {renderEntireTree} from './../render';

let state = {

    navBar:{
        frends: [
            {id: '1', name: 'Alex'},
            {id: '2', name: 'Dima'},
            {id: '3', name: 'Sveta'},
            {id: '4', name: 'Lyudmila'},
            {id: '5', name: 'Boris'},
            {id: '6', name: 'Vasja'}

        ]

    },

    profilePage: {
        posts: [
        {id: '1', msg: 'Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur et.', numOfLikes: '5'},
        {id: '2', msg: 'Fuck', numOfLikes: '500'},
        {id: '3', msg: 'Ахахахахахахах', numOfLikes: '50'},
        {id: '4', msg: 'Ахахахаха', numOfLikes: '100'},
        {id: '5', msg: 'Получилось!!!', numOfLikes: '1000'}
      ]
    },

    dialogPage: {
        dialogs: [
            {id: '1', name: 'Alex', date: 'June, 25, 2019', avaSrc: './../../../../img/usersAvatars/alex.jpg'},
            {id: '2', name: 'Dima', date: 'June, 24, 2019', avaSrc: './../../../../img/usersAvatars/dima.jpg'},
            {id: '3', name: 'Sveta', date: 'June, 23, 2019', avaSrc: './../../../../img/usersAvatars/sveta.jpg'},
            {id: '4', name: 'Lyudmila', date: 'May, 24, 2019', avaSrc: './../../../../img/usersAvatars/lyudmila.jpg'},
            {id: '5', name: 'Dmitry', date: 'June, 24, 2018', avaSrc: './../../../../img/usersAvatars/dmitry.jpg'},
            {id: '6', name: 'Boris', date: 'June, 04, 2017', avaSrc: './../../../../img/usersAvatars/boris.jpg'}
            ],
    
        messages: [
            {id: '1', msg: 'Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur et.', name: 'Alex', date: 'June, 25, 2019'},
            {id: '2', msg: '2Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur et.', name: 'Dima', date: 'June, 24, 2019'},
            {id: '3', msg: '3Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur et.', name: 'Sveta', date: 'June, 23, 2019'},
            {id: '4', msg: '4Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur et.', name: 'Viktor', date: 'June, 24, 2018'},
            {id: '5', msg: '5Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur et.', name: 'Valera', date: 'June, 04, 2017'},
            {id: '6', msg: '6Deserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur etDeserunt dolor aliqua ex elit nostrud labore eu consectetur elit aute laboris consectetur et.', name: 'Anton', date: 'June, 04, 2017'}
        ]
    }

  
};


export let adPost = (someNewPost) => {

    let newItem = {
        id: (`${state.profilePage.posts.length+1}`),
        msg: someNewPost, 
        numOfLikes: '0'
    };
    
    state.profilePage.posts.push(newItem);
    renderEntireTree(state);

}

export let adMsg = (someNewMsg) => {

    let newItem = {
        id: (`${state.dialogPage.messages.length+1}`),
        msg: someNewMsg, 
        name: 'Я',
        date: 'Только что'
    };
    
    state.dialogPage.messages.push(newItem);
    renderEntireTree(state);

}



export default state;