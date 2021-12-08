/* eslint-disable */
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => (
  <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/dialogs">Messages</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/news">News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/music">Music</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/settings">Settings</NavLink>
    </div>
    <div className={s.item2}>
      <NavLink to="/friends" className={s.centered_title}>Friends</NavLink>
      <div className={s.best_friends}>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9iSSdnDdhfRK-H8o4M0XfQxagijAQT83AQ&usqp=CAU" alt="friends" />
          <small>Mike</small>
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9iSSdnDdhfRK-H8o4M0XfQxagijAQT83AQ&usqp=CAU" alt="friends" />
          <small>Mike</small>
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9iSSdnDdhfRK-H8o4M0XfQxagijAQT83AQ&usqp=CAU" alt="friends" />
          <small>Mike</small>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
