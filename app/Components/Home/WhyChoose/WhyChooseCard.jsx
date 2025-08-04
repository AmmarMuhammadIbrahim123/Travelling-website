import React from 'react'
import Image from 'next/image'

const WhyChooseCard = ({image,title}) => {
  return (
    <div>
      <Image 
      src={image}
      width={70}
      height={70}
      alt='image'
      className='mx-auto'/>

      {/* Content */}
      <h1 className='text-center text-lg font-medium mt-6 text-gray-900'>{title}</h1>
      <p className='mt-2 text-center text-xs font-medium text-gray-700'>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam dolores officia.</p>
    </div>

  )
}

export default WhyChooseCard
