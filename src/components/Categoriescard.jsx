import React from 'react'

export default function Categoriescard(props)
{
    return(
    <>
    <div className='bg-black/25 pt-10 rounded-lg outline outline-black/25 outline-1 ml-1 mr-8 pb-1 flex flex-col justify-center place-items-center'>
      <img className='pt-1 pb-1' src="../src/assets/ellipseImg.png" alt="" />
      <h2 className='font-bold text-xl '>{props.title}</h2>
      <p className='pb-12 text-center '>There are 90 courses available for this Domain</p>
    </div>
</>
)

}