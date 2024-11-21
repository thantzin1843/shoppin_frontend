'use client'

import { getSingleProduct } from '@/data/product';
import { faBan, faCartPlus, faCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

function ProductDesc({desc}) {
    const [count, setCount] = useState(1);
    
    const colors = [];
    desc.details.map((detail)=>{
        if(!colors.includes(detail.color)){
            colors.push(detail.color);
        }
    })
    const [selectedColor, setSelectedColor] = useState(colors[0]);
   
    const [sizes, setSizes] = useState(
        desc.details.filter((detail) => detail.color === colors[0])
        );
    
    const [selectedSize, setSelectedSize] = useState(sizes[0].size);
    const handleColorChange = (color) => {
        setSelectedColor(color);
        const filteredSizes = desc.details.filter((detail) => detail.color === color);
        // console.log(filteredSizes);
        setSelectedSize(filteredSizes[0].size);
        setSizes(filteredSizes);
        setCount(1);
    };

    // Get the quantity based on the selected color and size
  const getQuantity = () => {
    const selectedDetail = desc.details.find(
      (detail) => detail.color === selectedColor && detail.size === selectedSize
    );
    return selectedDetail ? selectedDetail.quantity : 0;
  };

    // useEffect(()=>{
    //     let a = selectedColor;
    //     console.log(a)
    // },[selectedColor,selectedSize])

    // console.log(selectedColor,selectedSize);
  return (
    <div className='md:w-1/2 sm:w-full pt-[50px] ps-[30px] mb-10'>
        {/* {JSON.stringify(desc)} */}
        <div className='text-3xl font-bold'>{desc.name}</div>
        <div className='my-5'><span>{desc.description}</span></div>
        <hr />
        <div className='my-5'><span className='line-through'>${desc.current_price}</span>&nbsp;<span className='font-bold'>${desc.updated_price}</span></div>
        <hr />

        <div className='text-xl font-bold my-3'>Choose a colour</div>
        <div className='my-3 flex'>
            {/* {JSON.stringify(sizes)} */}
            {
                colors?.map((c)=>{
                    return  <div className={`w-[30px] h-[30px] rounded-full bg-${c.toLowerCase()}-600 me-3 ${c==selectedColor && 'border-[3px] border-black'}`} onClick={() => handleColorChange(c)}></div>
                })
                
            }
           
            {/* <div className='w-[30px] h-[30px] rounded-full bg-purple-500 me-3'><FontAwesomeIcon icon={faBan} className='text-3xl text-black me-2'/></div>
            <div className='w-[30px] h-[30px] rounded-full bg-blue-500 me-3'></div> */}
        </div>

        <hr />
        <div className='text-xl font-bold my-3'>Choose size</div>
        <div className='my-3 flex'>
            {/* {selectedSize} */}
            {
                // desc.details.map((detail)=>{
                //     return detail.color.toLowerCase() == color.toLowerCase() ? <div className='py-1 px-2 border cursor-pointer border-black rounded-md me-3'>{detail.size}</div> : '';
                // })
                sizes.map((sizeDetail,index)=>(
                    <div className={`py-1 px-2 border cursor-pointer border-black rounded-md me-3 ${sizeDetail.size==selectedSize && 'bg-orange-400 '}`} onClick={()=>{
                        setSelectedSize(sizeDetail.size)
                        setCount(1)
                    }}>{sizeDetail.size}</div>
                ))
            }
            
            {/* 
            <div className='py-1 px-2 border cursor-pointer border-black rounded-md me-3'>Large</div> */}
        </div>
        <hr />
        <div className='text-xl font-bold my-3'>Choose Quantity</div>
        <div className='my-3 flex flex-wrap justify-between'>
           {
            getQuantity()>0 && (
                <div>
                    <button className='py-2 px-3 bg-orange-500 rounded-s-md' onClick={()=>(count>1 && setCount(count-1))}>-</button>
                    <input type="number" value={count} className='w-[70px] border-none outline-none text-center bg-gray-200'  />
                    <button className='py-2 px-3 bg-orange-500 rounded-e-md' onClick={()=>(count<getQuantity() && setCount(count+1))}>+</button>
                </div>
            )
           }
            <div>
                <span>{getQuantity() == 0 ? 'Variant is out of stock. Choose another one.' : `Available stock : ${getQuantity()}`}</span>
            </div>
            
        </div>
        <div>
            <button className='p-2 bg-orange-500 text-white mt-3 rounded-md '><FontAwesomeIcon icon={faCartPlus}/>&nbsp;Add to cart</button>
        </div>

        <div className='text-xl font-semibold my-3'>Product Info</div>
        <div className='text-sm'
            dangerouslySetInnerHTML={{ __html: desc.product_info }}
            />
      

        <div className='text-xl font-semibold my-3'>Return and refund policy</div>
        <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, accusantium dolores reiciendis  aperiam consequatur, rerum </p>

        <div className='text-xl font-semibold my-3'>Shopping Info</div>
        <p className='text-sm  mb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, accusantium dolores reiciendis  aperiam consequatur, rerum </p>
    </div>
  )
}

export default ProductDesc