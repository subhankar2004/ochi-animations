import React, { useEffect, useState } from 'react'

function Eyes() {

  const [rotate,setRotate]=useState(0);
  
  useEffect(() => {
    window.addEventListener('mousemove',(e)=>{
      
      const mouseX=e.clientX;
      const mouseY=e.clientY;

      const differenceX=mouseX- window.innerWidth/2;
      const differenceY=mouseY- window.innerHeight/2;

      var angle=Math.atan2(differenceY,differenceX)* (180/Math.PI);
      setRotate(angle-180);
      
    })
  }, []);

 

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-speed="-0.9" className="w-full h-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] bg-cover bg-center relative">
        <div className="absolute w-1/2 h-80 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  flex items-center justify-center gap-20">
          <div className='w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center'>
            <div className="w-2/3 h-2/3 bg-zinc-900 rounded-full  relative">
              <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg) `}} className="line w-full h-10  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
              <div className="w-7 h-7 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className='w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center'>
          <div className="w-2/3 h-2/3 bg-zinc-900 rounded-full flex items-center justify-center relative">
          <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg) `}} className="line w-full h-10  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
              <div className="w-7 h-7 bg-zinc-100 rounded-full"></div>
              </div>

          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eyes

