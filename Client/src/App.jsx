import {io} from 'socket.io-client';
const socket = io();

export default function App() {

  return (
    <>
      <h1>Chat App</h1>
      <div className="border">
        <input type="text" onClick={(e) => { e.target.value }} className="p-2 border rounded-md" placeholder="Enter Message..." />
        <button type="button" >
          SEND
        </button>
      </div>
    </>
  )
}

