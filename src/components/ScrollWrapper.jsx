import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Cards from './Cards';
import Footer from './Footer';
const ScrollWrapper = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      smartphone: {
        smooth: true
      },
      tablet: {
        smooth: true
      }
    });

    return () => scroll.destroy();
  }, []);

  return (
    <main data-scroll-container>
      <div data-scroll-section>
        <div data-scroll data-scroll-speed="0" className="relative">
          <Cards />
        </div>
        <div 
          data-scroll 
          data-scroll-sticky 
          data-scroll-target="#footer-wrapper" 
          className="relative z-[1]"
        >
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default ScrollWrapper;