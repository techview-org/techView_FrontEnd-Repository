import Navbar from "./community board/components/Navbar";
import Footer from "./community board/components/Footer";
import React from 'react';
import Community from "./community board/components/Community";
import { useState, createContext } from "react";
import * as Unicons from '@iconscout/react-unicons';


export const AppContext = createContext(null);

const UseInputValueForFetch = (event) => {
  const [text, getInput] = useState("");//onchange
  event.preventDefault()
  let textFromForm = event.target.value;
  getInput(textFromForm)
}

const ProcessInputUsingButton = () => {
  const [text, setInput] = useState("");//buttons
  setInput(text)
}

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

