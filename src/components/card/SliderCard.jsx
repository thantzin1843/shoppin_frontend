
import React from 'react'

function SliderCard({titleOne,titleTwo,img,btnText}) {
  return (
    <div className="flex flex-wrap justify-center md:p-10 sm:p-3  h-full dark:bg-gray-700 dark:text-white">
          <div className="bg-gradient-to-r to-white from-orange-100 flex flex-col items-center justify-center md:w-1/2 sm:w-full sm:h-auto md:h-full">
            <div className="text-3xl font-bold mb-3">{titleOne}</div>
            <div className="text-5xl text-center font-extrabold">{titleTwo}</div>
            <button className="py-3 px-5 rounded-md bg-orange-500 hover:bg-orange-400 mt-7">{btnText}</button>
          </div>
          <div className="md:w-1/2 sm:w-full">
            <img src={img} className="w-full object-cover" alt="apple devices" />
          </div>
    </div>
  )
}

export default SliderCard