import React from 'react';
import {followUserActionCreator, unfollowUserActionCreator, searchUsersActionCreator, setUsersActionCreator, toFriendsActionCreator, fromFriendsActionCreator} from '../../../redux/userReduser';
import {connect} from 'react-redux';
import Users from './Users/Users';


let mapStateToProps = (state) => {
    return {users: state.usersPage.users, searchUsersText: state.usersPage.searchUsersText}

}

let mapDispatchToProps = (dispatch) => {
    return {
        toFollow: (userID) => {
            dispatch(followUserActionCreator(userID));
        },

        toUnfollow: (userID) => {
            dispatch(unfollowUserActionCreator(userID));
        },

        toFriends: (userID) => {
            dispatch(toFriendsActionCreator(userID));
        },

        fromFriends: (userID) => {
            dispatch(fromFriendsActionCreator(userID));
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