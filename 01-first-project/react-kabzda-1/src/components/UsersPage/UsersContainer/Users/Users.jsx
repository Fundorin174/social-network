import React from 'react';
import classes from './Users.module.css';
import User from './User/User';
import Search from './Search/Search';
import * as axios from 'axios';

class Users extends React.Component {

    componentDidMount() {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersPerPageCount}`
            )
            .then(response => {
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
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage +
                1}&count=${this.props.usersPerPageCount}`
            )
            .then(response => {
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
        console.log(pagesCount)
        this
            .props
            .lastPage(pagesCount)
    }

    render() {
        let pages = [];
        let j = this.props.currentPage;
        for (let i = this.props.currentPage; i < j + 5; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div className={classes.search_wrapper}>
                    <Search searchUsers={this.props.searchUsers}/>
                </div>
                <div className={classes.page_pagination}>
                    <span
                        onClick={() => {
                            this
                                .props
                                .firstPage();
                            axios
                                .get(
                                    `https://social-network.samuraijs.com/api/1.0/users?page=1&count=${this.props.usersPerPageCount}`
                                )
                                .then(response => {
                                    this
                                        .props
                                        .setUsers(response.data.items);
                                    this
                                        .props
                                        .setTotalUsersCount(response.data.totalCount);

                                });
                        }}
                        className={classes.page_navigation}>Первая страница</span>
                    <span
                        onClick={() => {
                            this
                                .props
                                .previosPage();
                            if (this.props.currentPage > 1) 
                                axios
                                    .get(
                                        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage - 1}&count=${this.props.usersPerPageCount}`
                                    )
                                    .then(response => {
                                        this
                                            .props
                                            .setUsers(response.data.items);
                                        this
                                            .props
                                            .setTotalUsersCount(response.data.totalCount);
                                    });
                            }}
                        className={classes.previos_page}>&laquo;</span>
                    {
                        pages.map(p => {
                          if ((Math.ceil(this.props.totalUsersCount / this.props.usersPerPageCount) - p) > -1) {
                            return <span
                            onClick={() => {
                                this
                                    .props
                                    .changeCurrentPage(p);
                                axios
                                    .get(
                                        `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.usersPerPageCount}`
                                    )
                                    .then(response => {
                                        this
                                            .props
                                            .setUsers(response.data.items);
                                        this
                                            .props
                                            .setTotalUsersCount(response.data.totalCount);
                                    });
                            }}
                            className={this.props.currentPage === p
                                ? `${classes.page} ${classes.active}`
                                : `${classes.page}`}>{p}</span>
                          }
                          
                        }

                                

                        )
                    }
                    <span
                        onClick={() => {
                            this
                                .props
                                .nextPage();

                            axios
                                .get(
                                    `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage +
                                    1}&count=${this.props.usersPerPageCount}`
                                )
                                .then(response => {
                                    this
                                        .props
                                        .setUsers(response.data.items);
                                    this
                                        .props
                                        .setTotalUsersCount(response.data.totalCount);
                                });
                        }}
                        className={classes.next_page}>&raquo;</span>
                    <span
                        onClick={this.lastPage}
                        className={`${classes.page_navigation} ${classes.lastPage}`}>Последняя страница</span>
                    <span>
                        Пользователей на странице:
                        <input
                            className={classes.input}
                            type="number"
                            value={this.props.usersPerPageCount}
                            onChange={this.changeUserPerPageCount}/>

                    </span>
                </div>
                <div className={classes.users_wrapper}>
                    {
                        this
                            .props
                            .users
                            .map(user => {
                                if (`${user.name}`.toLowerCase().includes(this.props.searchUsersText.toLowerCase())) {
                                    return <User key={user.id} id={user.id} fullName={user.name} follow={user.followed} smallPhotoSrc={user.photos.small}
                                        // country={user.residency.country}
                                        
                                        // city={user.residency.city}
                                        status={user.status} isFrend={user.isFrend} toFollow={this.props.toFollow} toUnfollow={this.props.toUnfollow} toFriends={this.props.toFriends} fromFriends={this.props.fromFriends}/>
                                }
                            })
                    }
                </div>
            </div>
        )

    }

}

export default Users
