import Navbar from '../Navbar'
import Footer from '../Footer'
// import { Modal } from '@mui/material'
import React, { useState } from 'react';
// import Render from './post.js';
import PostFeed from './newPostPage';
import Dropdown from './Dropdown'
import InputField from './InputField';

export default function MainPage() {

  const background = {
    backgroundColor: '#0D2129',

  }

  return (
    <>
      <Navbar />
      <Dropdown/>
      <InputField />
      <div style={background}>  <PostFeed />  </div>
      <Footer />
    </>
  )
}
