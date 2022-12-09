import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React, { Component }  from 'react';
import "./Navbar.css";
import logo from './logo.png'; 

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
   TECHVIEW
   <img src ={logo} alt ="1" id= "img"></img>
      </Link>
      
      <ul>
        <CustomLink to="/pricing">Community</CustomLink>
        <CustomLink to="/about">Log Out</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}