import React from 'react';
// import Users from './Posts';
import {followUserActionCreator, unfollowUserActionCreator, searchUsersActionCreator, setUsersActionCreator} from '../../../redux/userReduser';
import {connect} from 'react-redux';
import Users from './Users/Users';


let mapStateToProps = (state) => {
    return {users: state.usersPage.users, searchUsersText: state.usersPage.searchUsersText}

}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followUserActionCreator(userID));
        },

        unfollow: (userID) => {
            dispatch(unfollowUserActionCreator(userID));
        },

        searchUsers: (partOfName) => {
            dispatch(searchUsersActionCreator(partOfName));
        },

        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        }
    }
        


}



const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;