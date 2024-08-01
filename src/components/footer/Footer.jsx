import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
  <div className="flex flex-wrap w-full p-10 border-t">
    <div className="sm:w-full md:w-1/2">
        <div>
            <img src="/vercel.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold text-orange-400 dark:text-white">Shoppin</span>
        </div>
        <div className='my-5'>
            <div>Subscribe for more information!</div>
             <div>
                <input type="text" className='border md:w-2/3 sm:w-full py-3 outline-none border-none bg-gray-200' placeholder='example@gmail.com' />
                <button type="submit" className='!bg-orange-400  px-5 py-3 sm:mt-1 border' >Subscribe</button>
             </div>
        </div>
    </div>

    <div className="sm:w-full md:w-1/2 flex flex-wrap justify-around">
    <div className='sm:w-full md:w-1/2'>
        <div className='text-xl font-bold'>Quick Links</div>
        <div className='mt-5 text-sm text-gray-400'>
            <div className='mt-3' active>Home</div>
            <div className='mt-3'>Shop</div>
            <div className='mt-3'>Contact</div>
        </div>
    </div>

    <div className='sm:w-full md:w-1/2'>
        <div className='text-xl font-bold'>Contact Informations</div>
        <div className='mt-5 text-sm text-gray-400  flex justify-between'>
            <div className='mt-3' active> <FontAwesomeIcon icon={faFacebook} className='text-2xl'/> </div>
            <div className='mt-3'><FontAwesomeIcon icon={faMailBulk} className='text-2xl'/></div>
            <div className='mt-3'><FontAwesomeIcon icon={faGoogle} className='text-2xl'/></div>
            <div className='mt-3'><FontAwesomeIcon icon={faTwitter} className='text-2xl'/></div>
        </div>
    </div>
    </div>
  </div>

  )
}

export default Footer