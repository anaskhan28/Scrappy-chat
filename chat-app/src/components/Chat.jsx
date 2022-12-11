import React,{useContext} from 'react'
import {AiOutlineVideoCameraAdd} from 'react-icons/ai'
import {HiOutlineDotsHorizontal} from 'react-icons/hi'
import {CgProfile} from 'react-icons/cg'
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
          <AiOutlineVideoCameraAdd/>
          <CgProfile/>
          <HiOutlineDotsHorizontal/>
        </div>
        
      </div>
      <Messages/>
      <Input />
    </div>
  )
}

export default Chat