import React, { useEffect } from 'react'
import "./home.scss";
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending'
import WhatsPopular from'./whatsPopular/WhatsPopular';
import TopRated from './topRated/TopRated';


const Home = () => {
  useEffect(()=>{
  document.title = 'Movieo - Home';
  },[])
  return (
    <div>
      <HeroBanner/>
      <Trending/>
      <WhatsPopular/>
      <TopRated/>
    </div>
  )
}

export default Home
