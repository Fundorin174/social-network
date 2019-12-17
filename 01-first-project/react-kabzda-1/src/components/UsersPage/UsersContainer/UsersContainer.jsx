import React from 'react';
import {
    followUserActionCreator,
    unfollowUserActionCreator,
    searchUsersActionCreator,
    setUsersActionCreator,
    toFriendsActionCreator,
    fromFriendsActionCreator,
    changeCurrentPageActionCreator,
    nextPageActionCreator,
    previosPageActionCreator,
    firstPageActionCreator,
    lastPageActionCreator,
    changeUsersPerPageActionCreator,
    setTotalUsersCountActionCreator
} from '../../../redux/userReduser';
import {connect} from 'react-redux';
import Users from './Users/Users';

let mapStateToProps = (state) => {
    return {users: state.usersPage.users, searchUsersText: state.usersPage.searchUsersText, currentPage: state.usersPage.currentPage, usersPerPageCount: state.usersPage.usersPerPageCount, totalUsersCount: state.usersPage.totalUsersCount}

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
        },

        changeCurrentPage: (pageNum) => {
            dispatch(changeCurrentPageActionCreator(pageNum));
        },

        nextPage: () => {
            dispatch(nextPageActionCreator());
        },

        previosPage: () => {
            dispatch(previosPageActionCreator());
        },

        firstPage: () => {
            dispatch(firstPageActionCreator());
        },

        lastPage: (pagesCount) => {
            dispatch(lastPageActionCreator(pagesCount));
        },

        changeUsersPerPage: (numOfUsers) => {
          dispatch(changeUsersPerPageActionCreator(numOfUsers));
      },
        setTotalUsersCount: (totalCount) => {
          dispatch(setTotalUsersCountActionCreator(totalCount));
      }
    }

}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;