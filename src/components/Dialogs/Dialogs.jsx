/* eslint-disable */
import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem';
import Message from './Message';

let dialogsData = [
  { id: 1, name: "Elyor" },
  { id: 2, name: "Avazbek" },
  { id: 3, name: "Dildora" },
  { id: 4, name: "Bahrom" },
  { id: 5, name: "Abbos" },
  { id: 6, name: "Farhod" }
];

let messagesData = [
  { id: 1, message: "HI" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "What about you?" },
  { id: 4, message: "Yeah?" },
  { id: 5, message: "Yo" }
];

const Dialogs = () => (
  <div className={s.dialogs}>
    <div className={s.dialogs_items}>
      <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
      <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
      <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
    </div>
    <div className={s.messages}>
      <Message message={messagesData[0].message} />
      <Message message={messagesData[1].message} />
      <Message message={messagesData[2].message} />
    </div>
  </div>
);

export default Dialogs;
