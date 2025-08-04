"use client"
import React from 'react'
import SectiongHeading from '../../Helper/SectionHeading'
import DestinationSlider from './DestinationSlider'

const Destination = () => {
  return (
    <div className='pt-20 pb-20'>
      <SectiongHeading heading="Explore Popular Destination"/>
      <div className='mt-14 w-[80%] mx-auto '>
        <DestinationSlider/>

      </div>
    </div>
  )
}

export default Destination
