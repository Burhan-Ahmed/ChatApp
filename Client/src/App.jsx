import { useState } from "react";
import Chat from "./Chat";
import Navbar from "./components/Navbar";
import Message from "./Message";
import './styles/App.scss'


export default function App() {

  const [History, setHistory] = useState([]);

  return (
    <>
    <Navbar user={"Burhan"} current_user={"Khawar"}/>
    <div style={{"display":"flex"}}>
    <Chat History={History}/>
    <Message History={History} setHistory={setHistory}/>
    </div>
    </>
  )
}

