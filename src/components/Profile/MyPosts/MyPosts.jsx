/* eslint-disable */
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let postData = [
    { id: 1, message: "Why nobody loves me?", likesCount: 0 },
    { id: 2, message: "Hi everyone!", likesCount: 10 },
    { id: 3, message: "I am Elyor", likesCount: 12 },
    { id: 4, message: "I want to earn $1000 per month", likesCount: 20 },
    { id: 5, message: "How to improve logical thinking?", likesCount: 9 }
  ];
  return (
  <div className={s.myPosts}>
    <h3>My posts</h3>
    <div>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </div>
    <div className={s.posts}>
      <Post message={postData[0].message} likesCount={postData[0].likesCount} />
      <Post message={postData[1].message} likesCount={postData[1].likesCount} />
      <Post message={postData[2].message} likesCount={postData[2].likesCount} />
      <Post message={postData[3].message} likesCount={postData[3].likesCount} />
      <Post message={postData[4].message} likesCount={postData[4].likesCount} />
    </div>
  </div>
  );
};

export default MyPosts;
