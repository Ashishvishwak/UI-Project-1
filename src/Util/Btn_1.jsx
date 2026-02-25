import React from 'react'

function Btn_1() {
  return (

    <div className=" flex items-center gap-2 bg-pri py-2 px-2 rounded-full">
      <div className="flex items-center gap-2 relative">
           <img src="src/assets/hero-1.png" alt="" className='w-10 h-10 rounded-full object-cover' />
           <span className='absolute top-[0px] left-[30px] rounded-full w-1.5 h-1.5 bg-green-300 border border-[1px] border-black '></span>
                    <div className="flex flex-col">
                 <h1 className='text-sm font-medium text-sec'>Eric Winston</h1>
                   <p className='text-xs text-sec'>Construntuion Principle</p>
             </div>
      </div>
      <div className="btn py-2 px-4 bg-sec rounded-full text-pri text-sm text-center flex items-center gap-2">
     Book a Call
    </div>

    </div>
  );
} 

export default Btn_1;