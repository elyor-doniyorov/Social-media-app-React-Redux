/* eslint-disable */
import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => (
  <div className={s.profileInfo}>
    <div>
      <img className={s.profileImage} src="https://s3-eu-central-1.amazonaws.com/centaur-wp/creativereview/prod/content/uploads/2017/05/CodeArticle.jpg" alt="profile" />
    </div>
    <div className={s.profileDescription}>
      ava + description
    </div>
  </div>
);

export default ProfileInfo;
