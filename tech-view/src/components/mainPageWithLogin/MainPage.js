import Navbar from '../Navbar'

import SideBar from '../SideBar'
import Footer from '../Footer'
// import { Modal } from '@mui/material'
import Modal from './modal'
import React, { useState } from 'react';
import useModal from './useModal'
import './Modal.css'
import Render from './post.js'
import './post.css'

import Chatbox from './chatbox'

export default function MainPage() {



  return (

    <>
      <Navbar />
    <div><Render /> </div> <SideBar /><div></div>
    <Chatbox/>
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
