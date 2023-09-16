import Chat from "./Chat";
import Navbar from "./components/Navbar";
import Message from "./Message";
import './styles/App.scss'


export default function App() {

  return (
    <>
    <Navbar user={"Burhan"} current_user={"Khawar"}/>
    <div style={{"display":"flex"}}>
    <Chat />
    <Message />
    </div>
    </>
  )
}

