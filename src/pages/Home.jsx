import React from 'react'
import Header from '../components/Header'
import HowItWorks from '../components/HowItWorks'
import TopSpecializations from '../components/TopSpecializations'
import Testimonials from '../components/Testimonials'
import TopDoctors from '../components/TopDoctors'
import ContactusBanner from '../components/ContactusBanner'


const Home = () => {
  return (
    <div>
      <Header/>
      <HowItWorks/>
      <TopSpecializations/>
      <Testimonials/>
      <TopDoctors/>
      <ContactusBanner/>
    </div>
  )
}

export default Home