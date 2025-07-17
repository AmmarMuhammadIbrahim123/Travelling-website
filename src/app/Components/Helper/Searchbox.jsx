import React from 'react'
import { FaCalendarWeek, FaMap, FaUsers,  } from 'react-icons/fa';
const Searchbox = () => {
  return (
   
    <div className='bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center
    gap-8 mt-4 sm:mt-12  md:w-[90%] sm:w-[80%]'>
     
      {/* 1st Search Input */}
      <div className='flex items-center space-x-6'>
        <FaMap className='w-4 h-4 text-blue-600' />
        <div>
            <p className='text-lg font-medium mb-[0.2rem]'> Location</p>
            <input type="text"
            placeholder='Where are you going?' 
            className='outline-none border-none placeholder:text-ggray-800' />
        </div>
      </div>

      {/* 2nd search box */}
     <div className='flex items-center space-x-6'>
        <FaCalendarWeek className='w-4 h-4 text-blue-600' />
        <div>
            <p className='text-lg font-medium mb-[0.2rem]'>Start Date</p>
            <input type="date" className='outline-none border-none'/>
        </div>
      </div>

       {/* 3rd search box */}
     <div className='flex items-center space-x-6'>
        <FaCalendarWeek className='w-4 h-4 text-blue-600' />
        <div>
            <p className='text-lg font-medium mb-[0.2rem]'>End Date</p>
            <input type="date" className='outline-none border-none'/>
        </div>
      </div>

       {/* 4th search box */}
     <div className='flex items-center space-x-6'>
        <FaUsers className='w-5 h-5 text-blue-600' />
        <div>
            <p className='text-lg font-medium mb-[0.2rem]'>Guest</p>
            <p className='text-base font-normal'>1 Guest 1 Room</p>

           
      </div>
      </div>
      </div>
    
  )
}

export default Searchbox
