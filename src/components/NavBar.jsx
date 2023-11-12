import React from 'react'

export default function NavBar() {
  return (
    <div className='flex h-20 place-items-center justify-between md:w-[97%] md:m-auto'>
      {/* Left Div */}
      <div className='flex place-items-center justify-center min-[280px]:w-full min-[280px]:justify-around md:justify-start'>
        {/* Workshala logo */}
        <h1 className='font-semibold cursor-pointer px-12 py-4 text-xl min-[280px]:w-fit min-[280px]:px-0 xl:text-3xl lg:mr-6'><span className='text-purple-600'>WORK</span><span className='text-gray-500' >SHALA</span></h1>
        {/* Workshala logo ends */}

        {/* Menu List items */}
        <ul className='flex place-items-center'>
          <li><img src="../src/assets/menu.png" alt="" className='w-[20px] min-[425px]:hidden'/></li>
          <li className='cursor-pointer px-4 py-5 font-semibold transition hover:text-purple-600 min-[280px]:hidden  min-[425px]:block  min-[425px]:text-[10px] xl:text-base'>Home</li>
          <li className='cursor-pointer px-4 py-5 font-semibold transition hover:text-purple-600 min-[280px]:hidden  min-[425px]:block  min-[425px]:text-[10px] xl:text-base'>Services</li>
          <li className='cursor-pointer px-4 py-5 font-semibold transition hover:text-purple-600 min-[280px]:hidden  min-[425px]:block  min-[425px]:text-[10px] xl:text-base'>Companies</li>
          <li className='cursor-pointer px-4 py-5 font-semibold transition hover:text-purple-600 min-[280px]:hidden  min-[425px]:block  min-[425px]:text-[10px] xl:text-base'>Jobs</li>
        </ul>
        {/* Menu List items end */}

      </div>
      {/* Left Div ends */}

      {/* Sign Up and Register Buttons */}
      <div className='flex min-[425px]: w-[300px] min-[280px]:hidden md:flex md:justify-end xl:w-[400px] '>
        <button className='py-2 px-4 rounded mx-2 my-3 text-[13px] font-medium transition hover:bg-purple-600 hover:outline hover: outline-1 hover:outline-purple-600 hover:text-white md:text-[10px] xl:text-lg'>Sign In</button>
        <button className='py-2 px-4 rounded mx-2 my-3 text-[13px] bg-purple-600 text-white font-medium transition  hover:outline hover: outline-1 hover:outline-purple-600 hover:text-purple-600 hover:bg-white md:text-[10px] xl:text-lg'>Register</button>
      </div>
      {/* Sign Up and Register Buttons ends*/}
    </div>
  )
}
