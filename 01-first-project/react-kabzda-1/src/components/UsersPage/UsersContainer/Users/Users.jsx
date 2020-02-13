import React from 'react';
import classes from './Users.module.css';
import User from './User/User';
import Search from './Search/Search';
import Pagination from "../../../common/Paginator/Pagination";

const Users = (props) => {
    let pages = [];
    let j = props.currentPage;
    for (let i = props.currentPage; i < j + 5; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div className={classes.search_wrapper}>
                <Search searchUsers={props.searchUsers} />
            </div>
            <Pagination
              currentPage = {
               props.currentPage
              }
              setFirstPage = {
                props.setFirstPage
              }
              setPreviosPage = {
                props.setPreviosPage
              }
              setNextPage = {
                props.setNextPage
              }
              lastPage = {
                props.lastPage
              }
              totalUsersCount = {
                props.totalUsersCount
              }
              usersPerPageCount = {
                props.usersPerPageCount
              }
              changeUserPerPageCount = {
                props.changeUserPerPageCount
              }
              changeActivePage = {
                props.changeActivePage
              }
            />
            <div className={classes.users_wrapper}>
                {
                    props
                        .users
                        .map(user => {
                                return <User
                                    key={user.id}
                                    id={user.id}
                                    fullName={user.name}
                                    followed={user.followed}
                                    smallPhotoSrc={user.photos.small}
                                    status={user.status}
                                    isFrend={user.isFrend}
                                    isAuth = {props.isAuth}
                                    follow={props.follow}
                                    unFollow={props.unFollow}
                                    toFriends={props.toFriends}
                                    fromFriends={props.fromFriends}
                                  toggleFollowInProgress={props.toggleFollowInProgress}
                                  followInProgress = {props.followInProgress}
                                  isFaceGeneratedAvatar = {props.isFaceGeneratedAvatar}
          urlAIGeneratedImage = {props.urlAIGeneratedImage}
                                  />

                        })
                }
            </div>
        </div>
    )

}

export default Users
