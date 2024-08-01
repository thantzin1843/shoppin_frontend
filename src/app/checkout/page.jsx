import CartItem from '@/components/navbar/CartItem'
import React from 'react'

export default function page() {
  return (
    <div className='flex md:w-3/6 sm:w-full mx-auto md:mt-5'>
        <div className="w-full  p-5">
          <div className='text-xl font-semibold mb-3'>
            Customer Details
          </div>
          <div>
            <form action="">
              <div className='mt-3'>
              <label htmlFor="" className='text-gray-600 text-sm'>Name</label>
              <input type="text" name="" className="w-full rounded-lg outline-none border  border-gray-400 bg-gray-50 " />
              </div>

              <div className='mt-3'>
              <label htmlFor="" className='text-gray-600 text-sm'>Email</label>
              <input type="email" name="" className="w-full rounded-lg outline-none border  border-gray-400 bg-gray-50 " />
              </div>

              <div className='mt-3'>
              <label htmlFor="" className='text-gray-600 text-sm'>Phone</label>
              <input type="number" name="" className="w-full rounded-lg outline-none border  border-gray-400 bg-gray-50 " />
              </div>
            </form>
          </div>

          <div className='text-xl font-semibold mt-6'>
            Delivery Details
          </div>
          <div>
            <form action="">
              <div className='mt-3'>
              <label htmlFor="" className='text-gray-600 text-sm'>Country</label>
              <select name="" id="" className="w-full rounded-lg outline-none border  border-gray-400 bg-gray-50 ">
              <option value="">Select Country</option>
                <option value="">Myanmar</option>
                <option value="">Thailand</option>
              </select>
              </div>

              <div className='mt-3'>
              <label htmlFor="" className='text-gray-600 text-sm'>Address</label>
              <textarea name=""  className="w-full rounded-lg outline-none border  border-gray-400 bg-gray-50 " id="">

              </textarea>
              </div>
            </form>
          </div>

          <div className='text-xl font-semibold mt-6'>
            Payment
          </div>
          <div className='bg-gray-200 p-3 rounded-md'>
            <div className='mt-3'>
                <label htmlFor="" className='text-gray-600 text-sm'>Card Number</label>
                <input type="text" name="" className="w-full rounded-lg outline-none border  border-gray-400 bg-gray-50 " />
            </div>
            <div className="flex">
            <div className='mt-3 md:w-1/2 sm:w-full me-3'>
                <label htmlFor="" className='text-gray-600 text-sm'>Expiration Date</label>
                <input type="text" name="" className="w-full rounded-lg outline-none border  border-gray-400 bg-gray-50 " />
            </div>
            <div className='mt-3 md:w-1/2 sm:w-full '>
                <label htmlFor="" className='text-gray-600 text-sm'>Security Code( CVV )</label>
                <input type="text" name="" className="w-full rounded-lg outline-none border  border-gray-400 bg-gray-50 " />
            </div>
            </div>

            <div className='mt-3'>
                <label htmlFor="" className='text-gray-600 text-sm'>Cardholder Name</label>
                <input type="text" name="" className="w-full rounded-lg outline-none border  border-gray-400 bg-gray-50 " />
            </div>
          </div>

          <div className='text-lg font-semibold mt-6 mb-3'>
            Review & place order
          </div>
          <div className='font-bold text-sm'>
            Review the order detail above and place the order when you are ready.
          </div>

          <div className='my-3'>
            <input type="checkbox" name="" className='me-3'/>
            <span>Agree to the <a href="" className='underline'>Terms and Conditions</a></span>
          </div>

          <button className='py-2 text-white rounded-md bg-orange-500 w-full'>
            Confirm Order
          </button>

        </div>
        
    </div>
  )
}
