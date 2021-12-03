/* eslint-disable */
import React from 'react';
import s from './Profile.module.css';

const Profile = () => (
  <div className={s.content}>
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyVQ31aLZ4MtwTqvDChFTgI1mp8Duma8StXA&usqp=CAU" alt="profile" />
    </div>
    <div>
      ava + description
    </div>
    <div>
      My posts
      <div>
        New post
      </div>
    </div>
    <div className={s.posts}>
      <div className={s.item}>
        Post 1
      </div>
      <div className={s.item}>
        Post 2
      </div>
    </div>
  </div>
);

export default Profile;
