import Image from 'next/image'
import React from 'react'

function ThemeSwitcher() {
  return (
    <div className='flex justify-between bg-gray-500 rounded-full relative w-[50px]'>
        <Image src='/sun.png' width={20} height={20}/>
        <div className='w-[20px] h-[20px] bg-orange-400 absolute rounded-full right-0'></div>
        <Image src='/moon.png' width={20} height={20}/>
    </div>
  )
}

export default ThemeSwitcher