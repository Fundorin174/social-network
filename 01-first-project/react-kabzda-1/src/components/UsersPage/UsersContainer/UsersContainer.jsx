import React from 'react';
import {
  follow,
  unFollow,
  searchUsers,
  toFriends,
  fromFriends,
  changeCurrentPage,
  nextPage,
  previosPage,
  firstPage,
  lastPage,
  changeUsersPerPage,
  toggleFollowInProgress,
  getUsers
} from "../../../redux/userReduser";
import {connect} from 'react-redux';
import Users from './Users/Users';
import Preloader from './../../common/Preloader/Preloader'
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';


class UsersContainer extends React.Component {

componentDidMount() {
    this
        .props
        .getUsers(this.props.currentPage, this.props.usersPerPageCount);
}

changeUserPerPageCount = (e) => {
    let numOfUsers = e.target.value;

    this
        .props
        .changeUsersPerPage(numOfUsers);
    this
        .props
        .getUsers(this.props.currentPage, numOfUsers);
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
        .getUsers(pagesCount, this.props.usersPerPageCount);
}

setFirstPage = () => {
    this
        .props
        .firstPage();
    this
        .props
        .getUsers(1, this.props.usersPerPageCount);
}

setPreviosPage = () => {
    if (this.props.currentPage > 1) {
        this
            .props
            .previosPage();
        this
            .props
            .getUsers(this.props.currentPage - 1, this.props.usersPerPageCount);
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
            .getUsers(this.props.currentPage + 1, this.props.usersPerPageCount);

    }

}

changeActivePage = (p) => {
    this
        .props
        .changeCurrentPage(p);
    this
        .props
        .getUsers(p, this.props.usersPerPageCount);
}

    render() {

        return <> {
            this.props.isLoading
                ? <Preloader />
                : null
        } <Users currentPage = {
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
        follow = {
            this.props.follow
        }
        unFollow = {
            this.props.unFollow
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

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    toFriends,
    fromFriends,
    searchUsers,
    changeCurrentPage,
    nextPage,
    previosPage,
    firstPage,
    lastPage,
    changeUsersPerPage,
    toggleFollowInProgress,
    getUsers,
    unFollow,
    follow
  })
)(UsersContainer);
