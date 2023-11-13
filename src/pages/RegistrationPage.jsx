import React from 'react'
import { Link } from 'react-router-dom';


export default function RegistrationPage() {
  return (
      <div className="flex place-items-center justify-evenly h-[100vh] m-auto">
        <div className="top-0 -z-10  w-[42%] min-[280px]:absolute opacity-70 min-[280px]:w-full min-[280px]:h-[100vh] md:static md:w-[48%]">
          <img className='min-[280px]:w-full min-[280px]:h-full' src="../src/assets/regPageImage.png" alt="" />
        </div>
        <div className="w-[28%] min-[280px]:w-[80%] md:w-[28%]">
          <h1 className='text-4xl font-bold pb-7'>Register</h1>

          <div className="py-3 flex flex-col w-full">
            <label htmlFor="name">Name</label>
            <input className='text-xs h-[35px] w-full pl-3 rounded-md outline outline-1 outline-black' type="text" id="name" placeholder='Enter your Name' />
          </div>
          <div className="py-3 flex flex-col w-full">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input className='text-xs h-[35px] w-full pl-3 rounded-md outline outline-1 outline-black' type="tel" id="phoneNumber" placeholder='Enter your phone number' />
          </div>
          <div className="py-3 flex flex-col w-full">
            <label htmlFor="email">Email</label>
            <input className='text-xs h-[35px] w-full pl-3 rounded-md outline outline-1 outline-black' type="email" id="email" placeholder='Enter your Email' />
          </div>
          <div className="py-3 flex flex-col w-full">
            <label htmlFor="password">Password</label>
            <input className='text-xs h-[35px] w-full pl-3 rounded-md outline outline-1 outline-black' type="password" id="password" placeholder='Enter your password' />
          </div>
          <button className='py-2 px-5 bg-[#946CC3] text-white text-xs w-full rounded-md mt-10'>Sign Up</button>
          <div className="flex justify-center mt-3">
            <h3 className='font-bold'>Already Registered!</h3> <Link to="/login" className='text-[#946CC3]'>Login</Link>
          </div>
        </div>
      </div>
  );
}



