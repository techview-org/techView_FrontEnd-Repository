import Navbar from '../Navbar'
import PostCardsContainer from './PostCardsContainer'
import SideBar from '../SideBar'
import Footer from '../Footer'
// import { Modal } from '@mui/material'
import Modal from './modal'
import React, { useState } from 'react';
import useModal from './useModal'



export default function MainPage () {
  
  const {isShowing, toggle} = useModal();

  return (
    
    <>
      <Navbar />
      <SideBar />
      <dropdown />
      <button
        className="openModalBtn"
        onClick={() => {
        toggle
        }}
      >
        Create A New Post
      </button>

      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
      <PostCardsContainer />
      <Footer />
    </>
  )
}

function dropdown () {
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
