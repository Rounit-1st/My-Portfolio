import React from 'react'

const Works = () => {
  return (
    <section className='text-4xl text-center my-8' id='Project'>
      <h3 className='m-4'>Projects</h3>
      <Project/>
    </section>
  )
}

const Project = (props)=>{
  return(
    <>
     {/* svg manipulation */}
      <div className='relative overflow-hidden'><svg className="text-sky-400 scale-150 mt-6" viewBox="0 0 4323 250" fill="#A1128D" xmlns="http://www.w3.org/2000/svg"><path d="M4323 149.091C4091.5 100.525 3848.5 186.994 3412 202.614C2750.36 226.291 2638.5 40.8657 2124.5 4.04682C1683.02 -27.5776 1127.5 135.797 721 159.38C314.504 182.963 0 128.418 0 128.418V250H4323C4323 250 4323 27.5687 4323 149.091Z"></path></svg></div>
      <div className='grid lg:grid-cols-2 text-white  bg-[#A1128D] '>
        {/* intro of app */}
        <div className='text-left md:pl-16 p-4 pb-8 max-w-[800px] '>
            <span className='flex justify-between md:justify-none'><h1 className='p-4 font-serif'>Ronime</h1> <a href="https://github.com/Rounit-1st/Ronime" ><img className='w-12' src="./Hyper_Image/github.png" /></a></span>
            <p className='text-xl p-4 bg-black-100/10 rounded-lg'>
              <span className='font-serif text-lg lg:text-2xl'>Welcome to Ronime – your ultimate destination for anime discovery. Our platform lets you search, explore, and watch your favorite anime titles in one place with a clean, user-friendly design.</span>
              <br />            
              <li className='list-none text-base lg:text-xl p-4 font-thin'>🔍 <span className='font-bold'>Smart Search </span>: Quickly find anime by title, genre, or release year.</li>
              <li className='list-none text-base lg:text-xl p-4 font-thin'>🎥 <span className='font-bold'>High-Quality Trailers </span>: Watch trailer in smooth HD with minimal buffering.</li>
              <li className='list-none text-base lg:text-xl p-4 font-thin'>📂 <span className='font-bold'>Detailed Anime Pages </span>: Access information such as synopsis, ratings, Recommendations, trailers.</li>
              <li className='list-none text-base lg:text-xl p-4 font-thin'>❤️ <span className='font-bold'>Personalized Experience </span>: Create watchlists, bookmark your favorites, and track your progress.</li>
            </p>
        </div>
        {/* styled images */}
        <StyledImages />
      </div>
    </>
  )
}

const StyledImages=(props)=>{
  return (
    <div className='bg-[#A1128D] relative h-[600px]'>
      <div className='bg-[url("/Projects/projectOneImg.png")] bg-center bg-cover bg-no-repeat w-64 h-48 sm:w-96 md:h-64 rounded-lg md:hover:w-[450px] md:hover:h-[300px] hover:z-20 hover:cursor-pointer  rotate-12 scale-y-40 absolute hover:rotate-0 '></div>
      <div className='bg-no-repeat w-64  sm:w-96  rounded-lg md:hover:w-[450px] hover:z-20 hover:cursor-pointer -rotate-12 absolute top-64  hover:rotate-0'>
          <video preload='metadata' autoPlay muted loop id="myVideo">
            <source src="/Projects/projectOneVid.mp4" type="video/mp4"/>
          </video>
      </div>
      <div className='bg-no-repeat w-64  sm:w-96  rounded-lg md:hover:w-[450px] hover:z-20 hover:cursor-pointer rotate-12 absolute top-32 right-0 md:left-64  hover:rotate-0'>
        <video autoPlay muted loop id="myVideo">
            <source src="/Projects/projectOneVid2.mp4" type="video/mp4"/>
        </video>
      </div>
      <a href={props.link}>
        <div className='bg-[url("/Projects/projectLogo.png")] bg-center bg-cover bg-no-repeat w-32 h-32 rounded-lg  absolute top-32 right-1/3 md:left-64 '></div>
      </a>
    </div>
  )
}

export default Works
