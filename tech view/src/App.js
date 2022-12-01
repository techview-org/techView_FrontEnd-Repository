import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React from 'react';
import Community from "./components/Community";
import { useState, createContext } from "react";


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
      <Navbar />
      <div><Community/></div>

      <div>
        <Footer />
      </div>
    </div>


  )
}



export default App;

