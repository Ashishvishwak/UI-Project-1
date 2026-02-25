import React from 'react'

function Hero() {
  return (
    <main className='my-10 max-w-9xl  mx-auto  relative  '>
      
      <img src="src/assets/hero-1.png" alt=""  className='opacity-90 w-full object-cover h-screen rounded-xl'/>

      <div className=" absolute inset-x-0 inset-y-0  p-10"> 
      <div className="flex flex-col md:flex-row md:justify-between justify-center items-center h-screen text-pri sm:gap-10 gap-5 ">

        <h2 className='text-4xl md:text-6xl font-normal font-Lustria'>Let’s bring your dream <br/>building to life!</h2>
        <p className='text-center md:text-end text-2xl md:max-w-1/2'>Our skilled team offers tailored solutions for all your construction needs. Get the support you require<br/> today!</p>
        </div>
     </div>
    
    </main>
  )
}

export default Hero