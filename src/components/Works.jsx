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
      <div className='relative flex overflow-hidden'><svg className="text-sky-400 scale-150 mt-6" viewBox="0 0 4323 250" fill="rgb(56 189 248)" xmlns="http://www.w3.org/2000/svg"><path d="M4323 149.091C4091.5 100.525 3848.5 186.994 3412 202.614C2750.36 226.291 2638.5 40.8657 2124.5 4.04682C1683.02 -27.5776 1127.5 135.797 721 159.38C314.504 182.963 0 128.418 0 128.418V250H4323C4323 250 4323 27.5687 4323 149.091Z"></path></svg></div>
      {/* intro of app */}
      <div className='text-left bg-sky-400 pb-8'>
          <h1 className='p-4'>Ronime</h1>
          <p className='text-sm p-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum illum illo ratione fugiat magnam non tempore ex sed, incidunt asperiores voluptatem debitis atque in sequi id rerum suscipit, assumenda provident vitae enim ducimus commodi! Hic ea ullam doloribus, soluta cum amet voluptates repellendus deleniti? Minima necessitatibus quia fugiat itaque blanditiis!</p>
        </div>
      {/* styled images */}
      <StyledImages />
    </>
  )
}

const StyledImages=(props)=>{
  return (
    <div className='bg-sky-400 relative h-[600px]'>
      <div className='bg-[url("./Projects/carrent.png")] bg-center bg-cover bg-no-repeat w-64 h-48 sm:w-96 md:h-64 rounded-lg md:hover:w-[450px] md:hover:h-[300px] hover:z-20 hover:cursor-pointer border-2 border-black  rotate-12 scale-y-40 absolute hover:rotate-0 '></div>
      <div className='bg-[url("./Projects/jobit.png")]   bg-center bg-cover bg-no-repeat w-64 h-48 sm:w-96 md:h-64 rounded-lg md:hover:w-[450px] md:hover:h-[300px] hover:z-20 hover:cursor-pointer border-2 border-black -rotate-12 absolute top-64  hover:rotate-0'></div>
      <div className='bg-[url("./Projects/jobit.png")]   bg-center bg-cover bg-no-repeat w-64 h-48 sm:w-96 md:h-64 rounded-lg md:hover:w-[450px] md:hover:h-[300px] hover:z-20 hover:cursor-pointer border-2 border-black rotate-12 absolute top-32 right-0 md:left-64  hover:rotate-0'></div>
      <a href={props.link}>
        <div className='bg-[url("./Projects/jobit.png")] bg-center bg-cover bg-no-repeat w-32 h-32 rounded-lg  border-4 border-black absolute top-32 right-1/3 md:left-64 '></div>
      </a>
    </div>
  )
}

export default Works
