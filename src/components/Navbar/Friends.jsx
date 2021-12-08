/* eslint-disable */
import React from 'react';
import s from './Friends.module.css';

const Friends = (props) => (
  <div className={s.friends}>
    <span className={s.friend}>
      <img src={props.image} />
      {props.name}
    </span>
  </div>
);

export default Friends;
