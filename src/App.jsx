import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import FeaturedProjects from './components/FeaturedProjects'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from 'react'
import ScrollWrapper from './components/ScrollWrapper'


const App = () => {

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      multiplier: 1,
      getDirection: true,
      mobile: {
        smooth: true,
        multiplier: 1,
        getDirection: true
      },
      tablet: {
        smooth: true,
        multiplier: 1,
        getDirection: true
      }
    });

    // Clean up
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <FeaturedProjects/>
      <ScrollWrapper />
    </div>
  )
}

export default App

