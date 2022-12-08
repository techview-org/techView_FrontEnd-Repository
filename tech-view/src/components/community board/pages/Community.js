import PostCardsContainer from './PostCardsContainer'
import Navbar from '../components/Navbar'
import Footer from '../Footer'
import PostCardsContainer from './postContainer'
import Communitylist from './communitylist'
import React, { useContext, useEffect, useState } from "react";


export default function Community() {



  return (
    <>
      <Navbar />
      <PostCardsContainer />
      <Communitylist/>
      <Footer/>
    </>
  )
}

