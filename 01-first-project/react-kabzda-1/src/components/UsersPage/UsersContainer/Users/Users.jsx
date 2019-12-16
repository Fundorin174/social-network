import React from 'react';
import classes from './Users.module.css';
import User from './User/User';
import Search from './Search/Search';
import * as axios from 'axios';

class Users extends React.Component {

    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users?page=1&count=5')
            .then(response => {
                this
                    .props
                    .setUsers(response.data.items)
            });
    }

    render() {
        return <div>
            <div className={classes.search_wrapper}>
                <Search searchUsers={this.props.searchUsers}/>
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
    }

}

export default Users
