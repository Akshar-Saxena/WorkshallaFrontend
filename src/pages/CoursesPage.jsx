import React from 'react'
import NavBar from '../components/NavBar' 
import Categoriescard from '../components/Categoriescard'
import CategoriesTitles from '../constants/CategoriesTitles.json'
import CoursesCard from '../components/CoursesCard'
import Footer from '../components/Footer'


export default function CoursesPage()
{
    return(
        <>
           <NavBar />
           <header className='flex  w-5/6 m-auto place-items-center justify-between min-[280px]:flex-col-reverse lg:flex-row lg:my-10'>


<div className='w-1/2 min-[280px]:w-5/6 lg:w-[400px]'>

   


    <h1 className='font-bold text-3xl my-2 '>Learn on Your Schedule</h1>


    <p className=''>Study any topic, anytime explore thousands of courses <br />for the lowest price ever!</p>

  
        
    <input className='text-sm h-[35px] w-full pl-2 rounded-2xl shadow-xl mt-6' type="text" placeholder='What do you want to learn?' />
      
    <button className="rounded-2xl pl-4 pr-4 mt-4 bg-rose-500 text-white hover:bg-rose-500">Search</button>
  

    

</div>


    <img  src="../src/assets/coursesBg (1).png" alt="" />
    


</header>
   

   <div className='pt-6 pl-10 pb-10'>
                
                <h1 className='text-left ml-4 mb-8 font-bold'>Courses Categories</h1>
                <div className='flex'>
                    {CategoriesTitles.map((element, id) => (
                        <Categoriescard title={element.title} key={id} />
                    ))}
                </div>
              <div className="flex">
                <h1 className='text-left ml-4 mt-6 mb-4 font-bold'>Courses for you</h1>
                <img className='pt-4 ml-auto pr-8' src="../src/assets/forwardArrow.png" alt="" />
              </div>
            </div>

            <div className='flex flex-wrap justify-center'>
                <CoursesCard />
                <CoursesCard />
           </div>







        <Footer />


        </>
    )
}