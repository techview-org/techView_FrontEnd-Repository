import Navbar from '../Navbar'
import PostCardsContainer from './PostCardsContainer'
import SideBar from '../SideBar'
import Footer from '../Footer'
// import { Modal } from '@mui/material'
import Modal from './modal'
import React, { useState } from 'react';
import useModal from './useModal'
import './Modal.css'
import Render from './post.js'
import './App.css'



export default function MainPage() {

  const { isShowing, toggle } = useModal();

  return (

    <>
      <Navbar />
      <SideBar />
      <dropdown />
      <button className="button-default" onClick={toggle}>
        Create A New Post
      </button>

      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
     <div><Render/>
     <div><PostCardsContainer /></div></div> 
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
