import { ImSearch } from 'react-icons/im'
import ChatCard from './components/ChatCard'
import './styles/Chat.scss'

const Chat = ({History}) => {
    return (
        <div className="left-menu">
            <div className="search-bar">
                <div className='search-row'>
                    <ImSearch />
                    <input type="text" id='search' className='search-input' placeholder='Search Here' />
                </div>
                <hr />
            </div>
            <div className='chats'>
                <ChatCard male={true} contact_name={"Khawar"} last_message_received={History.length>0 && History[History.length-1].text}/>
                <ChatCard male={true} contact_name={"Bilal Sarwar"} last_message_received={"Burhan will you make group with us?"}/>
                <ChatCard contact_name={"Phoolon Wali"} last_message_received={"Mere peeche kyun bhaag rahe the?"}/>
                <ChatCard male={true} contact_name={"Khalil"} last_message_received={"Office Kab aarhe ho?"}/>
            </div>
        </div>
    )
}

export default Chat