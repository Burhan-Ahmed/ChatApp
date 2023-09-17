import { io } from 'socket.io-client';
import React, { useState, useEffect } from 'react';

const socket = io('http://localhost:8000');


export default function App() {

  const [message, setMessage] = useState('');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    socket.on('message', (msg) => {
      setHistory((prevMessages) => [...prevMessages, { text: msg, type: 'received' }]);
      console.log('Received message:', msg);

    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() !== '') {
      socket.emit('message', message);
      setHistory((prevMessages) => [...prevMessages, { text: message, type: 'sent' }]);
      console.log('Message sent:', message);
      setMessage('');
    }
  };
  return (
    <>
      <h1>Chat App</h1>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-2 border rounded-md"
          placeholder="Enter Message..."
        />
        <button type="button" onClick={sendMessage}>
          SEND
        </button>
      </div>
      <div className="messages">
        {history.map((msg, index) => (
          <div key={index} className={`message ${msg.type}`}>
            {msg.text}
          </div>
        ))}
      </div>
    </>
  )
}

