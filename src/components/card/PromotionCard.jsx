import React from 'react'
import Title from '../title/Title'

function PromotionCard() {
  return (

    <div className="flex h-full p-5 ">
          <div className="w-2/3 flex justify-center items-center p-[50px]">
            <div className='sm:text-3xl md:text-4xl font-extrabold text-center'>Grab up 50% off on selected products</div>
          </div>
         
          <div className="w-1/3 flex justify-center items-center">
            <img src="/girlmusic.png" className='w-full h-full object-cover' alt="" />
          </div>
         
    </div>

  )
}

export default PromotionCard