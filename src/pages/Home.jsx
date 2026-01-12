import React from 'react'
import Navbar from '../components/common/Navbar'
import HeroSection from '../components/hero/HeroSection'
import About from '../components/about/About'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About/>
    </div>
  )
}

export default Home
