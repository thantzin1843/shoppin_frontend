'use client'
import { faSignIn } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react'

function page() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const router = useRouter();

    const handleLogin = async(e)=>{
        e.preventDefault();
        const data = {
            email: emailRef.current.value,
            password:  passwordRef.current.value
        };
        const res = await fetch('http://localhost:8000/api/login',{
            method:'POST',
            credentials:'include',
            body:JSON.stringify(data),
            headers: {'Content-Type': 'application/json'},
        })
        const jsonRes = await res.json();
        router.push('/')
    }
  return (
    <div className='md:w-5/6 sm:w-full mx-auto flex bg-orange-100 flex-wrap mb-5 rounded-lg overflow-hidden'>
        <div className="md:w-1/2 sm:w-full flex flex-col justify-center items-center px-5 py-[50px] " >
            <div className='text-center mb-5 border-b border-black pb-3'>
                <div className='text-3xl font-bold'>Login Here</div>
                <div>Welcome back!</div>
            </div>
            <form action="" className="w-2/3 " method='post' onSubmit={handleLogin}>
                <label htmlFor="" className=''>Email</label><br />
                <input ref={emailRef} type="email" name="" className='mb-3 rounded-md border-none outline-none shadow w-full'/><br />
                <label htmlFor="" className=''>Password</label><br />
                <input ref={passwordRef} type="password" name="" className='mb-5 rounded-md border-none outline-none shadow w-full'/><br />
                <button type='submit' className='bg-orange-500 py-2 px-3 rounded-md w-full'>Sign in <FontAwesomeIcon icon={faSignIn}/></button>
            </form>
        </div>
        <div className="md:w-1/2 sm:w-full flex justify-center items-center p-2 bg-orange-400">
            <img src='/56777.png' className='w-full h-full object-cover'/>
        </div>
    </div>
  )
}

export default page