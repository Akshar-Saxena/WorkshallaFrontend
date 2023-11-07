import React from 'react'

export default function NavBar() {
  return (
    <div className='flex h-20 place-items-center justify-between'>
      <div className='flex place-items-center justify-center'>
        <h1 className='font-semibold cursor-pointer px-12 py-4 text-xl'><span className='text-purple-600'>WORK</span><span className='text-gray-500' >SHALA</span></h1>
        <ul className='flex place-items-center'>
          <li className='cursor-pointer px-4 py-5 font-semibold hover:text-purple-600'>Home</li>
          <li className='cursor-pointer px-4 py-5 font-semibold hover:text-purple-600'>Services</li>
          <li className='cursor-pointer px-4 py-5 font-semibold hover:text-purple-600'>Companies</li>
          <li className='cursor-pointer px-4 py-5 font-semibold hover:text-purple-600'>Jobs</li>
        </ul>
      </div>
      <div>
        <button className='py-2 px-4 rounded mx-2 my-3 font-medium hover:outline hover: outline-1 hover:outline-purple-600 hover:text-white'>Sign In</button>
        <button className='py-2 px-4 rounded mx-2 my-3 mr-12 bg-purple-500 text-white font-medium  hover:outline hover: outline-1 hover:outline-purple-600 hover:text-purple-600 hover:bg-white'>Register</button>
      </div>
    </div>
  )
}
