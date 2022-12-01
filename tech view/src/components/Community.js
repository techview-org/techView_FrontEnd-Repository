import PostCardsContainer from './postContainer'
import Navbar from './Navbar'
import Footer from './Footer'
import Communitylist from './communitylist'
import React, { useContext, useEffect, useState } from "react";

export default function Community() {

  const [show,setShow] = useState(false);

  
  return (
    <div>
       <Navbar />
       <div>
      
       <div><Communitylist/></div>
       <button onClick={() => setShow(true)}></button>
       <div><PostCardsContainer onClick={() => setShow(false)} show={show} /></div>
       </div>
      <Footer/>
    </div>
     
    
  )
}

