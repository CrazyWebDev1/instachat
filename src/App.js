import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm.jsx"

import './App.css';
const projectID = 'a08a8608-28d2-4b64-bda4-d194fcb86133';
const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <ChatEngine

height="100vh"
userName="DKM Community"
userSecret="Dk123123"
projectID="a08a8608-28d2-4b64-bda4-d194fcb86133"
renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps} />}
onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
/>
);
};

export default App;


