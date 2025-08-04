'use client';
import React from 'react';
import Searchbox from '../../Helper/Searchbox';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='relative w-full h-[120vh] sm:h-[100vh]'>
      {/* OVERLAY */}
      <div className='absolute top-0 left-0 h-full w-full bg-black'>

        {/* VIDEO */}
        <video
          src='/images/hero1.mp4'
          autoPlay
          muted
          loop
          preload='metadata'
          className='w-full h-full object-cover brightness-50'
        />

        {/* TEXT-CONTAINER */}
        <div className='absolute z-[100] w-full h-full left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2'>
          <div className='flex items-center justify-center w-full h-full flex-col'>
            
            <div data-aos='fade-up'>
              <h1 className='text-[25px] mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px] tracking-[0.7rem] text-white font-bold uppercase'>
                Let's Enjoy The Nature
              </h1>
              <p className='md:text-base text-center text-lg text-white font-normal [word-spacing:5px]'>
                Get the best prices on 2000,0000+ properties, worldwide
              </p>
            </div>

            <Searchbox />

            {/* SEARCH BUTTON */}
            <Link
              href='#'
              className='rounded px-28 -mt-4 py-2.5 overflow-hidden group bg-rose-600 relative 
              hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2
              hover:ring-red-400 transition-all ease-out duration-300'
            >
              <span
                className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 
                bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease'
              ></span>
              <span className='relative font-bold'>Search</span>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
