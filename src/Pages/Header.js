import React from 'react'
import { Link } from 'react-scroll'
import headerImg from '../Images/headerImg.png'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className='header_content'>
            <p style={{color:"white",fontSize:"50px", fontWeight:600}}>Grow Your Crypto with</p>
            <p style={{color:"orange",fontSize:"65px", fontWeight:700,marginTop:"-50px"}}>Crpto Tracker Premium</p>
            <p className='header_info'>Crpto Tracker provides you a complete toolset for effortlessly managing all your crypto, NFTs, and DeFi assets from one place. 
                <br/>You will always make precise data-based investment decisions and act at the right time.</p>
            <div className='headerButtons'>
                <button style={{backgroundColor:"Orange"}}>Start free Trial</button>
                <Link to="plan" smooth={true} duration={1000}>
                <button style={{backgroundColor:"rgb(44, 42, 42)", color:"white"}}>View All Plans</button>
                </Link>
            </div>
        </div>
        <div className='header_Img'>
            <img src={headerImg} alt='header Image'/>
        </div>
    </div>
  )
}

export default Header;