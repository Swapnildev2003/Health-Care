import React from 'react'
import Hero from '../components/Hero'
import Tracker from "../components/Tracker.jsx"
//import Items from '../components/Items.jsx'
//import Hero from "../components/Hero.jsx"
import Productdeatils from '../components/Productdetails.jsx'
import Review from "../components/Review.jsx"
//import Navbardummy from '../components/Navbardumy.jsx'
//import { Helmet } from 'react-helmet-async';
const Home = () => {
  return (
    <div className=''>
      <Hero />
      <Productdeatils/>
      <Tracker />
      <Review/>
    </div>
  )
}

export default Home
