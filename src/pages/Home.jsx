import React from 'react'
import Subheader from '../components/Subheader'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HelpSection from '../components/HelpSection'
import Portfolio from '../components/Portfolio'
import Testimonial from '../components/Testimonal'
import Data from '../components/Data'
import Team from '../components/Team'
import CustmerSays from '../components/CustmerSays'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
      <Subheader/>
      <Navbar/>
      <Hero/>
      <HelpSection/>
      <Portfolio/>
      <Testimonial/>
      <Data/>
      <Team/>
      <CustmerSays/>
      <ContactSection/>
      <Footer/>
    </>
  )
}

export default Home