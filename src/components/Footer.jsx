import React from 'react'

export default function Footer() {
    return (
        <>
        <div className='bg-[#946CC3] outline outline-1 outline-black flex justify-between place-items-center pb-12'>
            <div>
                <h2 className='font-bold'>Important Links</h2>
                <div className='flex'>
                    <ul className='pr-6'>
                        <li className='text-sm font-bold text-gray-700 pb-3'>About Us</li>
                        <li className='text-sm font-bold text-gray-700 pb-3'>Careers</li>
                        <li className='text-sm font-bold text-gray-700 pb-3'>Employers Home</li>
                        <li className='text-sm font-bold text-gray-700 pb-3'>Sitemap</li>
                    </ul>
                    <ul className='pr-6'>
                        <li className='text-sm font-bold text-gray-700 pb-3'>Help Center</li>
                        <li className='text-sm font-bold text-gray-700 pb-3'>Summons/Notices</li>
                        <li className='text-sm font-bold text-gray-700 pb-3'>Grievances</li>
                        <li className='text-sm font-bold text-gray-700 pb-3'>Report issue</li>
                    </ul>
                    <ul className='pr-6'>
                        <li className='text-sm font-bold text-gray-700 pb-3'>Privacy Policy</li>
                        <li className='text-sm font-bold text-gray-700 pb-3'>Terms & Conditions</li>
                        <li className='text-sm font-bold text-gray-700 pb-3'>Fraud Alerts</li>
                        <li className='text-sm font-bold text-gray-700 pb-3'>Trust & Safety</li>
                    </ul>
                </div>
            </div>
            <div className='w-[40%]'>
                <h2>E-mail your Query</h2>
                <div>
                    <input type="text" className='bg-[#DEC1FF]' />
                    <button>Sign up</button>
                </div>
                <div className='bg-[#DEC1FF] h-fit w-[70%] rounded-xl mt-4 px-4 py-3'>
                    <h2 className='font-bold text-2xl'>Apply on the go</h2>
                    <h3 className='text-[#946CC3]'>Get real-time job updates on our App</h3>
                    <div className='flex justify-center place-items-center'>
                        <img className='w-[50%]' src="../src/assets/googleplay.png" alt="" />
                        <img className='w-[60%]' src="../src/assets/appstore.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-[#251636] h-[80px]'>

        </div>
        </>
    )
}
