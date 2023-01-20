import React from 'react'
import "./Login.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate=useNavigate()

  const handleSignUp =()=>{
    navigate('/signUp')
  }

  return (
    <div className='login'>
      <h1>Login</h1>
      <div className='loginContainer'>
        <p>Email/Uername</p>
        <input type='text'/>
        <p>Password</p>
        <input type='password'/>
        <button>Login</button>
        <h3 style={{cursor:"pointer"}}>FORGOT PASSWORD ? </h3>
        <h4 style={{marginTop:"-15px"}} >OR LOGIN WITH</h4>
        <div className='loginOptions' style={{marginTop:"-20px"}}>
          <TwitterIcon style={{fontSize:"40px",margin:"10px" , color:"orange"}}/>
          <FacebookIcon style={{fontSize:"40px",margin:"10px", color:"orange"}}/>
          <GoogleIcon style={{fontSize:"40px",margin:"10px", color:"orange"}}/>
          <AppleIcon style={{fontSize:"40px",margin:"10px", color:"orange"}}/>
        </div>
      </div>
      <div className='account'>
        <p>Don't have an account?</p>
        <h4 onClick={handleSignUp}>CREATE ACCOUNT</h4>
      </div>
    </div>
  )
}

export default Login