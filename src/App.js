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
    height='100vh'
    projectID='a08a8608-28d2-4b64-bda4-d194fcb86133'
    userName="DKM community"
    userSecret="afiie58f2jd"
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />

);
};

export default App;


