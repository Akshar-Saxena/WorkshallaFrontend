import React from 'react'
import NavBar from '../components/NavBar'
import { JobCard } from '../components/JobCard'
import Footer from '../components/Footer'

export const JobsPage = () => {
    return (
        <>
            <NavBar />

            {/* Title */}
            <div className='bg-[#FFF6F9] py-7 font-bold pl-12'>
                <h2>Jobs For You</h2>
            </div>
            {/* Title ends*/}

            {/* Job Card holder */}
            <div className='flex flex-wrap justify-center'>
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
            </div>
            {/* Job Card holder ends*/}

            <Footer/>
        </>
    )
}
