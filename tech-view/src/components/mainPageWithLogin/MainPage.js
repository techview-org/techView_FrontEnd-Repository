import Navbar from '../Navbar'
import Navbarwith from '../NavabarWithLogin';
import Footer from '../Footer'
// import { Modal } from '@mui/material'
import React, { useState } from 'react';
// import Render from './post.js';
// import PostFeed from './newPostPage';
// import MyFeed from '../newComponents/myFeed/MyFeed';


export default function MainPage() {

  const background = {
    backgroundColor: '#0D2129',

  }

  return (
    <>
      <Navbarwith/>
      <div style={background}>   </div>
      {/* <Footer /> */}
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
