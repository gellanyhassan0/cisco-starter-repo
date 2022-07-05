import React from 'react'

const BannerPage = () => {
  return (
    <div>
      <div className='bg-gradient-to-tl from-blue-900 to-green-700 relative'>
      <img src="https://images.pexels.com/photos/3591570/pexels-photo-3591570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        className='w-full h-full object-cover absolute mix-blend-overlay' alt='banner' />
      <div className='p-24'>
        <h1 className='md:text-4xl sm:text-3xl font-mono font-bold text-white'>SEXTANT</h1>
        <h2 className='md:text-2xl sm:text-xl font-light text-white'>A Product from CISCO</h2>
      </div>
    </div>
    </div>
  )
}

export default BannerPage
