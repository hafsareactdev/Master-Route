import React from 'react'

const Facilities = () => {
  return (
   <>
   <div className='main-facil w-full py-20 bg-[#000]'>
    <div className="container">
    <div className='flex justify-evenly place-items-center'>
        <h1 className='font-oldenburg font-bold text-[#a1622e] text-5xl'>Facilities</h1>
        <div className="py-20">
        <div className='w-60 py-5 bg-[#fffbf0] rounded-md'>
            <h1 className='font-oldenburg font-bold text-[#a1622e] text-center'>Catering</h1>
            <p className='font-oldenburg font-thin text-black pt-5 text-center px-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, accusamus?</p>
        </div>
        </div>
        <div className="py-20">
        <div className='w-60 py-5 bg-[#fffbf0] rounded-md'>
            <h1 className='font-oldenburg font-bold text-[#a1622e] text-center'>Order Online</h1>
            <p className='font-oldenburg font-thin text-black pt-5 text-center px-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, accusamus?</p>
        </div>
        </div>
        <div className="py-20">
        <div className='w-60 py-5 bg-[#fffbf0] rounded-md'>
            <h1 className='font-oldenburg font-bold text-[#a1622e] text-center'>Order Holiday Feast</h1>
            <p className='font-oldenburg font-thin text-black pt-5 text-center px-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, accusamus?</p>
        </div>
        </div>
    </div>
    </div>
   </div>
   </>
  )
}

export default Facilities
