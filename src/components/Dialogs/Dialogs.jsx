/* eslint-disable */
import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
  let messagesElements = props.state.messages.map(m => <Message message={m.message} />)

  const newMessagetElement = React.createRef()
  const addMessage = () => {
    const text = newMessagetElement.current.value;
    alert(text)
  }

    return (
      <div className={s.dialogs}>
        <div className={s.dialogs_items}>
          {dialogsElements}
        </div>
        <div className={s.messages}>
          {messagesElements}
        </div>
        <div className={s.textfield}>
          <div>
            <textarea ref={newMessagetElement} placeholder="Add your message..."></textarea>
          </div>
          <div>
            <button onClick={addMessage}>Add post</button>
          </div>
        </div>
      </div>
    )
  };

  export default Dialogs;
