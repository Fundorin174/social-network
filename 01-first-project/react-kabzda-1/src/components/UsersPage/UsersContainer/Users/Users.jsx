import React from 'react';
import classes from './Users.module.css';
import User from './User/User';
import Search from './Search/Search';




let Users = (props) => {

    if (props.users.length === 0) {

        props.setUsers([
            {
                id: '1',
                fullName: 'Иванов И',
                follow: true,
                residency: {country: 'Россия', city: 'Воронеж'},            
                status: 'Я зе бест',
                isFrend: false
            }, 
            {
                id: '2',
                fullName: 'Ивановский И',
                follow: false,
                residency: {country: 'Россия', city: 'Москва'},            
                status: 'Столица рулит',
                isFrend: false
            }, 
            {
                id: '3',
                fullName: 'Петров И',
                follow: true,
                residency: {country: 'Россия', city: 'Чита'},
                status: 'Ебеня рулят',
                isFrend: false
            }, 
            {
                id: '4',
                fullName: 'Иванчук В',
                follow: false,
                residency: {country: 'Украина', city: 'Киев'},
                status: 'Даешь перемогу',
                isFrend: true
            }, 
            {
                id: '5',
                fullName: 'Лукашенко А',
                follow: true,
                residency: {country: 'Белоруссия', city: 'Жлобин'},
                status: 'Мы за батьку',
                isFrend: false
            }, 
        ]);
    }

let usersElements = props
    .users
    .map( function (user) {

        if (`${user.fullName}`.toLowerCase().includes(props.searchUsersText.toLowerCase())) {
           return <User
                key={user.id}
                id={user.id}
                fullName={user.fullName}
                follow={user.follow}
                country={user.residency.country}
                city={user.residency.city}
                status={user.status}
                isFrend={user.isFrend}
                toFollow={props.toFollow}
                toUnfollow={props.toUnfollow}
                toFriends={props.toFriends}
                fromFriends={props.fromFriends}/>
        }

    });

    return (
        <div>
            <div className={classes.search_wrapper}>
                <Search searchUsers = {props.searchUsers}/>
            </div>
            <div className={classes.users_wrapper}>
                {usersElements}
            </div>
        </div>  
    )
}

export default Users
