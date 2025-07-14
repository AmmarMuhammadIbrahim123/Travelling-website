"use client"
import React from 'react';
import { TbAirBalloon } from 'react-icons/tb';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { navlinks } from '../../Constant/constant';
import Link from 'next/link';

const Nav = () => {
  return (
    <div className='bg-blue-950 transition-all duration-200 h-[12vh] z-[1000] fixed w-full'>
        <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
          <div className='flex items-center space-x-2'>
            <div className='  w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col  '>
                 <TbAirBalloon className='w-6 h-6 text-white'/>
                </div>
                <h1 className='text-xl md:text-2xl text-white  uppercase font-extrabold'>
                    TRIPI
                </h1>
                </div>  
         <div className='hidden lg:flex items-center space-x-10'>
  {navlinks.map((link) => {
    return (
      <Link href={link.url} key={link.id}>
        <p className=' block text-white hover:text-rose-500 transition duration-200 font-medium cursor-pointer'>
          {link.label}
        </p>
      </Link>
    );
  })}
</div>

<div className='flex items-center space-x-4'>
  <button className='md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-white hover:bg-gray-200
  transition-all duration-200 rounded-lg'>
    Book Now
  </button>
{/* Burger Menu */}
<HiBars3BottomRight className='h-8 w-8 text-white cursor-pointer lg:hidden' />
</div>
        </div>
      
    </div>
  )
}

export default Nav
