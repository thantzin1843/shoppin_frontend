import React from 'react'

function Filter() {
  return (
    <div className='flex justify-between my-10 flex-wrap '>
        <div className='flex flex-wrap'>
            <select name="" className='rounded-full px-2 py-1 md:me-2 sm:m-2' id="">
                <option value="">Type</option>
                <option value="">Book</option>
                <option value="">Fashion</option>
            </select>

            <input type="text" className='px-2 py-1 rounded-full w-[100px] md:me-2 sm:m-2' placeholder='max price' />
            <input type="text" className='px-2 py-1 rounded-full w-[100px] md:me-2 sm:m-2' placeholder='min price' />

            <select name="" className='rounded-full px-2 py-1 md:me-2 sm:m-2' id="">
                <option value="">Category</option>
                <option value="">Book</option>
                <option value="">Fashion</option>
            </select>

            <select name="" className='rounded-full px-2 py-1 md:me-2 sm:m-2' id="">
                <option value="">All filter</option>
                <option value="">Book</option>
                <option value="">Fashion</option>
            </select>
        </div>
        <div>
            <select name="" className='rounded-full px-2 py-1 sm:m-2 md:m-0' id="">
                <option value="">Sort By</option>
                <option value="">Book</option>
                <option value="">Fashion</option>
            </select>
        </div>
    </div>
  )
}

export default Filter