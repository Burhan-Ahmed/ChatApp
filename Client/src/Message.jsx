import {GrAttachment} from 'react-icons/gr'
import {AiOutlineSend} from 'react-icons/ai'
import {BsCardImage} from 'react-icons/bs'
import {IoDocumentAttachSharp} from 'react-icons/io5'
import {BiSolidVideoPlus} from 'react-icons/bi'
import './styles/Message.scss'
import MessageCard from './components/MessageCard'
import { useState } from 'react'

const Message = () => {

  const [isAttatchMenuOpen,setisAttatchMenuOpen] = useState(false)

  return (
    <div className="message-section">
        <div className="messages">
          <MessageCard side={"other"} message={"Hello I'm Under the Water"} image_source={"/src/assets/profile-female-circle2-512.webp"}/>
          <MessageCard side={"user"} message={"Hello I'm Under the Water"}/>
        </div>
        {isAttatchMenuOpen && <div className='attatchment-menu'>
          <span><BsCardImage />Images</span>
          <span><BiSolidVideoPlus />Videos</span>
          <span><IoDocumentAttachSharp />Videos</span>
          </div>}
        <div className='bottom-controls'>
            <input type="text" placeholder='Type Message Here...'/>
            <GrAttachment onClick={()=> setisAttatchMenuOpen(!isAttatchMenuOpen)}/>
            <AiOutlineSend className='send-button'/>
        </div>
    </div>
  )
}

export default Message