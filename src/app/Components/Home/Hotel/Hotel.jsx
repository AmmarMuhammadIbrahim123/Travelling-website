import React from 'react'
import SectiongHeading from '../../Helper/SectiongHeading'
import { hotelsData } from '../../data/data'
import HotelCard from './HotelCard'
const Hotel = () => {
  return (
    <div className='pt-20 pb-20'>
      <SectiongHeading heading={"Recommended Hotels"}/>
      <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8
      items-center mt-16'>
      
        {/* Hotel Card */}
         {hotelsData.map((data,i)=>{
            return(
            <div key={data.id}
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay={`${i*100}`}>
                <HotelCard hotel={data}/>
            </div>
       )})}
      </div>
    </div>
  )
}

export default Hotel
