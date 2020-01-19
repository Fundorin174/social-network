import React from 'react';
import classes from './Users.module.css';
import User from './User/User';
import Search from './Search/Search';

const Users = (props) => {
    let pages = [];
    let j = props.currentPage;
    for (let i = props.currentPage; i < j + 5; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div className={classes.search_wrapper}>
                <Search searchUsers={props.searchUsers}/>
            </div>
            <div className={classes.page_pagination}>
                <span onClick={props.setFirstPage} className={classes.page_navigation}>Первая страница</span>
                <span onClick={props.setPreviosPage} className={classes.previos_page}>&laquo;</span>
                {
                    pages.map(p => {
                        if ((Math.ceil(props.totalUsersCount / props.usersPerPageCount) - p) > -1) {
                            return <span
                                onClick={() => {
                                    props.changeActivePage(p)
                                }}
                                className={props.currentPage === p
                                    ? `${classes.page} ${classes.active}`
                                    : `${classes.page}`}
                                key={p}>{p}</span>
                        }
                    })
                }
                <span onClick={props.setNextPage} className={classes.next_page}>&raquo;</span>
                <span
                    onClick={props.lastPage}
                    className={`${classes.page_navigation} ${classes.lastPage}`}>Последняя страница</span>
                <span>
                    Пользователей на странице:
                    <input
                        className={classes.input}
                        type="number"
                        value={props.usersPerPageCount}
                        onChange={props.changeUserPerPageCount}/>

                </span>
            </div>
            <div className={classes.users_wrapper}>
                {
                    props
                        .users
                        .map(user => {
                            if (`${user.name}`.toLowerCase().includes(props.searchUsersText.toLowerCase())) {
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
                                  followInProgress = {props.followInProgress}/>
                            }
                        })
                }
            </div>
        </div>
    )

}

export default Users
