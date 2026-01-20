import React from 'react'
import Navbar from '../components/common/Navbar'
import HeroSection from '../components/hero/HeroSection'
import About from '../components/about/About'
import EventDetails from '../components/events/EventDetails'
import FaqSection from '../components/faq/FaqSection'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <EventDetails />
      <FaqSection />

    </div>
  )
}

export default Home
