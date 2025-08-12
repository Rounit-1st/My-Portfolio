import { BrowserRouter } from 'react-router-dom';
import {About, Contact, Experience, Feedback, Hero,Navbar, Tech, Works, StarsCanvas, Footer} from "./components"
import './App.css'
import React, { Component } from 'react';

const App = () => {
  
  return (
    <div className="relative z-0 bg-primary">
        <div className = "bg-cover bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        {/* <Experience/> */}
        {/* <Tech/> */}
        <Works/>
        <Contact/>
        <Footer/>
        {/* <div className= "relative z-0;"> */}
          {/* <Contact/> */}
          {/* <StarsCanvas/> */}
        {/* </div>   */}
      </div>
  );
};

export default App;
