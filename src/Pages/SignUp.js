import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import googleIcon from '../Images/googleIcon.png'
import AppleIcon from "@mui/icons-material/Apple";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

  const navigate=useNavigate()

  const handleLogin =()=>{
    navigate('/login')
  }

  return (
    <div className="signUp">
      <div className="container">
        <p>Start managing your crypto portfolio like a pro</p>
        <button style={{ backgroundColor: "blue" }}>Login With CoinBase</button>
        <button style={{ backgroundColor: "orange" }}>
          Sign Up With EMAIL
        </button>
        <p>Or continue with</p>
        <div className="icons">
          <div  >
            <TwitterIcon style={{color:"blue"}} />
          </div>
          <div>
            <FacebookIcon style={{color:"blue"}} />
          </div>
          <div  >
            <img src={googleIcon} alt="google Icon" />
          </div>
          <div  >
            <AppleIcon style={{color:"black"}} />
          </div>
        </div>
      </div>
      <p>
        Already have an account?<span style={{fontWeight:700,cursor:"pointer"}} onClick={handleLogin}> LOGIN</span>
      </p>
      <p>
        By using this service, you agree to our Terms of Use and Privacy Policy
      </p>
    </div>
  );
};

export default SignUp;
