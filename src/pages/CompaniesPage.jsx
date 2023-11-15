import React from 'react'
import NavBar from '../components/NavBar' 
import CompaniesCard2 from '../components/CompaniesCard2'
import Footer from '../components/Footer'
export default function CompaniesPage()
{
return(
    <>
    <NavBar />

    <div className="bg-rose-50 p-6" >
       <h2 className="ml-10 text-xl font-bold min-[280px]:text-xl">Featured Companies Actively Hiring</h2>
    </div>
    <div className="flex min-[280px]:flex-col min-[280px]:mt-[60px] md:flex-row">
    <div className="bg-white ml-24 mt-10 mb-16 text-black w-80 py-2 px-2 shadow-rose-50 shadow-xl rounded-lg flex min-[280px]:ml-2 md:ml-12">
        <h3 className="ml-4">Sector</h3>
        <img className='w-6 ml-52'  src="assets/downArrow.png" alt="" />
    </div>
    <div className="bg-white ml-40 mt-10 mb-16 text-black w-80 py-2 px-2  shadow-rose-50 shadow-xl rounded-lg flex min-[280px]:ml-1 md:ml-32">
        <h3 className="ml-4">Industry</h3>
        <img className='w-6 ml-48' src="assets/downArrow.png" alt="" />
    </div>
    <div className="bg-white ml-44 mt-10 mb-16 text-black py-2 px-2 w-80 shadow-rose-50 shadow-xl rounded-lg flex min-[280px]:ml-1 md:ml-36">
        <h3 className="ml-4">Company Type</h3>
        <img className='w-6 ml-36' src="assets/downArrow.png" alt="" />
    </div>
</div>
     {/*Companies section start here */}
<div className="bg-rose-50 ">
    <div className='flex p-8 md:mt-[50px] min-[280px]:flex-col min-[280px]:mt-[60px] md:flex-row'>
    <CompaniesCard2/>
    </div>
    <div className='flex p-8 md:mt-[50px] min-[280px]:flex-col min-[280px]:mt-[60px] md:flex-row'>
    <CompaniesCard2/>
    </div>
    <div className='flex p-8 md:mt-[50px] min-[280px]:flex-col min-[280px]:mt-[60px] md:flex-row'>
    <CompaniesCard2/>
    </div>
</div>
    {/*Companies section ends here*/}

   <Footer />





    </>
)
}