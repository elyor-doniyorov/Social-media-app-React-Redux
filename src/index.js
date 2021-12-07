import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const posts = [
  { id: 1, message: 'Why nobody loves me?', likesCount: 0 },
  { id: 2, message: 'Hi everyone!', likesCount: 10 },
  { id: 3, message: 'I am Elyor', likesCount: 12 },
  { id: 4, message: 'I want to earn $1000 per month', likesCount: 20 },
  { id: 5, message: 'How to improve logical thinking?', likesCount: 9 },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} />
  </React.StrictMode>,
  document.getElementById('root'),
);
