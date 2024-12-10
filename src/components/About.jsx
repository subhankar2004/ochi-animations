import React from 'react';
import { motion } from "motion/react"
function About() {
  return (
    <div className='w-full p-20 py-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-[#000000] font-["NeueMontreal"] text-[4vw] leading-[4vw]'>
      <h1>
        Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
      </h1>
      <div className="w-full border-t-[1px] border-black mt-20 pt-20 flex gap-5">
        <div className='w-1/2'>
          <h1 className='text-5xl'>Our Approach</h1>
          <button className='px-5 py-3 bg-zinc-900 rounded-full mt-10 text-white text-xl flex gap-4 items-center'>
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <motion.div className="w-1/2 h-[70vh] bg-red-400 rounded-2xl overflow-hidden">
          <motion.img
            className="w-full h-full object-cover"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt="image description"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default About;

