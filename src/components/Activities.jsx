import React from 'react'
import { activities } from '../data/activities' 
const Activities = () => {
    const activitiesList = activities;
  return (
    <div name='activity' className='w-full md:h-screen text-gray-300 bg-[#0a192f] mt-[250px] '>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Activity</p>
                <p className='py-6'>these are some of my activities</p>
            </div>
{/* container */}
            <div className='grid sm:grid-cols-2 gap-4'>{/* md:grid-cols-3  */}
                {/* grid item */}
                {/* 1 */}
                {activitiesList.map((activity,index) => (
                    <div key={index} style={{backgroundImage: `url(${activity.image})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
    
                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-2xl font-bold text-white tracking-wider '> 
                            {activity.name}
    
                            </span>

                        </div>
                    </div>
                ))}
            </div>
        </div>

    </div>
  )
}

export default Activities