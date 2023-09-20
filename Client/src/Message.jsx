import { io } from 'socket.io-client';
import {GrAttachment} from 'react-icons/gr'
import {AiOutlineSend} from 'react-icons/ai'
import { useState, useEffect } from 'react';
import {BsCardImage} from 'react-icons/bs'
import {IoDocumentAttachSharp} from 'react-icons/io5'
import {BiSolidVideoPlus} from 'react-icons/bi'
import MessageCard from './components/MessageCard'
import './styles/Message.scss'
const socket = io('http://localhost:8000');

const Message = ({History , setHistory}) => {

  const [isAttatchMenuOpen,setisAttatchMenuOpen] = useState(false)
  
  const [Message, setMessage] = useState('');

  useEffect(() => {
    socket.on('message', (msg) => {
      setHistory((prevMessages)=> [...prevMessages, { text: msg, type: 'received' }]);
      // console.log('Received message:', msg);

    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (Message.trim() !== '') {
          socket.emit('message', Message);
          setHistory([...History, { text: Message, type: 'sent' }]);
          // console.log('Message sent:', Message);
          setMessage('');
        }
    document.getElementById('msg-input').value="";
  };
  return (
    <div className="message-section">
        <div className="messages">
          {History.length>0 && History.map((index,iter)=>{
            return  <MessageCard key={iter} type={index.type} message={index.text} image_source={index.image}/>
          })}
        </div>
        {isAttatchMenuOpen && <div className='attatchment-menu'>
          <span><BsCardImage />Images</span>
          <span><BiSolidVideoPlus />Videos</span>
          <span><IoDocumentAttachSharp />Videos</span>
          </div>}
        <div className='bottom-controls'>
            <input type="text" id='msg-input' placeholder='Type Message Here...' onChange={(e) => setMessage(e.target.value)} onKeyDown={(e)=> {if(e.key==="Enter") sendMessage()}}/>
            <GrAttachment onClick={()=> setisAttatchMenuOpen(!isAttatchMenuOpen)}/>
            <AiOutlineSend className='send-button' onClick={sendMessage}/>
        </div>
    </div>
  )
}

export default Message