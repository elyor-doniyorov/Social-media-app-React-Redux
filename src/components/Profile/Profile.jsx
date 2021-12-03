/* eslint-disable */
import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => (
  <div className={s.content}>
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyVQ31aLZ4MtwTqvDChFTgI1mp8Duma8StXA&usqp=CAU" alt="profile" />
    </div>
    <div>
      ava + description
    </div>
    <MyPosts />
  </div>
);

export default Profile;
