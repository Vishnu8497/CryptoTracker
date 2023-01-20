import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import store from '../Images/store.png'
import store1 from '../Images/store1.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <h4>Stay In Touch</h4>
        <div className='footerIcons'>
            <TwitterIcon style={{fontSize:"40px",margin:"10px"}}/>
            <InstagramIcon style={{fontSize:"40px",margin:"10px"}}/>
            <TelegramIcon style={{fontSize:"40px",margin:"10px"}}/>
            <FacebookIcon style={{fontSize:"40px",margin:"10px"}}/>
            <LinkedInIcon style={{fontSize:"40px",margin:"10px"}}/>
            <YouTubeIcon style={{fontSize:"40px",margin:"10px"}}/>           
            <EmailIcon style={{fontSize:"40px",margin:"10px"}}/>
        </div>
        <h4>Expore Our Product</h4>
        <div className='product'>
          <img src={store} alt="Apple Store Image" style={{height:"100px", width:"450px"}}/>
          <img src={store1} alt="Google Store Image" style={{height:"75px", width:"450px"}}/>
        </div>

    </div>
  )
}

export default Footer