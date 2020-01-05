import React from 'react';
import {
    toFollow,
    toUnfollow,
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
    isloading,
    toggleFollowInProgress
} from '../../../redux/userReduser';
import {connect} from 'react-redux';
import Users from './Users/Users';
import * as axios from 'axios';
import Preloader from './../../common/Preloader/Preloader'
import {usersAPI} from '../../../DAL/api';

class UsersContainer extends React.Component {

    componentDidMount() {
        this
            .props
            .isloading(true);
        usersAPI
            .getUsers(this.props.currentPage, this.props.usersPerPageCount)
            .then(data => {
                this
                    .props
                    .isloading(false);
                this
                    .props
                    .setUsers(data.items);
                this
                    .props
                    .setTotalUsersCount(data.totalCount);

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
        usersAPI
            .getUsers(this.props.currentPage, numOfUsers)
            .then(data => {
                this
                    .props
                    .isloading(false);
                this
                    .props
                    .setUsers(data.items);
                this
                    .props
                    .setTotalUsersCount(data.totalCount);
            });
    }

    lastPage = () => {
        let pagesCount = Math.ceil(
            this.props.totalUsersCount / this.props.usersPerPageCount
        )
        this
            .props
            .lastPage(pagesCount);
        this
            .props
            .changeCurrentPage(pagesCount);
        this
            .props
            .isloading(true);
        usersAPI
            .getUsers(pagesCount, this.props.usersPerPageCount)
            .then(data => {
                this
                    .props
                    .isloading(false);
                this
                    .props
                    .setUsers(data.items);
                this
                    .props
                    .setTotalUsersCount(data.totalCount);
            });
    }

    setFirstPage = () => {
        this
            .props
            .firstPage();
        this
            .props
            .isloading(true);
        usersAPI
            .getUsers(1, this.props.usersPerPageCount)
            .then(data => {
                this
                    .props
                    .isloading(false);
                this
                    .props
                    .setUsers(data.items);
                this
                    .props
                    .setTotalUsersCount(data.totalCount);
            });
    }

    setPreviosPage = () => {
        if (this.props.currentPage > 1) {
            this
                .props
                .previosPage();
            this
                .props
                .isloading(true);

            usersAPI
                .getUsers(this.props.currentPage - 1, this.props.usersPerPageCount)
                .then(data => {
                    this
                        .props
                        .isloading(false);
                    this
                        .props
                        .setUsers(data.items);
                    this
                        .props
                        .setTotalUsersCount(data.totalCount);
                });

        }

    }

    setNextPage = () => {
        let pagesCount = Math.ceil(
            this.props.totalUsersCount / this.props.usersPerPageCount
        )
        if (this.props.currentPage < pagesCount) {
            this
                .props
                .nextPage();
            this
                .props
                .isloading(true);
            usersAPI
                .getUsers(this.props.currentPage + 1, this.props.usersPerPageCount)
                .then(data => {
                    this
                        .props
                        .isloading(false);
                    this
                        .props
                        .setUsers(data.items);
                    this
                        .props
                        .setTotalUsersCount(data.totalCount);
                });

        }

    }

    changeActivePage = (p) => {
        this
            .props
            .changeCurrentPage(p);
        this
            .props
            .isloading(true);
      usersAPI
        .getUsers(p, this.props.usersPerPageCount)
            .then(data => {
                this
                    .props
                    .isloading(false);
                this
                    .props
                    .setUsers(data.items);
                this
                    .props
                    .setTotalUsersCount(data.totalCount);
            });
    }

    render() {

        return <> {
            this.props.isLoading
                ? <Preloader />
                : null
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
            toggleFollowInProgress = {
              this.props.toggleFollowInProgress
        }
        followInProgress = {
          this.props.followInProgress
        }

        /> 
        </ >

}

}

let mapStateToProps = (state) => {
return {
    users: state.usersPage.users,
    searchUsersText: state.usersPage.searchUsersText,
    currentPage: state.usersPage.currentPage,
    usersPerPageCount: state.usersPage.usersPerPageCount,
    totalUsersCount: state.usersPage.totalUsersCount,
    isLoading: state.usersPage.isLoading,
  followInProgress: state.usersPage.followInProgress
}

}

export default connect(mapStateToProps, {
toFollow,
toUnfollow,
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
  toggleFollowInProgress
})(UsersContainer);
