import React from "react";

const Navbar = () => {
  return (
    <div className="fixed w-full z-10 bg-opacity-30 bg-slate-950">
      <div className="flex justify-center w-lvh">
        <ul className="flex gap-6 md:gap-8 bg-slate-800 rounded-b-2xl p-4 ">
          <li><a href="#"><button className="hover:bg-slate-600 rounded-2xl md:p-2 md:m-2 hover:border-blue-500 hover:border-2 hover:shadow-lg hover:shadow-blue-500">Home</button></a></li>
          <li><a href="#contact"><button className="hover:bg-slate-600 rounded-2xl md:p-2 md:m-2 hover:border-blue-500 hover:border-2 hover:shadow-lg hover:shadow-blue-500">Contact</button></a></li>
          <li><a href="#Project"><button className="hover:bg-slate-600 rounded-2xl md:p-2 md:m-2 hover:border-blue-500 hover:border-2 hover:shadow-lg hover:shadow-blue-500">Project</button></a></li>
          <li><a href="#about"><button className="hover:bg-slate-600 rounded-2xl md:p-2 md:m-2 hover:border-blue-500 hover:border-2 hover:shadow-lg hover:shadow-blue-500">About</button></a></li>
          <li><a href=""><button className="hover:bg-slate-600 rounded-2xl md:p-2 md:m-2 hover:border-blue-500 hover:border-2 hover:shadow-lg hover:shadow-blue-500">Resume</button></a></li>
        </ul>
      </div>
      <div className="absolute top-0 right-0 flex ">
        <LinkImg link="https://github.com/Rounit_1st" imgPath="./Hyper_Image/github.png" />
        <LinkImg link="https://github.com/Rounit_1st" imgPath="./Hyper_Image/github.png" />
        <LinkImg link="https://github.com/Rounit_1st" imgPath="./Hyper_Image/github.png" />
      </div>
    </div>
  )
}

const LinkImg = (props)=>{
  return (
    <a href={props.link} >
      <img src={props.imgPath} className="h-0 lg:h-16 sm:h-12 color-pink-100" alt="" />
    </a>
  )
}

export default Navbar;
// clearImmediate