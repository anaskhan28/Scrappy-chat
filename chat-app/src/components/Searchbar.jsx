import React from 'react'

function Searchbar() {
  return (
    <div className='search'>
    <div className="searchForm">
      <input type="text" placeholder='Find a user'/>
    </div>
    <div className="userChat">
      <img src='https://pbs.twimg.com/profile_images/1566870658767679488/ujShQ2H6_400x400.jpg' alt='user' />
      <div className='userChatInfo'>
      <span>Anas</span>
      </div>
    </div>
    
    </div>
  )
}

export default Searchbar