import React from 'react'

const Cards = () => {
  return (
    <div data-scroll data-scroll-speed="0.8" className='w-full h-[140vh] bg-zinc-900 text-black flex flex-col justify-end'>
    <div  className='w-full h-screen bg-zinc-900 text-black flex gap-5 items-center px-32 '>
      <div className="card-container w-1/2 h-[50vh]">
        <div className="card relative w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center">
        <img class="bg-gray-200 entered loaded" data-component="lazyload" data-animate="data-animate" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" height="150" width="150" data-src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" data-ll-status="loaded" className='w-32 '></img>
        <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-2 border-[#74A658] text-[#74A658]'>@2023-2027</button>
        </div>
      </div>
      <div className="card-container w-1/2 h-[50vh] flex gap-5">
      <div className="card w-full h-full bg-[#212d2c] rounded-xl flex items-center justify-center relative">
      <img class="bg-gray-200 entered loaded" data-component="lazyload" data-animate="data-animate" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" height="150" width="150" data-src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" data-ll-status="loaded" className='w-32'></img>
      <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-2 border-[#fff] text-[#fff]'>Rating 5.0 On CLUTCH</button>
      </div>
      <div className="card w-full h-full bg-[#252a29] rounded-xl flex items-center justify-center relative">
      <img class="bg-gray-200 entered loaded" data-component="lazyload" data-animate="data-animate" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" height="104" width="102" data-src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="https://ochi.design/wp-content/uploads/2022/04/logo003.png" data-ll-status="loaded" className='w-32' ></img>
      <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-2 border-[#fff] text-[#fff]'>Business Bootcamp Alumni</button>
      </div>
      </div>
      </div>
      <div className="h-[40vh]"></div>
    </div>
  )
}

export default Cards
