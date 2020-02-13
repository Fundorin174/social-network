import React from 'react';
import {
  changeCurrentPage,
  changeUsersPerPage,
  firstPage,
  follow,
  fromFriends,
  getUsers,
  lastPage,
  nextPage,
  previosPage,
  searchUsers,
  toFriends,
  toggleFollowInProgress,
  unFollow
} from "../../../redux/userReduser";
import {connect} from 'react-redux';
import Users from './Users/Users';
import Preloader from './../../common/Preloader/Preloader'
import {compose} from 'redux';
import {getIsAuthSelector} from "../../../redux/authSelectors";
import {
  getCurrentPageSelector,
  getFollowInProgressSelector,
  getIsLoadingSelector,
  getSearchingUsersSelector,
  getSearchUsersTextSelector,
  getTotalUsersCountSelector,
  getUsersPerPageCountSelector
} from "../../../redux/usersSelectors";
import { getIsFaceGeneratedSelector, getUrlAIGeneratedImageSelector } from '../../../redux/profileSelectors';


class UsersContainer extends React.Component {

componentDidMount() {
    this
        .props
        .getUsers(this.props.currentPage, this.props.usersPerPageCount);
}

changeUserPerPageCount = (e) => {
    let numOfUsers = e.target.value;
  (numOfUsers > 100) && (numOfUsers = 100) ;
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
        }
        <Users
          isAuth = {this.props.isAuth}
          currentPage = {
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
        isFaceGeneratedAvatar = {this.props.isFaceGeneratedAvatar}
        urlAIGeneratedImage = {this.props.urlAIGeneratedImage}
        /> 
        </ >

}

}

let mapStateToProps = (state) => {
return {
    users: getSearchingUsersSelector(state),
    searchUsersText: getSearchUsersTextSelector(state),
    currentPage: getCurrentPageSelector(state),
    usersPerPageCount: getUsersPerPageCountSelector(state),
    totalUsersCount: getTotalUsersCountSelector(state),
    isLoading: getIsLoadingSelector(state),
  followInProgress: getFollowInProgressSelector(state),
  isAuth: getIsAuthSelector(state),
  isFaceGeneratedAvatar: getIsFaceGeneratedSelector(state),
  urlAIGeneratedImage: getUrlAIGeneratedImageSelector(state)
}

}

export default compose(
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
