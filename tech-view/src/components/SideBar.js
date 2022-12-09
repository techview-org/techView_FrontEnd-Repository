import { Link, useNavigate } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function SideBar () {

  const navigate = useNavigate()
  const sidebarStyling = {
    height: '100vh',
    width: '160px',
    position: 'sticky',
    marginLeft: "0px",
    zIndex: -1,
    top: 'auto',
    left: 0,
    backgroundColor: 'black',
    color:"aqua",
    overflowX: 'hidden',
    paddingTop: '0'
  }

  const sideBarItemStyling = {
    color: 'white', padding: '6px 8px 6px 16px', display: 'block'
  }

  return (
    <div style={sidebarStyling}>
      <Button color='inherit' onClick={() => { navigate('/Home') }}>users</Button>
          <Button color='inherit' onClick={() => { navigate('/login') }}>Latest News</Button>
    
          <Button color='inherit' onClick={() => { navigate('/Community') }}>Companies</Button>
    </div>
  )
}

export default SideBar
