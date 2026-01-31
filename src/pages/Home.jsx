import React from 'react'
import Navbar from '../components/common/Navbar'
import HeroSection from '../components/hero/HeroSection'
import About from '../components/about/About'
import EventDetails from '../components/events/EventDetails'
import Domain from './Domain'
import FaqSection from '../components/faq/FaqSection'
import Footer from '../components/common/Footer'
import Timeline from '../components/eventtimeline/Timeline'
import Sponsers from '../components/sponsers/Sponsers'

const Home = ({ onNavigateToRegistration }) => {
  return (
    <div>
      <Navbar onNavigateToRegistration={onNavigateToRegistration} />
      <HeroSection onNavigateToRegistration={onNavigateToRegistration} />
      <Domain />
      <EventDetails />
      <Timeline />
      <Sponsers />
      <FaqSection />

      <Footer />
    </div>
  )
}

export default Home
