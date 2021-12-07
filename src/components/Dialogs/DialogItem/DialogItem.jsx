/* eslint-disable */
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogsItem.module.css';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialogsItem}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9iSSdnDdhfRK-H8o4M0XfQxagijAQT83AQ&usqp=CAU" />
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
