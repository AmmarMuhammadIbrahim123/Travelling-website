'use client'
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './Hero/Hero';
import Destination from './Destination/Destination';
import Hotel from './Hotel/Hotel';
import WhyChoose from './WhyChoose/WhyChoose';
import Reviews from './Reviews/Reviews';
import News from './News/News';
import NewsLetter from './NewsLetter/NewsLetter';
import ScrollToTop from '../Helper/ScrollToTop';
import ResponsiveNav from './Navbar/ResponsiveNav';

const Home = () => {
 useEffect(() => {
  AOS.init({
    duration: 1000,
    easing: 'ease',
    once: true,
    anchorPlacement: 'top-bottom',
  });
}, []);
  return (
    <div className='overflow-hidden'>
     
     <ResponsiveNav/>
      <Hero />
      <Destination />
      <Hotel />
      <WhyChoose />
      <Reviews />
      <News />
      <NewsLetter />
      <ScrollToTop />
    </div>
  );
};

export default Home;
