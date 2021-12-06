/* eslint-disable */
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let posts = [
    { id: 1, message: "Why nobody loves me?", likesCount: 0 },
    { id: 2, message: "Hi everyone!", likesCount: 10 },
    { id: 3, message: "I am Elyor", likesCount: 12 },
    { id: 4, message: "I want to earn $1000 per month", likesCount: 20 },
    { id: 5, message: "How to improve logical thinking?", likesCount: 9 }
  ];

  let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

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
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
