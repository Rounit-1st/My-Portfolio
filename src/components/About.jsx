import React from 'react';
// import "../index.css"

const About = () => {
  return (
    <div className='text-center' id='about'>
      <h3 className='text-4xl m-8'>About</h3>
      {/* 1st train */}
      <div
        className="flex gap-4 justify-center overflow-hidden overflow-y-hidden pb-8 my-8" >
        <Card  animate='train_1_animation' name='CSS' path='./About_cards/css.png' alt='css' />
        <Card  animate='train_1_animation' name='HTML' path='./About_cards/html.png' alt='css' />
        <Card  animate='train_1_animation' name='CSS' path='./About_cards/javascript.png' alt='css' />
        <Card  animate='train_1_animation' name='Node Js' path='./About_cards/nodejs.png' alt='css' />
        <Card  animate='train_1_animation' name='React' path='./About_cards/reactjs.png' alt='css' />
        <Card  animate='train_1_animation' name='Git' path='./About_cards/git.png' alt='css' />
        <img src="./About_cards/train.gif" className='h-32 max-w-fit text-wrap ml-4' alt="" style={{animation: 'train_1_animation 10s linear infinite' }}/>
      </div>
      {/* 2nd train */}
      <div
        className="flex gap-4 justify-center overflow-hidden overflow-y-hidden pb-8 my-8" >
        <Card animate='train_2_animation' name='CSS' path='./About_cards/css.png' alt='css' />
        <Card animate='train_2_animation' name='HTML' path='./About_cards/html.png' alt='css' />
        <Card animate='train_2_animation' name='CSS' path='./About_cards/javascript.png' alt='css' />
        <Card animate='train_2_animation' name='Node Js' path='./About_cards/nodejs.png' alt='css' />
        <Card animate='train_2_animation' name='React' path='./About_cards/reactjs.png' alt='css' />
        <Card animate='train_2_animation'  name='Git' path='./About_cards/git.png' alt='css' />
        <img src="./About_cards/train.gif" className='h-32 max-w-fit text-wrap ml-4' alt="" style={{animation: 'train_2_animation 10s linear infinite' }}/>
      </div>
      {/* 3rd tain */}
    </div>
  )
}

// train 

const Card=(props)=>{
  return(
        <button className="relative w-full max-w-md bg-slate-500 rounded-full border-4 border-white  h-28 sm:h-30 md:h-30 flex flex-col items-center justify-center" style={{animation: `${props.animate} 10s linear infinite` }}>
            {/* Image + Text in one row centered */}
            <div className="flex items-center justify-center gap-4 min-w-48">
              {/* Image */}
              <img
                src={props.path}
                alt={props.alt}
                className="h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 object-cover p-1"
              />
              {/* Text */}
              <span className="text-base sm:text-lg md:text-xl font-semibold overflow-hidden">
                {props.name}
              </span>
            </div>

            {/* Left Wheel - bottom-left */}
            <div className="absolute bottom-[-20px] left-6 sm:left-8 h-10 w-10 sm:h-12 sm:w-12 bg-zinc-700 rounded-full border-4 border-white flex items-center justify-center">
              <div className="h-2 w-2 bg-red-400 rounded-full border-2 border-red-500"></div>
            </div>

            {/* Right Wheel - bottom-right */}
            <div className="absolute bottom-[-20px] right-6 sm:right-8 h-10 w-10 sm:h-12 sm:w-12 bg-zinc-700 rounded-full border-4 border-white flex items-center justify-center">
              <div className="h-2 w-2 bg-red-400 rounded-full border-2 border-red-500"></div>
            </div>
        </button>
  )
}

export default About;