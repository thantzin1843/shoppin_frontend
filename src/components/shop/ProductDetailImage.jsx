'use client'
import React, {useEffect, useState } from 'react'

function ProductDetailImage({images}) {
  
  const [src , setSrc] = useState("/pot.jpg");
  
  
  return (
  
    <div className='md:w-1/2 sm:w-full justify-center items-center pt-[50px]'>
        <div className='w-full h-[350px] shadow'>
            <img src={`http://localhost:8000/storage/${images[0].image}`} className='w-full h-full' alt="" />
        </div>
        <div className='w-full flex gap-1 mt-3 overflow-hidden'>
        {
            images.map((image,index) => {
              return <img key={index} 
                onClick={()=>setSrc(image.image)} src={`http://localhost:8000/storage/${image.image}`} className='w-1/4 h-[100px] object-cover' alt="" />
            })
          }
           
        </div>
    </div>
  )
}

export default ProductDetailImage