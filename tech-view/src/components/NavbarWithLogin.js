import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link, useNavigate } from 'react-router-dom'
import logo from './logo.png'

// import HomepageWithoutLogin from './components/homePageWithoutlogin/HomePageWithoutLogin'

export default function NavbarWithLogin() {
  const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar style={{
          display: "flex",
          margin: "20px",
          height: "70px",
          position: "relative",
          top: "0px"

        }}>

          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>

            <img src={logo} alt='1' id='img' style={{
              width: "100px",
              height: "100px",
              marginLeft: "5px"
            }} />

          </Typography>
          <Button color='inherit' onClick={() => { navigate('/Profile') }}>Profile</Button>
          <Button color='inherit' onClick={() => { navigate('/home') }}>Sign out</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
