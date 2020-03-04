import React from "react";
import classes from "./Search.module.css";

const Search = props => {
  let searchUsers = e => {
    let text = e.target.value;
    props.searchUsers(text);
    props.getUsers(props.currentPage, props.usersPerPageCount, text)
  };

  return (
    <div>
      <input
        onChange={searchUsers}
        type="text"
        value={props.searchUsersText}
        placeholder="Поиск друзей"
        className={classes.search_wrapper}
      />
    </div>
  );
};

export default Search;
