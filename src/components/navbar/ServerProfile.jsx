import React from 'react'

function ServerProfile({hidden}) {

  return (
    <div className={`z-50 absolute top-10 bg-white shadow-xl p-2 rounded border border-orange-500 ${hidden ? 'hidden' : ''}`}>
        <div className='hover:bg-orange-200 p-2 rounded-md cursor-pointer'>Profile</div>
        <div className='hover:bg-orange-200 p-2 rounded-md cursor-pointer'>Login</div>
    </div>
  )
}

export default ServerProfile