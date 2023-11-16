import React, { useState } from 'react'
import NavBar from '../components/NavBar' 
import CompaniesCard2 from '../components/CompaniesCard2'
import Footer from '../components/Footer'
export default function CompaniesPage()
{
    const Dropdown = ({ options, selectedOption, onSelect, label}) => {
        const [isOpen, setIsOpen] = useState(false);
      
        const handleToggle = () => {
          setIsOpen(!isOpen);
        };
      
        const handleSelect = (option) => {
          onSelect(option);
          setIsOpen(false);
        };
       
        return (
            <div className="pl-40">
              <div className="shadow-lg pl-8 pr-8 pt-2 pb-2 rounded-lg" onClick={handleToggle}>
              {selectedOption || label}
               
                <span className="pl-16 cursor-pointer">&#9660;</span>
              </div>
              
              {isOpen && (
                <div className="ml-8 cursor-pointer font-medium">
                  {options.map((option) => (
                    <div key={option} onClick={() => handleSelect(option)}>
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        };
   const locations = ['Select location','Location 1', 'Location 2', 'Location 3','Location 4'];
  const industries = ['Select Industry','Industry 1', 'Industry 2', 'Industry 3','Industry 4'];
  const companyTypes = ['Select Company type','Type 1', 'Type 2', 'Type 3','Type 4'];

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [selectedCompanyType, setSelectedCompanyType] = useState(null);

  
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
    );
}
