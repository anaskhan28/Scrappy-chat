import React from 'react';

import {  createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {  auth, db, storage} from "../firebase";
import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate, Link } from 'react-router-dom';
import Background from '../images/background.png'

function Register() {
const navigate = useNavigate()
const [error, setError] = useState(false)
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    
    try{
    const res = await createUserWithEmailAndPassword(auth, email, password)

    
      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      uploadTask.on(
        
        (error) => {
          setError(true);
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            console.log(downloadURL)
            await updateProfile(res.user,{
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid),{
              uid: res.user.uid,
              displayName,
              email, 
              photoURL:downloadURL
            }, { merge: true} );
    
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/")
          });
        });
        


    }
    catch(error){
      setError(true)
    }

  }

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
        <span className="logo">Scrappy Chat</span>
        <span className="title"> Register</span>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='display name'/>
            <input type='email' placeholder='email'/>
            <input type='password' placeholder='password'/>
            <input style={{display: "none"}} type='file' id='file'/>
            <label htmlFor="file">
                
                <span>Add an Avatar</span>
            </label>
            <button>Sign up</button>
            {error && <span>Something went wrong!</span>}
        </form>
        <p>You do have an account?<Link to="/login">Login</Link> </p>
        </div>
        <img className='back-img' src={Background} alt='More'/>
    </div>
  )
}

export default Register