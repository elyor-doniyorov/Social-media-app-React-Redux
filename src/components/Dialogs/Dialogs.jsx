/* eslint-disable */
import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem';
import Message from './Message';

const Dialogs = () => {
  let dialogs = [
    { id: 1, name: "Elyor" },
    { id: 2, name: "Avazbek" },
    { id: 3, name: "Dildora" },
    { id: 4, name: "Bahrom" },
    { id: 5, name: "Abbos" },
    { id: 6, name: "Farhod" }
  ];

  let messages = [
    { id: 1, message: "HI" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "What about you?" },
    { id: 4, message: "Yeah?" },
    { id: 5, message: "Yo" }
  ];

  let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
  let messagesElements = messages.map(m => <Message message={m.message} />)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  )
};

export default Dialogs;
