import { LinearProgress } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { singleCoin } from '../Asset/Api';
import CoinChart from '../Components/CoinChart';
import CoinSideInfo from '../Components/CoinSideInfo';
import './CoinInfo.css'

const CoinInfo = () => {

const {id} =useParams();
const[coin,setCoin]=useState();

const fetchCoin= async()=>{
    const {data}=await axios.get(singleCoin(id))
    setCoin(data)
}

useEffect(() => {
  fetchCoin()
}, [])

if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <div className='coinInfo'>
        <CoinSideInfo coin={coin}/>
        <CoinChart coin={coin}/>
    </div>
  )
}

export default CoinInfo