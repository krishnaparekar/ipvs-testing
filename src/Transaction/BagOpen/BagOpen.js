import React from 'react'
import { FiSave } from "react-icons/fi";
import { AiTwotoneDelete } from "react-icons/ai";
import { GiPowderBag } from "react-icons/gi";

const BagOpen = () => {
  return (
    <>
        
        <div className='ml-64'>
                <div className='h-8 border-b border-red-900 text-xl font-bold mr-6 text-gray-600'>Bag Open</div>
                <table className='p-2'>
                    <tbody>
                    
                        <tr className='p-2'>
                            <td className='p-2 '><label className=' font-semibold text-gray-400'>Bag Number</label></td>
                                <td><input type='text' placeholder='' className='border-gray-500 border p-1 w-48 rounded-md  focus:border-sky-500 focus:outline-none' ></input></td>
                
                            <td className='p-2 '><label className=' font-semibold text-gray-400'>Office Set Name </label></td>
                            <td><input type='text' placeholder='Set 2' className='border-gray-500 border p-1 w-50 rounded-md focus:border-sky-500 focus:outline-none' ></input></td>

                           </tr>
                       

                        <tr className='p-2'>
                        <td className='p-2 '><label className=' font-semibold text-gray-400'>From Office Name </label></td>
                            <td><input type='text' placeholder='Pune NSH' className='border-gray-500 border p-1 w-48 rounded-md' ></input></td>
                        
                            <td className='p-2 '><label className=' font-semibold text-gray-400'>From Office </label></td>
                            <td><select className='p-1 w-48  border rounded-md border-gray-500 font-semibold text-gray-500 focus:ring-gray-600'>
                                <option value="item1" selected >Mumbai NSH</option>
                                <option value="item2">Bangluru NSH</option>
                                <option value="item3">Mysuru NSH</option>
                            </select></td>
                        </tr>


                        <tr className='p-2'>
                        <td className='p-2 '><label className=' font-semibold text-gray-400'>Article Number</label></td>
                            <td><input type='text' placeholder='' className='border-gray-500 border p-1 w-48 rounded-md  focus:border-sky-500 focus:outline-none' ></input></td>
             
                                           <td><div className='bg-red-700 w-24 h-8 m-auto relative flex justify-center items-center hover:bg-red-800 rounded '>

                                <div className="text-center text-white text-sm font-semibold leading-tight">Enter</div>
                            </div></td>
                        </tr>


                    </tbody>

                </table>

                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 w-10/12 mt-2">
                        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div class="overflow-hidden">
                                <table class="min-w-full text-center text-sm font-light">
                                    <thead
                                        class="border-b bg-neutral-300 font-medium dark:border-neutral-300 dark:text-neutral-800">
                                        <tr>
                                            <th className='w-30'>  <input id="default-checkbox" type="checkbox" value="" className=" px-3 py-2  bg-gray-100 accent-red-500 border-gray-300 rounded  dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                Select All</th>
                                            <th scope="col" class=" px-3 py-2">Sr</th>
                                            <th scope="col" class=" px-3 py-2">BagNumber</th>
                                            <th scope="col" class=" px-3 py-2">Article Number</th>
                                            <th scope="col" class=" px-3 py-2">Article Type</th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="border-b dark:border-neutral-300">

                                            <th><input id="default-checkbox" type="checkbox" value="" className=" px-3 py-2  bg-gray-100 accent-red-500 border-gray-300 rounded  dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            </th>
                                            <td class="whitespace-nowrap  px-3 py-2 font-medium">1</td>
                                            <td class="whitespace-nowrap  px-3 py-2">CBK1001234567</td>
                                            <td class="whitespace-nowrap  px-3 py-2">CM123456783IN</td>
                                            <td class="whitespace-nowrap  px-3 py-2">Parcel</td>
                                           
                                        </tr>
                                        <tr class="border-b dark:border-neutral-300">




                                            <th><input id="default-checkbox" type="checkbox" value="" className=" px-3 py-2  bg-gray-100 accent-red-500 border-gray-300 rounded  dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            </th>
                                            <td class="whitespace-nowrap  px-3 py-2 font-medium">2</td>
                                            <td class="whitespace-nowrap  px-3 py-2">EBK1001234567</td>
                                            <td class="whitespace-nowrap  px-3 py-2">CK129384783IN</td>
                                            <td class="whitespace-nowrap  px-3 py-2">BusinessParcel</td>
                                           
                                        </tr>
                                        <tr class="border-b dark:border-neutral-300">


                                            <th><input id="default-checkbox" type="checkbox" value="" className=" px-3 py-2  bg-gray-100 accent-red-500 border-gray-300 rounded  dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            </th>
                                            <td class="whitespace-nowrap  px-3 py-2 font-medium">3</td>
                                            <td class="whitespace-nowrap  px-3 py-2">CBK1001234567</td>
                                            <td class="whitespace-nowrap  px-3 py-2">EK984784783IN</td>
                                            <td class="whitespace-nowrap  px-3 py-2">SP_Parcel</td>
                                           
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

        <div className='inline-flex space-x-3'>

                <div className='bg-red-700 w-28 h-8 m-auto relative flex justify-center items-center hover:bg-red-800 rounded'>
                     <div className='text-white mr-2'><FiSave/></div>
                    <div className="text-center text-white text-sm font-semibold leading-tight">Save</div>
                </div>
                <div className='bg-red-700 w-28 h-8 m-auto relative flex justify-center items-center hover:bg-red-800 rounded'>
                <div className='text-white mr-2'>        <GiPowderBag/></div>
                    <div className="text-center text-white text-sm font-semibold leading-tight">Bag Open</div>
                </div>
                <div className='bg-red-700 w-28 h-8 m-auto relative flex justify-center items-center hover:bg-red-800 rounded'>
                <div className='text-white mr-2'> <AiTwotoneDelete/></div>
                    <div className="text-center text-white text-sm font-semibold leading-tight">Delete</div>
                </div>

            </div>
            </div>

    </>
  )
}

export default BagOpen
