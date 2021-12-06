/* eslint-disable */
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogsItem.module.css';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialogsItem}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
