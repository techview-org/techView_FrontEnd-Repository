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

 function Signout() {
    
        window.localStorage.setItem('user', "out")
        window.localStorage.setItem('email', "out")
        window.localStorage.setItem('badge', "out")
        navigate('/')

}


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
          <Button color='inherit' >text</Button>
          <Button color='inherit' >text</Button>
          <Button color='inherit' >text</Button>
          <Button color='inherit' onClick={() => {Signout()}}>longout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
