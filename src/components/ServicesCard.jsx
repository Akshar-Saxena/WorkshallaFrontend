import React from 'react'

export default function ServicesCard(props) {
  return (
    <div className='bg-white w-1/6 flex flex-col justify-center place-items-center rounded-lg cursor-pointer hover:shadow-[0_10px_40px_-24px_rgba(0,131,225,1)] hover:text-[#0083E1]'>
      <img className='pt-6 pb-6' src="../src/assets/servicesSection.png" alt="" />
      <h1 className='font-bold text-2xl'>{props.title}</h1>
      <p className='p-4 pb-6 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  )
}
