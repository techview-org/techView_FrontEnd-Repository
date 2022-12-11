import './chat.css'
import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './ChatFeed';


const projectID = '8aa56d62-272e-4439-bcac-67425b231684';

export default function ChatFunctionality(){
    
  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName="TECHVIEW"
      userSecret="TECHVIEW"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
}