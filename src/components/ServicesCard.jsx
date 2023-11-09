import React from 'react'

export default function ServicesCard(props) {
  return (
    <div className='bg-white flex flex-col justify-center place-items-center rounded-lg cursor-pointer hover:shadow-[0_10px_40px_-24px_rgba(0,131,225,1)] hover:text-[#0083E1] lg:w-[200px] md:w-[170px] min-[280px]:w-[180px] min-[280px]:my-3'>
      <img className='pt-6 pb-6' src="../src/assets/servicesSection.png" alt="" />
      <h1 className='font-bold text-2xl md:text-xl min-[280px]:text-lg'>{props.title}</h1>
      <p className='p-4 pb-6 text-center md:text-sm min-[280px]:text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  )
}
