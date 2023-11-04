import React from 'react'

export default function ServicesCard(props) {
  return (
    <div className='bg-white w-1/6 flex flex-col justify-center place-items-center rounded-lg cursor-pointer hover:shadow-lg hover:shadow-cyan-600 hover:text-cyan-600'>
      <img className='pt-6 pb-6' src="../src/assets/servicesSection.png" alt="" />
      <h1 className='font-bold text-2xl'>{props.title}</h1>
      <p className='p-4 pb-6 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  )
}
