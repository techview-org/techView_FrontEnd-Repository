import Chat from './chat_icon.png';
import ChatModal from './ChatModal';
import Button from '@mui/material/Button';

function Chatbox () {

  
    const sidebarStyling = {
      position:"fixed",
      right:"5px",
      bottom:"100px"

    }
    return (
      <Button  style={sidebarStyling}>
       <img   src={Chat} alt='chatbox' id='img'  style={{ width:"100px",
  height:"100px",
  marginRight: "2px"}} />
      <ChatModal/></Button>
    )
  }

  export default Chatbox