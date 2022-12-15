import React, { useState, useEffect, useNavigate } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Singup from './components/Signup' /// deelte this later on
import { BrowserRouter } from 'react-router-dom'
import ContextProvider from './context/ContextProvider'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
)
