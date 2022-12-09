import Chat from './chat_icon.png'

function Chatbox () {

  
    const sidebarStyling = {
      position:"fixed",
      right:"10px",
      bottom:"10px"

    }
  
    return (
      <div style={sidebarStyling}>
       <img src={Chat} alt='chatbox' id='img'  style={{ width:"100px",
  height:"100px",
  marginLeft: "5px"}} />
      </div>
    )
  }

  export default Chatbox