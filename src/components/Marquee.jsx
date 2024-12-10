import React from 'react'
import { motion } from "motion/react"

function Marquee() {
  
  return (
    <div data-scroll data-scroll-speed="0.1" data-scroll-section className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[rgb(0,77,67)]'>
      <div className="text border-t-2 border-zinc-300 border-b-2 flex whitespace-nowrap uppercase gap-10 overflow-hidden p-10">
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{duration:10,repeat:Infinity,ease:"linear"}} className='text-[9vw] font-["Founders_Grotesk"] font-bold -mb-[5vw] mt-[-2vw] pt-10 tracking-tighter'>We Are gamechangers</motion.h1>
        <motion.h1  initial={{x:0}} animate={{x:"-100%"}} transition={{duration:10,repeat:Infinity,ease:"linear"}} className='text-[9vw] font-["Founders_Grotesk"] font-bold tracking-tighter -mb-[5vw] mt-[-2vw] pt-10'>We Are gamechangers</motion.h1>
        <motion.h1  initial={{x:0}} animate={{x:"-100%"}} transition={{duration:10,repeat:Infinity,ease:"linear"}} className='text-[9vw] font-["Founders_Grotesk"] font-bold tracking-tighter -mb-5 -mt-10 pt-10'>We Are gamechangers</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
