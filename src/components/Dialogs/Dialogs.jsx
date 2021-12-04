import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => (
  <div className={s.dialogs}>
    <div className={s.dialogs_items}>
      <div className={s.dialog}>
        Elyor
      </div>
      <div className={s.dialog}>
        Avazbek
      </div>
      <div className={s.dialog}>
        Dildora
      </div>
      <div className={s.dialog}>
        NoName
      </div>
      <div className={s.dialog}>
        NoName
      </div>
      <div className={s.dialog}>
        NoName
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
