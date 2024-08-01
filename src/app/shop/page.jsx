
import { ProductCard } from '@/components/card/ProductCard'
import Filter from '@/components/shop/Filter'
import { ProductSlider } from '@/components/slider/ProductSlider'
import axios from 'axios';
import React from 'react'

const getProducts = async()=>{
  const response = await fetch("http://localhost:8000/api/products");
  if(!response.ok){
    throw new Error("Fail to fetch products");
  }
  return await response.json();
}
async function page() {
  const data = await getProducts();
  
  return (
    <div className='md:w-5/6 sm:w-full mx-auto' >
        <ProductSlider/>
        <Filter/>
        <div className='flex flex-wrap justify-center' >
          {
            data.map((p,index)=>{
              return  <ProductCard product={p} key={index}/>
            })
          }
       
        </div>
    </div>
  )
}
export default page

