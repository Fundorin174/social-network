import React from 'react';
import profileReducer, {changeNumOfLike} from "./profileReduser";

let initialState = {
  posts: [{
    id: '1',
    msg: 'И снова здрасте-)',
    numOfLikes: 0
  }, {
    id: '2',
    msg: 'Привет, народ!)',
    numOfLikes: 0
  }],
  currentProfile: null,
  newPostText: '',
  newNumOfLikes: '',
  currentStatus: '',
};

let action = changeNumOfLike(5, 1);

it('should change num of Like to Post', () => {
let newState = profileReducer(initialState, action);

expect(newState.newNumOfLikes).toBe(6);
});

