import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {

  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const navigate = useNavigate()

  const toggleHandler = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  return (
    <div className='flex h-20 place-items-center justify-between md:w-[97%] md:m-auto'>
      {/* Left Div */}
      <div className='flex place-items-center justify-center min-[280px]:w-full min-[280px]:justify-around md:justify-start'>
        {/* Workshala logo */}
        <Link to="/"><h1 className='font-semibold cursor-pointer px-12 py-4 text-xl min-[280px]:w-fit min-[280px]:px-0 xl:text-3xl lg:mr-6'><span className='text-purple-600'>WORK</span><span className='text-gray-500' >SHALA</span></h1></Link>
        {/* Workshala logo ends */}

        {/* Menu List items */}
        <ul className='flex place-items-center'>
          <li><img src="../src/assets/menu.png" alt="" className='w-[20px] min-[768px]:hidden' onClick={toggleHandler} /></li>
          <Link to="/"><li className='cursor-pointer px-4 py-5 font-semibold transition hover:text-purple-600 min-[280px]:hidden  min-[768px]:block  min-[768px]:text-[10px] xl:text-base'>Home</li></Link>
          <li className='cursor-pointer px-4 py-5 font-semibold transition hover:text-purple-600 min-[280px]:hidden  min-[768px]:block  min-[768px]:text-[10px] xl:text-base'>Services</li>
          <Link to="/companies"><li className='cursor-pointer px-4 py-5 font-semibold transition hover:text-purple-600 min-[280px]:hidden  min-[768px]:block  min-[768px]:text-[10px] xl:text-base'>Companies</li></Link>
          <Link to="/jobs"><li className='cursor-pointer px-4 py-5 font-semibold transition hover:text-purple-600 min-[280px]:hidden  min-[768px]:block  min-[768px]:text-[10px] xl:text-base'>Jobs</li></Link>
        </ul>
        {/* Menu List items end */}

        {/* hamburger menu */}
        {isOpenMenu && (
          <ul className='flex flex-col justify-center place-items-center absolute w-full top-20 right-0 bg-white animate-[slideFromTop_0.4s_ease-in-out] outline outline-1 outline-black'>
            <Link to="/"><li className='p-2 my-2 rounded-md hover:bg-[#946cc3] hover:text-white w-[100%]'>Home</li></Link>
            <Link><li className='p-2 my-2 rounded-md hover:bg-[#946cc3] hover:text-white w-[100%]'>Services</li></Link>
            <Link to="/companies"><li className='p-2 my-2 rounded-md hover:bg-[#946cc3] hover:text-white w-[100%]'>Companies</li></Link>
            <Link to="/jobs"><li className='p-2 my-2 rounded-md hover:bg-[#946cc3] hover:text-white w-[100%]'>Jobs</li></Link>
            <Link to="/login"><li className='p-2 my-2 rounded-md bg-[#946cc3] text-white w-[100%]'>Sign In</li></Link>
            <Link to="/register"><li className='p-2 my-2 rounded-md bg-[#946cc3] text-white w-[100%]'>Register</li></Link>
          </ul>
        )}
        {/* hamburger menu ends */}

      </div>
      {/* Left Div ends */}

      {/* Sign Up and Register Buttons */}
      <div className='flex min-[425px]: w-[300px] min-[280px]:hidden md:flex md:justify-end xl:w-[400px] '>
        <button onClick={()=>navigate('/login')} className='py-2 px-4 rounded mx-2 my-3 text-[13px] font-medium transition hover:bg-purple-600 hover:outline hover: outline-1 hover:outline-purple-600 hover:text-white md:text-[10px] xl:text-lg'>Sign In</button>
        <button onClick={()=>navigate('/register')} className='py-2 px-4 rounded mx-2 my-3 text-[13px] bg-purple-600 text-white font-medium transition  hover:outline hover: outline-1 hover:outline-purple-600 hover:text-purple-600 hover:bg-white md:text-[10px] xl:text-lg'>Register</button>
      </div>
      {/* Sign Up and Register Buttons ends*/}
    </div>
  )
}
