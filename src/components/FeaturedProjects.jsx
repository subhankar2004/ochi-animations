import { motion } from 'framer-motion'
import React, { useState } from 'react'

const FeaturedProjects = () => {
  const [hoverVise, setHoverVise] = useState(false);
  const [hoverFyde, setHoverFyde] = useState(false);
  
  return (
    <div className='w-full py-20 font-["NeueMontreal"]'>
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-7xl tracking-tighter'>Featured Projects</h1>
      </div>
      <div className='px-20'>
        <div className="cards w-full flex gap-10 mt-10">
        
          <div 
            className="card-container w-1/2 h-[80vh] relative"
            onMouseEnter={() => setHoverFyde(true)} 
            onMouseLeave={() => setHoverFyde(false)}
          >
            <h1 className='absolute text-[#cdea68] z-[9] text-9xl font-["Founders_Grotesk"] font-semibold leading-none tracking-tighter left-full -translate-x-1/2 top-1/2 -translate-y-1/2 flex overflow-hidden'>
              {"FYDE".split('').map((item, id) => (
                <motion.span 
                  key={id}
                  className='inline-block'
                  initial={{ y: '100%' }}
                  animate={hoverFyde ? { y: '0%' } : { y: '100%' }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: id * 0.1 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-lg overflow-hidden">
              <img 
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" 
                alt="fyde" 
                className='w-full h-full bg-cover'
              />
            </div>
          </div>

          <div 
            className="card-container w-1/2 h-[80vh] relative"
            onMouseEnter={() => setHoverVise(true)} 
            onMouseLeave={() => setHoverVise(false)}
          >
            <h1 className='absolute flex text-[#cdea68] z-[9] text-9xl font-["Founders_Grotesk"] font-semibold leading-none tracking-tighter right-full translate-x-1/2 top-1/2 -translate-y-1/2 overflow-hidden'>
              {"VISE".split('').map((item, id) => (
                <motion.span 
                  className='inline-block' 
                  key={id} 
                  initial={{ y: '100%' }}
                  animate={hoverVise ? { y: '0%' } : { y: '100%' }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: id * 0.1 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-lg overflow-hidden">
              <img 
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" 
                alt="vyse" 
                className='w-full h-full bg-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProjects
