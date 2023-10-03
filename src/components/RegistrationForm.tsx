import React, { useState } from 'react'
import Button from './Button'

const RegistrationForm = () => {
  return (
    <div className='mt-2 shadow-xl items-start transition-transform -translate-x-full sm:translate-x-0 px-5 py-3 text-gray-300 dark:text-black border border-gray-500 rounded-md'>

{/* REGISTRATION FORM */} 
    <form>
        <div className='flex flex-col'>
            <div className='flex items-start justify-between'>
                <h1 className='font-semibold block mt-9 mb-5 text-3xl'> Student Information </h1> 
{/* QR CODE FRAME */}
                <div id='qrfr' className='box-border border-black h-32 w-32 p-4 border-2 mb-2'>
                    </div>
            </div>

{/* TRACK || STRAND */}
                <div className='grid grid-flow-col-dense gap-3 justify-start mb-3'>
                    <div>
                        <label htmlFor="track" className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black">Track</label>
                        <input type="text" id="track" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-40 p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Track" required/>
                    </div>
                    <div>
                        <label htmlFor="strand" className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black">Strand</label>
                        <input type="text" id="strand" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-40 p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Strand" required/>
                    </div>
                </div>
                
{/* ACTUAL FORM */}
                <div className='grid grid-flow-col w-full justify-auto gap-4 mb-3'>
                    <div>
                        <label htmlFor="first_name" className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black">First name</label>
                        <input type="text" id="first_name" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name" required/>
                    </div>
                    <div>
                        <label htmlFor="middle_name" className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black">Middle name</label>
                        <input type="text" id="middle_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Middle Name"/>
                    </div>
                    <div>
                        <label htmlFor="company" className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black">Last Name</label>
                        <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name" required/>
                    </div>
                    <div>
                        <label htmlFor="suffix" className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black">Suffix</label>
                        <input type="text" id="suffix" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Suffix" required/>
                    </div>
                </div>  
                    <div className='grid grid-flow-col gap-4 mb-3'>  
                        <div>
                            <label htmlFor="gender" className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black">Gender</label>
                            <input type="text" id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-64 p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Gender" required/>
                        </div> 
                        <div>
                            <label htmlFor="contact-no" className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black">Contact Number</label>
                            <input type="tel" id="contact-no" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-64 p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Contact Number" required/>
                        </div>
                    </div>  
                </div>
                <hr className='mb-3'/>
            
                <div>
                    <h2 className="font-bold block mb-2 text-lg font-small text-gray-900 dark:text-black">Present Address</h2>
                </div>

                <div className='grid grid-flow-col items-justify gap-3'>
                    <div>
                        <label htmlFor="address" className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black">House No</label>
                        <input type="text" id="house-no" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="House No."required/>
                    </div>
                    <div>
                        <label htmlFor="address" className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black">Lot No</label>
                        <input type="text" id="lot-no" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Lot No." required/>
                    </div>
                    <div>
                        <label htmlFor="address" className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black">Street</label>
                        <input type="text" id="street" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Street" required/>
                    </div>
                    <div>
                        <label htmlFor="address" className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black">Barangay</label>
                        <input type="text" id="barangay" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Barangay" required/>
                    </div>
                    </div>
                    <div className='grid grid-flow-col items-justify gap-3'>
                    <div>
                        <label htmlFor="address" className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black">Municipality</label>
                        <input type="text" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Municipality" required/>
                    </div>
                    <div>
                        <label htmlFor="address" className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black">Province</label>
                        <input type="text" id="province" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Province" required/>
                    </div>
                        <div>
                        <label htmlFor="address" className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black">ZIP Code</label>
                        <input type="code" id="zip" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ZIP Code" required/>
                    </div>
                </div>
                
                <hr className='mb-3 mt-3'/>
            <div className='flex flex-row w-full gap-4'>
                <div>
                    <label htmlFor='name'className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black">Person to be contacted in case of Emergency</label>
                    <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name of Parent/Guardian" required/>
                </div>
                <div>
                    <label htmlFor="confirm_password" className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black">Contact No.</label>
                    <input type="tel" id="c-number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Contact Number" required/>
                </div>
            </div>
            
{/* FOR QR GENERATION */}
            <div className='flex flex-row mt-2'>
                <div className='flex mt-2 w-1/6 items-center'>
                    <Button type='submit' text='Generate QR Code'/>
                </div>

{/* SAVE TO DATABASE */}
                <div  className='flex mt-2 w-1/6 items-center'>
                    <Button type='submit' text='Submit'/>
                </div>
            </div>
        </form>
    </div>
  )
}

export default RegistrationForm