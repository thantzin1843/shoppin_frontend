
import ProductDesc from '@/components/shop/ProductDesc'
import ProductDetailImage from '@/components/shop/ProductDetailImage'
import React  from 'react'

const getProduct = async(id)=>{

    const response = await fetch(`http://localhost:8000/api/products/${id}`);

    if(!response.ok){
      throw new Error("failed to get product");
    }
    return await response.json();
}
async function page({params}) {
  const id = params.id;
  const data = await getProduct(id);
  return (
    <div className='md:w-5/6 sm:w-full  flex flex-wrap mx-auto'>
      {/* {JSON.stringify(data)} */}
        <ProductDetailImage images={data[0].images}/>
        <ProductDesc desc={data[0]}/>
    </div>
  )
}

export default page