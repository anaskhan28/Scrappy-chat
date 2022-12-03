import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
      <span className="logo">Scrappy Chat</span>
      <div className='user'>
        <img src='https://pbs.twimg.com/profile_images/1566870658767679488/ujShQ2H6_400x400.jpg' alt=''/>
        <span>Anas</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar