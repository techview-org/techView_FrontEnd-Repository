import Chat from './chat_icon.png';
import ChatModal from './ChatModal';
import Button from '@mui/material/Button';

function Chatbox () {

  
    const sidebarStyling = {
      position:"fixed",
      right:"10px",
      bottom:"10px"

    }

    const handleClick = () =>{
      return (<ChatModal/>)
    }
  
    return (
      <Button onClick={handleClick} style={sidebarStyling}>
       <img   src={Chat} alt='chatbox' id='img'  style={{ width:"100px",
  height:"100px",
  marginRight: "5px"}} />
      </Button>
    )
  }

  export default Chatbox