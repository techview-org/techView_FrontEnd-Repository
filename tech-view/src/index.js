import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Singup from './components/Signup' /// deelte this later on 
import { BrowserRouter } from 'react-router-dom'
import {useState,useEffect,useNavigate} from "react"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
