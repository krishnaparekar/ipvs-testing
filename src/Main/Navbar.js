import React from 'react'
import { HiOutlineUserCircle } from "react-icons/hi2";
import IPlogo from '../assets/indiapost1.png'

const Navbar = () => {
    return (
        <>  
            <nav className='p-1  w-full rounded-sm bg-yellow-400 justify-between inline-flex items-center '>
            <div className='inline-flex'>
                <div><img className='h-6 mt-2' src={IPlogo} alt="IP Logo" /></div>
                <label className='text-base p-2 text-gray-500 font-semibold'>India Post Visibility System 2.0</label></div>
                <div className='w-30 border-gray-100 rounded-2xl border-2 float-right inline-flex hover:border-red-600'>
                    <label className='text-white text-xl ml-2'>Log IN </label>
                    <div className='text-white text-2xl p-1 hover:text-red-600'><HiOutlineUserCircle /></div>
                </div>
            </nav>



        </>
    )
}

export default Navbar
