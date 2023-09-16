import {CgProfile} from 'react-icons/cg'
import '../styles/Navbar.scss'

const Left_Navbar = ({user}) => {
  return (
    <div className="left-navbar">
        <div className="title">My ChatApp</div>
        <div className='profile'><span>{user}</span><span><CgProfile /></span></div>
    </div>
  )
}

const Right_Navbar = ({current_user}) => {
  return (
    <div className="right-navbar">
        <div className="contact-name">{current_user}</div>
        <button>Logout</button>
    </div>
  )
}

const Navbar = ({user , current_user}) => {
  return (
    <div className='navbar'>
    <Left_Navbar user={user}/>
    <Right_Navbar current_user={current_user}/>
    </div>
  )
}

export default Navbar
