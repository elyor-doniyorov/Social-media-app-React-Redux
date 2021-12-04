import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = () => (
  <div className={s.dialogs}>
    <div className={s.dialogs_items}>
      <div className={s.dialog}>
        <NavLink to="/dialogs/1">Elyor</NavLink>
      </div>
      <div className={s.dialog}>
        <NavLink to="/dialogs/2">Avazbek</NavLink>
      </div>
      <div className={s.dialog}>
        <NavLink to="/dialogs/3">Dildora</NavLink>
      </div>
      <div className={s.dialog}>
        <NavLink to="/dialogs/4">Bahrom</NavLink>
      </div>
      <div className={s.dialog}>
        <NavLink to="/dialogs/5">Abbos</NavLink>
      </div>
      <div className={s.dialog}>
        <NavLink to="/dialogs/6">Farhod</NavLink>
      </div>
    </div>
    <div className={s.messages}>
      <div className={s.message}>Hi!</div>
      <div className={s.message}>How are you?</div>
      <div className={s.message}>What about you?</div>
    </div>
  </div>
);

export default Dialogs;
