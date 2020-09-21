import React, { ChangeEvent } from 'react';
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
import { addToFrends, deleteFromFrends} from '../../../redux/navBarReduser';
import {connect} from 'react-redux';
import Users from './Users/Users';
import Preloader from '../../common/Preloader/Preloader';
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
import { getUrlAIGeneratedImageSelector } from '../../../redux/profileSelectors';
import { getFrendsSelector } from '../../../redux/navBarSelectors';
import { UserType, FrendType } from '../../../types/types';
import { AppStateType } from '../../../redux/reduxStore';

type UsersContainerMapStatePropsType = {
users: Array<UserType>
searchUsersText: string
currentPage: number
usersPerPageCount: number
totalUsersCount: number
isLoading: boolean
followInProgress: Array <number>
isAuth: boolean
urlAIGeneratedImage: string | null
frends: Array<FrendType>
}

type UsersContainerMapDispatchPropstype = {
  toFriends: (userID: number) => void
     addToFrends: (frends: Array<FrendType>) => void
    fromFriends: (userID: number) => void
     deleteFromFrends: (frend: FrendType) => void
    searchUsers: (partOfName: string) => void
    changeCurrentPage: (pageNum: number) => void
    nextPage: () => void
    previosPage: () => void
    firstPage: () => void
    lastPage: (pagesCount: number) => void
    changeUsersPerPage: (numOfUsers: number) => void
    toggleFollowInProgress: (isFetching: boolean, userID: number) => void
    getUsers: (currentPage: number, usersPerPageCount: number, term: string | undefined) => void
    unFollow: (id: number) => void
    follow: (id: number) => void
}

type UsersConteinerOwnPropsType = {
  }
type UserContainerPropsType = UsersContainerMapStatePropsType & UsersContainerMapDispatchPropstype

class UsersContainer extends React.Component<UserContainerPropsType> {

componentDidMount() {
    this
        .props
        .getUsers(this.props.currentPage, this.props.usersPerPageCount, '');
}

changeUserPerPageCount = (e : ChangeEvent<HTMLInputElement>) => {
    let numOfUsers = +e.target.value;
    (numOfUsers > 100) && (numOfUsers = 100);
    this
        .props
        .changeUsersPerPage(numOfUsers);
    this
        .props
        .getUsers(this.props.currentPage, numOfUsers, '');
}

toLastPage = () => {
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
        .getUsers(pagesCount, this.props.usersPerPageCount, '');
}

setFirstPage = () => {
    this
        .props
        .firstPage();
    this
        .props
        .getUsers(1, this.props.usersPerPageCount, '');
}

setPreviosPage = () => {
    if (this.props.currentPage > 1) {
        this
            .props
            .previosPage();
        this
            .props
            .getUsers(this.props.currentPage - 1, this.props.usersPerPageCount, '');
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
            .getUsers(this.props.currentPage + 1, this.props.usersPerPageCount, '');
    }
}

changeActivePage = (p : number) => {
    this
        .props
        .changeCurrentPage(p);
    this
        .props
        .getUsers(p, this.props.usersPerPageCount, '');
}

    render() {

        return <> {
            this.props.isLoading
                ? <Preloader />
                : null
        }
        <Users
        setFirstPage = {
            this.setFirstPage
        }
        setPreviosPage = {
            this.setPreviosPage
        }
        setNextPage = {
            this.setNextPage
        }
            toLastPage = {
              this.toLastPage
        }
        changeUserPerPageCount = {
            this.changeUserPerPageCount
        }
        changeActivePage = {
            this.changeActivePage
        }
            {...this.props}/> 
        </>

}

}

let mapStateToProps = (state: AppStateType): UsersContainerMapStatePropsType => {
return {
    users: getSearchingUsersSelector(state),
    searchUsersText: getSearchUsersTextSelector(state),
    currentPage: getCurrentPageSelector(state),
    usersPerPageCount: getUsersPerPageCountSelector(state),
    totalUsersCount: getTotalUsersCountSelector(state),
    isLoading: getIsLoadingSelector(state),
    followInProgress: getFollowInProgressSelector(state),
    isAuth: getIsAuthSelector(state),
    urlAIGeneratedImage: getUrlAIGeneratedImageSelector(state),
    frends: getFrendsSelector(state)
}

}

export default compose(
   connect<UsersContainerMapStatePropsType, UsersContainerMapDispatchPropstype, UsersConteinerOwnPropsType, AppStateType>(mapStateToProps, {
    toFriends,
    addToFrends,
    fromFriends,
    deleteFromFrends,
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
