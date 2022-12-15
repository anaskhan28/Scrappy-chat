import { onSnapshot, doc } from 'firebase/firestore';
import { db } from '../firebase';
import React,{useContext} from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { ChatContext } from '../context/ChatContext'
import Message from './Message'
import Encryption from '../images/message.png';
function Messages() {
  const [messages, setMessages] = useState([]);
  const {data} = useContext(ChatContext);

  useEffect(()=>{
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc)=>{
      doc.exists() && setMessages(doc.data().messages)
    })
    return () =>{
      unsub()
    }
  }, [data.chatId])

  return (
    <div className='messages'>
      <img src={Encryption} alt=""/>
      {messages.map(m => (
      <Message message={m} key={m.id}/>
      ))}
    </div>
  )
}

export default Messages