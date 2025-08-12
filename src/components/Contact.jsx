import { form } from 'framer-motion/client';
import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col items-center text-center w-full p-4' id='contact'>
      <h3 className='text-4xl m-4'>Contact me</h3>
      <form className='w-2/3 max-w-screen-sm bg-slate-800 rounded-xl flex flex-col'>
        <label className='m-4'>Name</label> 
        <input className='m-4 p-4' placeholder='Your Name' type="email"/>
        <label className='m-4'>Email-ID</label> 
        <input className='m-4 p-4' placeholder='pikachu@google.com' type="email"/>
        <label className='m-4'>Message</label>
        <textarea className='m-4 h-32 p-4' placeholder='Type your Mesage Here' name="message" id="msg"></textarea>
        <button type="submit" className='p-4 m-4 bg-blue-400 rounded-xl'>Submit</button>
      </form>
    </div>
  )
}

export default Contact;