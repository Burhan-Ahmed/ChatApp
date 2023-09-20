import '../styles/MessageCard.scss'

const MessageCard = ({type , message , image_source}) => {
  return (
    <div className={`message-box ${type==='sent'? "sent":"received"}`}>
    <img src="/src/assets/thumbnail.avif"/>
    <div className="message-content">
      {message && <div>{message}</div>}
      {image_source && <div><img src={image_source}/></div>}
      </div>
    </div>
  )
}

export default MessageCard