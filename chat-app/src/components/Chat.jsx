import React,{useContext} from 'react'
import Cam from '../images/Cam.png'
import Add from '../images/Add.png'
import More from '../images/More.png'
import Messages from './Messages'
import Input from './Input'

import { ChatContext } from '../context/ChatContext'
function Chat() {
  
  const {data} = useContext(ChatContext)

  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt='camer'/>
          <img src={Add} alt='Add'/>
          <img src={More} alt='More'/>
        </div>
        
      </div>
      <Messages/>
      <Input />
    </div>
  )
}

export default Chat