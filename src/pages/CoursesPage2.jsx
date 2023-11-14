import React from 'react'
import NavBar from '../components/NavBar'
import CoursesCard from '../components/CoursesCard'
import Footer from '../components/Footer'

export default function CoursesPage2()
{
    return(
        <>
        <NavBar />

        <div className="bg-rose-50 p-6" >
          <h2 className="ml-10 text-xl font-bold">Courses for you</h2>
       </div>

       <div className='flex flex-wrap justify-center'>
                <CoursesCard />
                <CoursesCard />
                <CoursesCard />
        </div>

        <Footer />
        
        </>
    )
}