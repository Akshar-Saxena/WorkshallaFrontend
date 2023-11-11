import React from 'react'

export default function CompaniesCard() {
  return (
    <div className='pt-10 rounded-lg outline outline-purple-600 outline-1 ml-1 mr-8 pb-5 flex flex-col justify-center place-items-center'>
      <img className='w-14' src="../src/assets/companyLogo1.png" alt="" />
      <div className='rounded-lg px-6 py-2 my-8 mx-5 bg-pink-200'>
        <h3>Cognizant</h3>
        <h3>3.3 | 1k Reviews</h3>
      </div>
      <h2 className='text-3xl font-extrabold'>Cognizant</h2>
      <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      <button className='bg-purple-700 mt-10 text-white py-2 px-12 rounded-lg hover:bg-purple-900'>View Jobs</button>
    </div>
  )
}
