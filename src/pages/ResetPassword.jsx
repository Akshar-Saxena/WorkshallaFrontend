import React from 'react'
import { useState } from 'react'

export default function ResetPassword() {

    const [placeholder, newPlaceholder] = useState("Email")
    const [otpButton, setOtpButton] = useState("block")
    const [resetButton, setResetButton] = useState("none")
    const [emailToggleColors, setEmailToggleColors] = useState(["#946CC3", 'white'])
    const [phoneToggleColors, setPhoneToggleColors] = useState(["white", "black"])
    const togglerHandler = () => {
        if (placeholder === "Email") {
            newPlaceholder("Phone Number")
            setEmailToggleColors(['white', 'black'])
            setPhoneToggleColors(['#946CC3', 'white'])

        } else {
            newPlaceholder("Email")
            setPhoneToggleColors(['white', 'black'])
            setEmailToggleColors(['#946CC3', 'white']) 
        }
    }

    const buttonToggleHandler = () => {
        if (otpButton === "block") {
            setOtpButton("none")
            setResetButton("block")
        } else {
            setOtpButton("block")
            setResetButton("none")
        }
    }

    const resetButtonHandler = () => {
        null
    }

    return (
        <div className='flex justify-evenly place-items-center h-[100vh] m-auto md:flex-col lg:flex-row'>
            <img className='w-[45%] min-[280px]:absolute min-[280px]:-z-10 min-[280px]:opacity-70 min-[280px]:h-full min-[280px]:w-full md:static md:h-auto md:opacity-100 md:w-[60%] lg:h-auto lg:w-[45%]' src="../src/assets/resetPassword.png" alt="" />
            <div className='min-[280px]:w-full lg:w-[35%] flex flex-col justify-center place-items-center'>
                <div className='min-[280px]:w-[80%]'>
                    <h1 className='font-bold text-4xl pb-10 min-[280px]:text-2xl'>Reset Password</h1>
                    <label className='mt-5 mb-1'>New Password</label>
                    <input className='text-xs h-[35px] w-full pl-3 rounded-md outline outline-1 outline-black' type="text" placeholder='Enter your New Password' />
                    <label className='mt-5 mb-1'>Confirm Password</label>
                    <input className='text-xs h-[35px] w-full pl-3 rounded-md outline outline-1 outline-black' type="text" placeholder='Re-write your New Password' />
                    <div onClick={togglerHandler} className='outline outline-1 outline-[#946CC3] h-fit w-fit flex my-5 rounded-md cursor-pointer'>
                        <div className={`min-[280px]: text-xs py-1 px-4 rounded-md mx-2 my-1 bg-[${emailToggleColors[0]}] text-${emailToggleColors[1]} transition-all`}>Email</div>
                        <div className={`min-[280px]: text-xs py-1 px-4 rounded-md mx-2 my-1 bg-[${phoneToggleColors[0]}] text-${phoneToggleColors[1]} transition-all`}>Phone Number</div>
                    </div>
                    <input className='text-xs h-[35px] w-full pl-3 rounded-md outline outline-1 outline-black' type="text" placeholder={placeholder} />
                    <label className='mt-5 mb-1'>OTP</label>
                    <input className='text-xs h-[35px] w-full pl-3 rounded-md outline outline-1 outline-black' type="text" placeholder='Enter your OTP' />
                    <button className='py-2 px-5 bg-[#946CC3] text-white text-xs w-full rounded-md mt-10' onClick={buttonToggleHandler} style={{ display: `${otpButton}` }}>Send OTP</button>
                    <button className='py-2 px-5 bg-[#946CC3] text-white text-xs w-full rounded-md mt-10' onClick={resetButtonHandler} style={{ display: `${resetButton}` }}>Reset my Password</button>
                </div>
            </div>
        </div>
    )
}
