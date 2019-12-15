import React from 'react';
import classes from './Users.module.css';
import User from './User/User';
import Search from './Search/Search';
import * as axios from 'axios';




let Users = (props) => {

    if (props.users.length === 0) {

        axios
            .get('https://social-network.samuraijs.com/api/1.0/users?page=1&count=5')
            .then(response => {
                props.setUsers(response.data.items)
            });

    }

let usersElements = props
    .users
    .map( function (user) {

        if (`${user.name}`.toLowerCase().includes(props.searchUsersText.toLowerCase())) {
           return <User
                key={user.id}
                id={user.id}
                fullName={user.name}
                follow={user.followed}
                smallPhotoSrc = {user.photos.small}
                // country={user.residency.country}
                // city={user.residency.city}
                status={user.status}
                isFrend={user.isFrend}
                toFollow={props.toFollow}
                toUnfollow={props.toUnfollow}
                toFriends={props.toFriends}
                fromFriends={props.fromFriends}
                />
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
