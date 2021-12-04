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
      <Post message="Why nobody loves me?" likeCount="430 like" />
      <Post message="Hi everyone!" likeCount="430 like" />
      <Post message="I am Elyor" likeCount="430 like" />
      <Post message="I want to earn $1000 per month" likeCount="530 like" />
      <Post message="How to improve logical thinking?" likeCount="460 like" />
    </div>
  </div>
);

export default MyPosts;
