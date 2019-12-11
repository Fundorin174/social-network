import React from 'react';
import classes from './Users.module.css';
import User from './User/User';
import Search from './Search/Search';




const Users = (props) => {

let usersElements = props
    .users
    .map( user => <User
            key={user.id}
            id={user.id}
            fullName={user.fullName}
            follow={user.follow}
            country={user.residency.country}
            city={user.residency.city}
            status={user.status}
            isFrend={user.isFrend} />
    )

    return (
        <div>
            <div className={classes.search_wrapper}>
                <Search />
            </div>
            <div className={classes.users_wrapper}>
                {usersElements}
            </div>
        </div>  
    )
}

export default Users
