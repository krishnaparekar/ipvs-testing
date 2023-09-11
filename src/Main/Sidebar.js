import React from 'react'
import { NavLink } from 'react-router-dom'
import { GiPowderBag } from "react-icons/gi";

const Sidebar = () => {
    return (
        <>
        <div className='w-48 absolute'>
            <div className='w-48  bg-gray-300 h-screen border-gray-950 border-r'>

                <div className='w-full bg-red-700 py-2  px-2 border-b-2 border-red-800'><NavLink to="/BagReceive">
                <div className='p-2 rounded-3xl hover:bg-red-800 font-semibold text-white  text-left'> Bag Receive  </div> </NavLink>
              </div>
              <div className='w-full bg-red-700 py-2 px-2 border-b-2 border-red-800'><NavLink to="/BagOpen">
                <div className='p-2 rounded-3xl hover:bg-red-800 font-semibold text-white text-center'> Bag Open  </div> </NavLink>
              </div>
              <div className='w-full bg-red-700 py-2 px-2 border-b-2 border-red-800'><NavLink to="/BagReceive">
                <div className='p-2 rounded-3xl hover:bg-red-800 font-semibold text-white text-center'> Bag Close  </div> </NavLink>
              </div>
              <div className='w-full bg-red-700 py-2 '><NavLink to="/BagReceive">
                <div className='p-2 rounded-3xl hover:bg-red-800 font-semibold text-white text-center'> Bag Despatch  </div> </NavLink>
              </div>
                

            </div>
    </div>

        </>
    )
}

export default Sidebar
