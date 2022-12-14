import React from 'react';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';
import Menu from '../images/MenuBar.png';
function Home() {
  return (
    <>
    <img className='menu' src={Menu} alt="menu"/>
    <div className='home'>
        <div className="container">
            <Sidebar/>
            <Chat/>
        </div>
    </div>
    </>
  )
}

export default Home