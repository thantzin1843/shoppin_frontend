'use client'
import React, { useState } from 'react'

function CategoryCard({img}) {
  return (
    <div className='sm:w-1/2 md:w-1/3 h-[200px] relative categoryCard'>

        <img src={img} className='w-full h-full object-contain' alt="" />
        <div className={`h-full absolute bg-gradient-to-r from-gray-400 to-orange-400/50 flex justify-center items-center top-0 right-0 text-orange-700 cateText`}>
            <div className={`font-extrabold text-3xl drop-shadow-xl `}>Jeans</div>
        </div>
    </div>
  )
}

export default CategoryCard