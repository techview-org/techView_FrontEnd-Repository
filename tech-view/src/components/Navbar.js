import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link, useNavigate } from 'react-router-dom'
import logo from './logo.png'

export default function Navbar () {
  const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>

          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <Link
              style={{
                textDecoration: 'none',
                color: 'white'
              }} to='/'
            >Techview
            </Link>

          </Typography>
          <Button color='inherit' onClick={() => { navigate('/login') }}>Login</Button>
          <Button color='inherit' onClick={() => { navigate('/signup') }}>Signup</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
