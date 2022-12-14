import React,{useContext} from 'react'
import Messages from './Messages'
import Input from './Input'
import Call from '../images/call.svg';
import Video from '../images/video.svg';
import Search from '../images/search.png';
import Lights from '../images/lights.png';



import { ChatContext } from '../context/ChatContext'
function Chat() {
  
  const {data} = useContext(ChatContext)

  return (
    <div className='chat'>
      <div className="chatInfo">
        <span><img src={Lights} alt="light" /></span>
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Call} alt="call"/>
          <img src={ Video} alt="call"/>
          <img src={Search} alt="call"/>
        </div>
        
      </div>
      <Messages/>
      <Input />
    </div>
  )
}

export default Chat