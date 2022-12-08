import PostCardsContainer from './postContainer'
import Navbar from './Navbar'
import Footer from './Footer'
import Communitylist from './communitylist'
import React, { useContext, useEffect, useState } from "react";
import PostSide from './PostSide/PostSide';

export default function Community() {

  const [show,setShow] = useState(false);

  
  return (
    <div>
       <Navbar />
       <div>
      
       <div><Communitylist/></div>
       <button onClick={() => setShow(true)}>Modal</button>
       <div><PostSide /></div>
       </div>
      <Footer/>
    </div>
     
    
  )
}

