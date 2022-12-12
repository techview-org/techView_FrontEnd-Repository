import React from 'react';
import Navbar from '../Navbar'
import PostCardsContainer from './PostCardsContainer'
import SideBar from '../SideBar'
import Footer from '../Footer'
import NavbarLogin from '../NavbarLogin'
import Dropdown from './Dropdown'
import { useNavigate  } from 'react-router-dom'
export default function MainPage () {
  const navigate = useNavigate()

  return (
    <>
      <NavbarLogin />
      {/* <SideBar /> */}
      <Dropdown />
      <button>Create a New Post</button>
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
