import React from 'react';
import classes from './Paginator.module.css';

const Pagination = (props) => {
    let pages = [];
    let j = props.currentPage;
    for (let i = props.currentPage; i < j + 5; i++) {
        pages.push(i);
    }
    return (
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
                        } else {return  null}
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
    )

}

export default Pagination
