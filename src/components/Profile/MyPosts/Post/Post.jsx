/* eslint-disable */
import React from 'react';
import s from './Post.module.css';

const Post = (props) => (
  <div className={s.item}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9iSSdnDdhfRK-H8o4M0XfQxagijAQT83AQ&usqp=CAU" />
    { props.message }
    <div>
      <span>Like</span> { props.likesCount }
    </div>
  </div>
);

export default Post;
