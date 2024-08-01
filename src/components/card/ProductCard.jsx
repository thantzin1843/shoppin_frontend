
import Link from 'next/link'
import react from 'react'

export const ProductCard = ({product}) =>{

    return (
        <div className='inline-block p-3 md:w-1/4 sm:w-3/4 shadow shadow-orange-300 mb-10 rounded-md overflow-hidden mx-3'>
            <Link href={`/shop/${product.id}`}><img src={`http://localhost:8000/storage/${product.images[0].image}`} className='w-full h-[200px] object-cover ' alt="" /></Link>
            <div className=' mt-1 flex justify-between w-full gap-5'>
                <div className='font-semibold'>{product.name}</div><div className='font-bold'>${product.current_price}</div>
            </div>
            <div className='text-sm mt-1 productDesc' >{product.description}</div>
            <button className='hover:bg-orange-400 hover:text-white transition-all duration-200 text-sm border rounded-full border-orange-400 text-orange-500 px-2 py-1  mt-2'>Add to cart</button>
        </div>
    )
}

