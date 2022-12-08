import Render from './post.js'
import "./Modal.css";
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  const [modalOpen, setOpenModal] = useState(false);

    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              hide
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>What's on your mind today?</h1>
        </div>
        <div className="body">
         <Render/>
        </div>
        <div className="footer">
          <button
            onClick={() => {
             hide
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  ):null

export default Modal;

