import Navbar from '../Navbar'

import Footer from '../Footer'
// import { Modal } from '@mui/material'
import React, { useState } from 'react';
// import Render from './post.js';
import PostFeed from './newPostPage';
import Chatbox from '../ChatComponents/chatbox';

export default function MainPage() {

  const background = {
    backgroundColor: '#0D2129',

  }

  return (
    <>
      <Navbar />
      <div style={background}>  <PostFeed />  </div>
      <Footer />
    </>
  )
}

function dropdown() {
  return (
    <>
      <label for='categories'>Filter</label>
      <select name='categories'>
        <option>Behavioral</option>
        <option>Technical</option>
        <option>Code 75</option>
      </select>
    </>
  )
}
