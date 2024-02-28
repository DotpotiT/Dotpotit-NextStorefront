import Image from 'next/image'
import React from 'react'

function CateGories() {
  return (
    <div className='max-w-7xl mx-auto my-5'>
        <div className='flex flex-row justify-between '>
        <h3 className='font-semibold text-2xl'>Explore Popular Categories</h3>
        <button className='underline'>See all</button>

        </div>
       <div className='flex flex-row justify-evenly'>
       <div className='flex flex-col '>
            <Image className='rounded-full h-32 w-32' src="https://images.pexels.com/photos/133472/pexels-photo-133472.jpeg" width={200} height={200} alt="" />
            <p className='font-medium'>Parts & accessories</p>

        </div>
       <div className='flex flex-col '>
            <Image className='rounded-full h-32 w-32' src="https://images.pexels.com/photos/133472/pexels-photo-133472.jpeg" width={200} height={200} alt="" />
            <p className='font-medium'>Parts & accessories</p>

        </div>
       <div className='flex flex-col '>
            <Image className='rounded-full h-32 w-32' src="https://images.pexels.com/photos/133472/pexels-photo-133472.jpeg" width={200} height={200} alt="" />
            <p className='font-medium'>Parts & accessories</p>

        </div>
       <div className='flex flex-col '>
            <Image className='rounded-full h-32 w-32' src="https://images.pexels.com/photos/133472/pexels-photo-133472.jpeg" width={200} height={200} alt="" />
            <p className='font-medium'>Parts & accessories</p>

        </div>
       <div className='flex flex-col '>
            <Image className='rounded-full h-32 w-32' src="https://images.pexels.com/photos/133472/pexels-photo-133472.jpeg" width={200} height={200} alt="" />
            <p className='font-medium'>Parts & accessories</p>

        </div>
       <div className='flex flex-col '>
            <Image className='rounded-full h-32 w-32' src="https://images.pexels.com/photos/133472/pexels-photo-133472.jpeg" width={200} height={200} alt="" />
            <p className='font-medium'>Parts & accessories</p>

        </div>
       <div className='flex flex-col '>
            <Image className='rounded-full h-32 w-32' src="https://images.pexels.com/photos/133472/pexels-photo-133472.jpeg" width={200} height={200} alt="" />
            <p className='font-medium'>Parts & accessories</p>

        </div>
       <div className='flex flex-col '>
            <Image className='rounded-full h-32 w-32' src="https://images.pexels.com/photos/133472/pexels-photo-133472.jpeg" width={200} height={200} alt="" />
            <p className='font-medium'>Parts & accessories</p>

        </div>
       
        


       </div>
    </div>
  )
}

export default CateGories