import React from 'react';
import topImg from './../img/topImg.jpg';

const Profile = () => {
    return(
<div className='content'>
    <div className='top-img'>
    <img src = {topImg} alt ={"top-img"}/>
    </div>
    <div>
      ava+description
    </div>
    <div>
      My posts
      <div>
        new postss
      </div>
      <div>
        <div>post1</div>
        <div>post2</div>
      </div>
    </div>
</div>
    );
}

export default Profile;