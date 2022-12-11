import Navbar from '../Navbar'
import SideBar from '../SideBar'
import Footer from '../Footer'
// import { Modal } from '@mui/material'
import React, { useState } from 'react';
import Render from './post.js';
export default function MainPage() {

const background = {
  backgroundColor: 'white',
}

  return (
    <>
      <Navbar />
    <div style={background}>  <Render />  <SideBar /></div>
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
