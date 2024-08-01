import React from 'react'

function CartItem() {
  return (
    <div className='flex justify-between my-1'>
                <div className='w-1/3 h-auto '><img src="/pot.jpg" className='w-full object-cover rounded-md' alt="" /></div>
                <div className='ms-2 w-2/3'>
                    <div className='flex justify-between'>
                        <div className='text-lg font-bold'>Classic Tote bag best world</div>
                        <div className='text-lg'>$18</div>
                    </div>
                    <div>{"available".toUpperCase()}</div>
                    <div className='flex justify-between items-center'>
                         <div>Quantity - 2</div>
                         <div><button className='bg-black text-white p-1 rounded-md'>Remove</button></div>
                    </div>
                </div>
            </div>
         
  )
}

export default CartItem