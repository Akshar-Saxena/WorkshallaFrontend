import React from 'react'
import NavBar from '../components/NavBar'
import ServicesCard from '../components/ServicesCard'

export default function HomePageBeforeLogin() {
    return (
        <>
            {/* NavBar starts here */}
            <NavBar />
            {/* NavBar ends here */}



            {/* Hero Section starts here */}
            <header className='flex w-5/6 m-auto place-items-center justify-between'>
                <div className='w-1/3'>
                    <div className='flex place-items-center'>
                        <img src="../src/assets/welcomeHand.png" alt="" />
                        <h3 className='text-gray-400 text-sm font-medium'>WELCOME TO WORKSHALA</h3>
                    </div>
                    <h1 className='font-bold text-4xl my-2'>Best Place To <br />Get You Placed</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cum eius odio dolorem natus, delectus ipsa tempora eum est perferendis odit minus esse minima consequuntur amet! Veritatis eligendi eum libero?</p>
                    <div>
                        <button className='
                        py-2 px-4 rounded my-3 bg-purple-500 text-white font-medium  hover:outline hover: outline-1 hover:outline-purple-600 hover:text-purple-600 hover:bg-white
                        '>Read More</button>
                        <button className='py-2 px-4 rounded mx-7 my-3 font-medium outline  outline-1 outline-purple-600 text-purple-600 hover:bg-purple-500 hover:text-white hover:outline-white'>Start Today</button>
                    </div>
                </div>
                <div className='w-3/6' >
                    <img src="../src/assets/heroImage.png" alt="" />
                </div>
            </header>
            {/* Hero Section ends here */}


            {/* Services Section starts here */}
            <div className='bg-rose-50 pb-10'>
                <h3 className='text-center pt-10'>Services</h3>
                <h1 className='text-center text-4xl font-bold'>Our Services</h1>
                <div className='flex justify-evenly place-items-center mt-[100px]'>
                    <ServicesCard title="Internships"/>
                    <ServicesCard title="Jobs"/>
                    <ServicesCard title="Courses"/>
                    <ServicesCard title="Placement"/>
                </div>
            </div>
        </>
    )
}
