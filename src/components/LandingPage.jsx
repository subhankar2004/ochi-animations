import { motion } from 'motion/react';
import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const LandingPage = () => {
  
  const text=["We create","Eye openIng","presentation"];
  const text2=["for public and private companies","From the first pitch to last IPO"];

  return (
    <div data-scroll data-scroll-speed="-0.3" data-scroll-section className='w-full h-screen bg-zinc-900 pt-1'>
      <div className="textstructure mt-40 px-10">
      {text.map((text,index)=>(
        
        <div key={index} className="masker ">
        <div className="w-fit flex flex-row ">
          {index===1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{duration:1,ease:[0.76,0,0.24,1]}} className="w-[9vw] h-[5.2vw] bg-green-500 mt-[1vw] rounded-lg mr-[1vw] relative -top-[1.2vw overflow-hidden">
            <img src="https://th.bing.com/th/id/OIP.aok7KzqglAenUhS7PtDd9QHaHa?rs=1&pid=ImgDetMain" alt="logo" 
            className='h-full w-full bg-auto' />
          </motion.div>)}
        
          <h1 className='text-[7vw]  uppercase leading-[7.5vw] font-["Founders_Grotesk"] tracking-tighter  '>{text}</h1>
        </div>
        </div>
      ))}
        
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20 font-['NeueMontreal']">
        {text2.map((text,index)=>(
          <p key={index} className='text-lg font-light tracking-tight leading-none capitalize'>{text}</p>
        ))}
        <div className="start flex justify-center items-center gap-5">
          <div className='px-5 py-2 border-[2px] border-zinc-500 font-light text-lg uppercase rounded-full'>Start the project</div>
          <div className='w-10 h-10 rounded-full border-[1px] border-zinc-500 flex items-center justify-center '><span className='rotate-[-45deg]'>
          <FaArrowRight/>
          </span></div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
