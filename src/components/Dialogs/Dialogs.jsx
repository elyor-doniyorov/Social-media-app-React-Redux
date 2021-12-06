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

let dialogsElements = dialogsData.map ( dialog => <DialogItem name={dialog.name} id={dialog.id} />)

let messagesData = [
  { id: 1, message: "HI" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "What about you?" },
  { id: 4, message: "Yeah?" },
  { id: 5, message: "Yo" }
];

let messages = messagesData.map(message => <Message message={message.message} />)

const Dialogs = () => (
  <div className={s.dialogs}>
    <div className={s.dialogs_items}>
      {dialogsElements}
    </div>
    <div className={s.messages}>
      {messages}
    </div>
  </div>
);

export default Dialogs;
