import React from 'react';
import Add from '../images/addAvatar.png';
function Register() {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
        <span className="logo">Scrappy Chat</span>
        <span className="title"> Register</span>
        <form>
            <input type='text' placeholder='display name'/>
            <input type='email' placeholder='email'/>
            <input type='password' placeholder='password'/>
            <input style={{display: "none"}} type='file' id='file'/>
            <label htmlFor="file">
                <img src={Add} alt="avatar"/>
                <span>Add an Avatar</span>
            </label>
            <button>Sign up</button>
        </form>
        <p>You do have an account? Login</p>
        </div>
    </div>
  )
}

export default Register