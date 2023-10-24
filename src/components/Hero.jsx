import React from 'react'
import Typed from 'react-typed';

function Hero() {
  return (
    <div className='text-black'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center gap-4'>
            <p className='text-[#14bf89] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-6x text-4xl font-bold md:py-6'>Grow with data</h1>
            <div> 
                <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast, flexible financing for</p>
                <Typed 
                className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                strings={['BTB','BTC','SASS']}
                typeSpeed={120}
                backSpeed={140}
                loop
                />
            </div>
            <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Get Started</button>
        </div>
    </div>
  )
}

export default Hero