import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import React from 'react'
import './Footer.css'
import logo from './logo.png'

export default function Footer () {
  return (
    <footer className='footer'>

      <img src={logo} alt='1' id='img' />
      <ul>
        <CustomLink to='/pricing'>Resources</CustomLink>
        <CustomLink to='/about'>Contact Us</CustomLink>
      </ul>
    </footer>
  )
}

function CustomLink ({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActives = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActives ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
