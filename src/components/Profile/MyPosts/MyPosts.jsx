/* eslint-disable */
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => (
  <div>
    My posts
    <div>
      <textarea></textarea>
      <button>Add post</button>
    </div>
    <div className={s.posts}>
      <Post message="Why nobody loves me?" likeCount="30" />
      <Post message="Hi everyone!" likeCount="36" />
      <Post message="I am Elyor" likeCount="30" />
      <Post message="I want to earn $1000 per month" likeCount="50" />
      <Post message="How to improve logical thinking?" likeCount="60" />
    </div>
  </div>
);

export default MyPosts;
