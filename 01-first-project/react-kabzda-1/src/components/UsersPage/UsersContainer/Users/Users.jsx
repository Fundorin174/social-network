import React from 'react';
import classes from './Users.module.css';
import User from './User/User';
import Search from './Search/Search';



const Users = (props) => {
    return (
        <div>
            <div className={classes.search_wrapper}>
                <Search />
            </div>
            <div className={classes.users_wrapper}>
                <User users={props.users}/>
                <User users={props.users}/>
            </div>
        </div>  
    )
}

export default Users
