import React from 'react'
import AppInfo from '../Pages/AppInfo'
import Header from '../Pages/Header'
import Plan from '../Pages/Plan'
import Security from '../Pages/Security'
import Footer from './Footer'

const Home = () => {
  return (
    <div id="home">
        <Header/>
        <Plan/>
        <Security/>
        <AppInfo/>
        <Footer/>
    </div>
  )
}

export default Home