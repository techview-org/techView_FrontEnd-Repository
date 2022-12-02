import Navbar from "./community board/components/Navbar";
import Footer from "./community board/components/Footer";
import React from 'react';
import Community from "./community board/components/Community";
import React from "react";
import * as Unicons from '@iconscout/react-unicons';



function App() {
  return (
    <div>
      <Unicons.UilReact />
      <Navbar />
      <div><Community /></div>
      <div>
        <Footer />
      </div>
    </div>
  )
}



export default App;

