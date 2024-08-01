'use client'
import React from 'react'
import { motion } from 'framer-motion'
function Title({text}) {
  return (
    <motion.div initial={{ x:"-100vw" }}
    animate={{x:0}}
    transition={{delay:1,duration:3}}
     className='text-xl border-b-3 mb-[25px] text-center'>{text}</motion.div>
  )
}

export default Title