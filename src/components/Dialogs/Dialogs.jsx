import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem';
import Message from './Message';

const Dialogs = () => (
  <div className={s.dialogs}>
    <div className={s.dialogs_items}>
      <DialogItem name="Elyor" id="1" />
      <DialogItem name="Avazbek" id="2" />
      <DialogItem name="Dildora" id="3" />
      <DialogItem name="Bahrom" id="4" />
      <DialogItem name="Abbos" id="5" />
      <DialogItem name="Farhod" id="6" />
    </div>
    <div className={s.messages}>
      <Message message="HI" />
      <Message message="How are you?" />
      <Message message="What about you?" />
      <Message message="Yeah?" />
      <Message message="Yo" />
    </div>
  </div>
);

export default Dialogs;
