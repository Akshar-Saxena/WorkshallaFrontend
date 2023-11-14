import React from 'react'

export const JobCard = () => {

    const viewDetailsHandler = () => {
        console.log('clicked')
    }

    return (
        <div className='w-[260px] my-10 mx-2 min-[768px]:mx-10 lg:w-[300px]'>
            <div className='flex justify-between place-items-center'>
                <div className='lg:w-[150px]'>
                    <h3 className='outline outline-1 outline-gray-500 w-fit flex place-items-center mx-2 pr-2 rounded-md min-[280px]:text-sm lg:mx-0 lg:pr-2 lg:p-[1px]'><div className='w-[16px] h-[16px] rounded-full mx-1 bg-[#A2E5E3] lg:mx-1'></div>Actively hiring</h3>
                    <h1 className='min-[280px]:text-lg text-2xl font-bold'>Fundraising Volunteering</h1>
                    <p className='text-gray-500 min-[280px]:text-sm'>Odisha Development Management Programme (ODMP)</p>
                </div>
                <img src="assets/tataLogo.png" alt="" />
            </div>

            <div className='lg:flex lg:justify-between lg:mt-3'>
                <ul className='lg:flex lg:flex-col'>
                    <li className='flex text-gray-500 py-2 lg:text-xs'><img className='w-[20px] mr-2' src="assets/workFromHome.png" alt="" />Work from Home</li>
                    <li className='flex text-gray-500 py-2 lg:text-xs'><img className='w-[20px] mr-2' src="assets/backInTime.png" alt="" />1 Week</li>
                </ul>
                <ul className='lg:flex lg:flex-col'>
                    <li className='flex text-gray-500 py-2 lg:text-xs'><img className='w-[20px] mr-2' src="assets/shuttle.png" alt="" />Starts immediately</li>
                    <li className='flex text-gray-500 py-2 lg:text-xs'><img className='w-[20px] mr-2' src="assets/salary.png" alt="" />225-5,000/week</li>
                </ul>
            </div>

            <div className='lg:flex my-4'>
                <h3 className='bg-[#946CC333] w-fit rounded-md px-3 py-[1px] text-gray-600 font-semibold m-1'>Internship</h3>
                <h3 className='bg-[#946CC333] w-fit rounded-md px-3 py-[1px] text-gray-600 font-semibold m-1'>Part time</h3>
            </div>

            <div>
                <h3 className='text-blue-500'>5 days ago</h3>
            </div>

            <hr className='h-[1px] bg-gray-600 my-4' />

            <a onClick={viewDetailsHandler} className='text-blue-600 cursor-pointer'>View Details</a>
        </div>
    )
}
