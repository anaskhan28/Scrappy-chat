import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase'
import Background from '../images/background.png'
function Login() {

  const navigate = useNavigate()
  const [error, setError] = useState(false)
    const handleSubmit = async (e) =>{
      e.preventDefault();
      const email = e.target[0].value;
      const password = e.target[1].value;
      
      try{
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
      }
      catch(error){
        setError(true)
      }
    }

  return (
    <div className='formContainer'>
      <div className='forms'>
      
        <div className='formWrapper'>
        <span className="logo">Scrappy Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
            
            <input type='email' placeholder='email'/>
            <input type='password' placeholder='password'/>
            <button>Sign in</button>
            {error && <span>Something went wrong!</span>}
        </form>
        <p>You don't have an account?<Link to="/register">Register</Link>  </p>
        </div>
        </div>
        <img className='back-img' src={Background} alt='More'/>
    </div>
  )
}

export default Login