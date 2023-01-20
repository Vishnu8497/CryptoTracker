import React, { useState } from 'react'
import logo from '../Images/logo.png'
import './NavBar.css'
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const NavBar = () => {

  const navigate=useNavigate()
  const handleLogin =()=>{
    navigate('/login')
  }
  const handlelogoClick =()=>{
    navigate('/')
  }

  const handleCrypto =()=>{
    navigate('/cryptoTracker')
    
  }

  const handleSignUp =()=>{
    navigate('/signUp')
  }

  const handlePlan =()=>{
    navigate('/plan')
  }
  return (
    <div className='navbar'>
        <div className='navbar_logo'>        
        <img src={logo} alt="logo" onClick={handlelogoClick}/>
        <h1 onClick={handlelogoClick}>Crypto Tracker</h1>
        </div>
        <div className='navbar_items'>
            <h4>Swap</h4>
            <h4 onClick={handleCrypto}>CryptoCurreencies</h4>
            <h4 onClick={handlePlan}>Pricing</h4>
            <h4>Blog</h4>
        </div>
        <div className='navbar_search'>
        <input type="text" placeholder="Search"/>
        <SearchIcon/>        
        </div>
        <div className='navbar_login'>
          <h4 onClick={handleLogin}>Login</h4>
          <button onClick={handleSignUp}>Get Started</button>
        </div>
    </div>
  )
}

export default NavBar