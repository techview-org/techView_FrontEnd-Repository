import './chat.css'
import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './ChatFeed';
import {io} from 'socket.io-client';
import {useEffect} from 'react';


const address ='http://websocket.service:8000'
const socket = new WebSocket(address);
// const socket = io('http://localhost:3000')
const projectID = '8aa56d62-272e-4439-bcac-67425b231684';
socket.on('connect',()=>{
  console.log(`You connected with id:${socket.id} `)
})



export default function ChatFunctionality(){
  useEffect(() => {
    socket = new WebSocket(address);
    return () => {
        if (socket.readyState === 1) { // <-- This is important
            socket.close();
        }
    };
  })
    
  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName="TECHVIEW"
      userSecret="TECHVIEW"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>{ new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play(); socket.emit("hello");}}
    />
  );
}