import React from 'react'
import NavBar from '../components/NavBar' 
import CompaniesCard2 from '../components/CompaniesCard2'
export default function CompaniesPage()
{
return(
    <>
    <NavBar />

    <div className="bg-rose-50 p-6" >
       <h2 className="ml-10 text-xl font-bold">Featured Companies Actively Hiring</h2>
    </div>
    <div className="flex">
    <div className="bg-white ml-24 mt-10 mb-16 text-black w-80 py-2 px-2 shadow-rose-50 shadow-xl rounded-lg flex">
        <h3 className="ml-4">Sector</h3>
        <img className='w-6 ml-52'  src="../src/assets/downArrow.png" alt="" />
    </div>
    <div className="bg-white ml-28 mt-10 mb-16 text-black w-80 py-2 px-2  shadow-rose-50 shadow-xl rounded-lg flex">
        <h3 className="ml-4">Industry</h3>
        <img className='w-6 ml-48' src="../src/assets/downArrow.png" alt="" />
    </div>
    <div className="bg-white ml-28 mt-10 mb-16 text-black py-2 px-2 w-80 shadow-rose-50 shadow-xl rounded-lg flex">
        <h3 className="ml-4">Company Type</h3>
        <img className='w-6 ml-36' src="../src/assets/downArrow.png" alt="" />
    </div>
</div>
    <div className="bg-rose-50">
    <div className='flex p-8'>
    <CompaniesCard2/>
    </div>
    <div className='flex p-8'>
    <CompaniesCard2/>
    </div>
    <div className='flex p-8'>
    <CompaniesCard2/>
    </div>
</div>






    </>
)
}