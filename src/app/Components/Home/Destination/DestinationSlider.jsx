"use client"
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { destinationData } from '../../data/data';
import Image from 'next/image';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 5,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide:1  
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 
  }
};
const DestinationSlider = () => {
    
  return (
    <Carousel  responsive={responsive}
    autoPlay={true}
    infinite={true}
    autoPlaySpeed={5000}
    keyBoardControl={true}
    >
{destinationData.map((data)=> {
    return(
        <div key={data.id} className='m-3'>
            <div className='relative h-[400px]'>

                {/* Overlay */}
                <div className='absolute bg-black opacity-25 rounded-lg'></div>

                {/* Images */}
                <Image
                src={data.image}
                alt={data.country}
                width={500} 
                height={500}
                className="w-full h-full object-cover rounded-lg"/>
     </div>
     <h1 className='text-lg font-semibold mt-4'>{data.country}</h1>
     <p className='text-sm text-gray-600'>{data.travelers}  Travelers </p>
        </div>
    )
})}
    </Carousel>
  )
}

export default DestinationSlider
