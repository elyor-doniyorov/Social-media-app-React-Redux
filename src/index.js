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

const dialogs = [
  { id: 1, name: 'Elyor' },
  { id: 2, name: 'Avazbek' },
  { id: 3, name: 'Dildora' },
  { id: 4, name: 'Bahrom' },
  { id: 5, name: 'Abbos' },
  { id: 6, name: 'Farhod' },
];

const messages = [
  { id: 1, message: 'HI' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'What about you?' },
  { id: 4, message: 'Yeah?' },
  { id: 5, message: 'Yo' },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root'),
);
