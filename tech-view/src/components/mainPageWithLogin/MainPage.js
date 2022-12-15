import Navbar from '../Navbar'
import Footer from '../Footer'
// import { Modal } from '@mui/material'
import React, { useState } from 'react';
// import Render from './post.js';
import PostFeed from './newPostPage';
import Chatbox from '../ChatComponents/chatbox';
import Dropdown from './Dropdown'

export default function MainPage() {

  const background = {
    backgroundColor: '#0D2129',

  }

  return (
    <>
      <Navbar />
      <Dropdown/>
      <div style={background}>  <PostFeed />  </div>
      <Footer />
    </>
  )
}
