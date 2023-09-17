import '../styles/MessageCard.scss'

const MessageCard = ({side , message , image_source}) => {
  return (
    <div className={`message-box ${side==="other"? "other":"user"}`}>
      <img src="/src/assets/thumbnail.avif"/>
      <div className="message-content">
      {message && <div>{message}</div>}
      {image_source && <div><img src={image_source}/></div>}
      </div>
    </div>
  )
}

export default MessageCard