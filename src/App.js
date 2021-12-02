import React from 'react';
import './App.css';

const App = () => (
  <div className="app-wrapper">
    <header className="header">
      <img src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png" alt="logo" />
    </header>
    <nav className="nav">
      <div>
        <a href="#s">Profile</a>
      </div>
      <div>
        <a href="#s">Messages</a>
      </div>
      <div>
        <a href="#s">News</a>
      </div>
      <div>
        <a href="#s">Music</a>
      </div>
      <div>
        <a href="#s">Settings</a>
      </div>
    </nav>
    <div className="content">
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyVQ31aLZ4MtwTqvDChFTgI1mp8Duma8StXA&usqp=CAU" alt="profile" />
      </div>
      <div>
        ava + description
      </div>
      <div>
        My posts
        <div>
          New post
        </div>
      </div>
      <div>
        <div>
          Post 1
        </div>
        <div>
          Post 2
        </div>
      </div>
    </div>
  </div>
);

export default App;
