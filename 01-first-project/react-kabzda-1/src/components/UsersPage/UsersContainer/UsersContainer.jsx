import React from 'react';
import {
    followUser,
    unfollowUser,
    searchUsers,
    setUsers,
    toFriends,
    fromFriends,
    changeCurrentPage,
    nextPage,
    previosPage,
    firstPage,
    lastPage,
    changeUsersPerPage,
    setTotalUsersCount,
    isloading
} from '../../../redux/userReduser';
import {connect} from 'react-redux';
import Users from './Users/Users';
import * as axios from 'axios';
import Preloader from './../../common/Preloader/Preloader'

class UsersContainer extends React.Component {

    componentDidMount() {
        this
            .props
            .isloading(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersPerPageCount}`
            )
            .then(response => {
                this
                    .props
                    .isloading(false);
                this
                    .props
                    .setUsers(response.data.items);
                this
                    .props
                    .setTotalUsersCount(response.data.totalCount);

            });
    }

    changeUserPerPageCount = (e) => {
        let numOfUsers = e.target.value;

        this
            .props
            .changeUsersPerPage(numOfUsers);
        this
            .props
            .isloading(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage +
                1}&count=${this.props.usersPerPageCount}`
            )
            .then(response => {
                this
                    .props
                    .isloading(false);
                this
                    .props
                    .setUsers(response.data.items);
                this
                    .props
                    .setTotalUsersCount(response.data.totalCount);
            });
    }

    lastPage = () => {
        let pagesCount = Math.ceil(
            this.props.totalUsersCount / this.props.usersPerPageCount
        )
        this
            .props
            .lastPage(pagesCount)
    }

    setFirstPage = () => {
        this
            .props
            .firstPage();
        this
            .props
            .isloading(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=1&count=${this.props.usersPerPageCount}`
            )
            .then(response => {
                this
                    .props
                    .isloading(false);
                this
                    .props
                    .setUsers(response.data.items);
                this
                    .props
                    .setTotalUsersCount(response.data.totalCount);
            });
    }

    setPreviosPage = () => {

        this
            .props
            .previosPage();
        this
            .props
            .isloading(true);
        if (this.props.currentPage > 1) 
            axios
                .get(
                    `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage - 1}&count=${this.props.usersPerPageCount}`
                )
                .then(response => {
                    this
                        .props
                        .isloading(false);
                    this
                        .props
                        .setUsers(response.data.items);
                    this
                        .props
                        .setTotalUsersCount(response.data.totalCount);
                });

        }
    
    setNextPage = () => {
        this
            .props
            .nextPage();
        this
            .props
            .isloading(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage +
                1}&count=${this.props.usersPerPageCount}`
            )
            .then(response => {
                this
                    .props
                    .isloading(false);
                this
                    .props
                    .setUsers(response.data.items);
                this
                    .props
                    .setTotalUsersCount(response.data.totalCount);
            });

    }

    changeActivePage = (p) => {
        this
            .props
            .changeCurrentPage(p);
        this
            .props
            .isloading(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.usersPerPageCount}`
            )
            .then(response => {
                this
                    .props
                    .isloading(false);
                this
                    .props
                    .setUsers(response.data.items);
                this
                    .props
                    .setTotalUsersCount(response.data.totalCount);
            });
    }

    render() {

        return <> {
            this.props.isLoading ?
            < Preloader /> : null
        } < Users currentPage = {
            this.props.currentPage
        }
        searchUsers = {
            this.props.searchUsers
        }
        searchUsersText = {
            this.props.searchUsersText
        }
        setFirstPage = {
            this.setFirstPage
        }
        setPreviosPage = {
            this.setPreviosPage
        }
        setNextPage = {
            this.setNextPage
        }
        lastPage = {
            this.lastPage
        }
        totalUsersCount = {
            this.props.totalUsersCount
        }
        usersPerPageCount = {
            this.props.usersPerPageCount
        }
        changeUserPerPageCount = {
            this.changeUserPerPageCount
        }
        changeActivePage = {
            this.changeActivePage
        }
        users = {
            this.props.users
        }
        toFollow = {
            this.props.toFollow
        }
        toUnfollow = {
            this.props.toUnfollow
        }
        toFriends = {
            this.props.toFriends
        }
        fromFriends = {
            this.props.fromFriends
        }
        /> 
        </>

}

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        searchUsersText: state.usersPage.searchUsersText,
        currentPage: state.usersPage.currentPage,
        usersPerPageCount: state.usersPage.usersPerPageCount,
        totalUsersCount: state.usersPage.totalUsersCount,
        isLoading: state.usersPage.isLoading
    }

}

export default connect(mapStateToProps, {
    followUser,
    unfollowUser,
    toFriends,
    fromFriends,
    searchUsers,
    setUsers,
    changeCurrentPage,
    nextPage,
    previosPage,
    firstPage,
    lastPage,
    changeUsersPerPage,
    setTotalUsersCount,
    isloading,
})(UsersContainer);
