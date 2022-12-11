import React, { useContext, useState } from 'react';
import './style.scss';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
function App() {
const {currentUser} = useContext(AuthContext)

const ProtectedRoute = ({children}) =>{
  if(!currentUser){
    return <Navigate to="/login"/>
  }
  return children
}
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={
        <ProtectedRoute>
          <Home/>
          </ProtectedRoute>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>

        </Routes>
      
      </Router>
    </div>
  )
}

export default App
