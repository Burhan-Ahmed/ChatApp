import { useState } from 'react'
import '../styles/ChatCard.scss'

const ChatCard = ({male , contact_name , last_message_received}) => {

    const [isActive,setisActive] = useState(false);

  return (
    <div className={`chat-card ${isActive? "active":""}`} onClick={()=> setisActive(!isActive)}>
        <img src={male===true? "/src/assets/thumbnail.avif":"/src/assets/profile-female-circle2-512.webp"} alt="" />
        <div className="particulars">
            <h4>{contact_name}</h4>
            <h5>{last_message_received}</h5>
        </div>
    </div>
  )
}

export default ChatCard