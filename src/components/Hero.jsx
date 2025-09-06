import React from 'react'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 w-lvh h-fit  lg:grid-cols-2 w-full'>
      <div className='w-full h- p-4 sm:p-32'>
        <div className='mt-16 md:top-1/4 '>
          <h2 className='text-2xl md:text-4xl m-4'>Hi, I am 👋</h2>
          <h1 className='text-4xl md:text-8xl m-4'>Ro<span className='text-blue-300'>unit</span></h1>
          <h2 className='text-xl md:text-2xl m-4'>I write the code and my <span className='text-fuchsia-400'>Dragon</span> burns the <span className='text-green-300'>bugs 🪲</span></h2>
        </div>
      </div>
      <img src="./giphy.gif" className='md:h-lvh  w-fit ' alt="Dragon Dancer" />
    </div>
    
  )
}

export default Hero;