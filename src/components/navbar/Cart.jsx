import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, } from '@fortawesome/free-solid-svg-icons'

function Cart() {
  return (
    <div className='relative mx-3'>
       

<div className="text-center">
   <button className="overflow-y-auto text-black bg-white" type="button" data-drawer-target="drawer-top-example" data-drawer-show="drawer-top-example" data-drawer-placement="top" aria-controls="drawer-top-example">
   <FontAwesomeIcon icon={faCartShopping} className='text-2xl'/>
   </button>
</div>

<div id="drawer-top-example" className="fixed top-0 left-0 right-0 z-40 w-full p-4 transition-transform -translate-y-full bg-white dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-top-label">
    <h2 id="drawer-top-label" className="inline-flex items-center mb-4 text-3xl font-semibold text-gray-500 dark:text-gray-400">
   ITEMS IN MY CART </h2>
    <button type="button" data-drawer-hide="drawer-top-example" aria-controls="drawer-top-example" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
      <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
      <span className="sr-only">Close menu</span>
   </button>
    <div className='w-full flex '>
      <div className="md:w-4/5 sm:w-full">
      <table className='w-full'>
        <thead>
          <tr className='border-b border-b-orange-400 '>
          <td className='py-2 font-bold text-gray-400 text-xs'>ITEM</td>
          <td className='py-2 font-bold text-gray-400 text-xs'>UNIT PRICE</td>
          <td className='py-2 font-bold text-gray-400 text-xs'>QUANTITY</td>
          <td className='py-2 font-bold text-gray-400 text-xs'>FINAL PRICE</td>
          <td className='py-2 font-bold text-gray-400 text-xs'>REMOVE</td>
          </tr>
        </thead>
        <tbody className=''>
          <tr className='border-b border-gray-300'>
          <td className='flex items-center gap-3 '>
            <img src="/girlOne.jpg" className='w-12 h-12 my-2' alt="" />
            Levis Jeans 501
          </td>
          <td className=''>$200</td>
          <td className=''>
            <div class='flex '><button className=' bg-orange-400 w-[35px] h-[35px] flex justify-center items-center rounded-md '>-</button>
            <input className='w-[50px] h-[35px] p-2 rounded-md text-center mx-1' type='text' value={2}/>

            <button className='bg-orange-400 w-[35px] h-[35px] flex justify-center items-center rounded-md  '>+</button></div>
          </td>
          <td className=''>$200</td>
          <td className=''>
            <button className='bg-black btn-sm text-white rounded-md p-2'>Remove</button>
          </td>
          </tr>
        </tbody>
      </table>
      
      
      </div>
      <div className="md:w-1/5 sm:w-full border rounded-md p-3">
      <h2 className='text-2xl font-bold'>Summary</h2>
      <table className='w-full mt-10'>
        <tbody>
        <tr className=''>
          <td className='py-3'>Subtotal</td>
          <td className='text-end'>$200</td>
        </tr>
        <tr className=''>
          <td className='py-3'>Shipping Fee</td>
          <td className='text-end'>$20</td>
        </tr>
        <tr className=' border-t-2 '>
          <td className='pt-10'>Total Cost </td>
          <td className='text-end pt-10'>$220</td>
        </tr>
        </tbody>

      </table>
      
      </div>

    </div>
</div>

    </div>
  )
}

export default Cart