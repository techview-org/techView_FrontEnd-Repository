import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ChatFunctionality from './ChatFunctionality';


const style = {
  position: 'relative',
  top: '250px',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '800px',
  height:'600px',
  paddingBottom:"50",
  paddingTop:"50",

  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const button = {
  backgroundColor:"gray",
  height:"50",
  width:"120"
}

function ChatModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

 

  return (
    <div>
    <Button style = {button} onClick={handleOpen}>Chat Today</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
       <div><ChatFunctionality/></div>
        </Box>
      </Modal>
    </div>
  );
}

export default ChatModal;
