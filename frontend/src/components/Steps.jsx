import React from 'react'
import { assets, stepsData } from '../assets/assets'
import { motion } from 'framer-motion'
const Steps = () => {
  return (
    <motion.div className='flex flex-col items-center justify-center my-32'
    initial={{opacity:0,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    >
        <h1 className='text-gray-800 text-3xl sm:text-4xl mb-2 font-semibold'>How it works</h1>
        <p className='text-md text-gray-500 mb-8'>Bring your ideas to life in just a few steps</p>
        <div >
            {
                stepsData.map((step,index)=>(
                    <div key={index} className='flex items-center gap-4 bg-white/20 border my-8 px-4 py-4 shadow-md rounded-lg cursor-pointer hover:scale-105 transition-all duration-500'>
                        <img src={step.icon} alt="" width={40}/>
                        <div>
                            <h2 className='text-xl font-semibold'>{step.title}</h2>
                            <p className='text-md text-gray-500'>{step.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </motion.div>
  )
}

export default Steps