import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
const Description = () => {
  return (
    <motion.div className='flex flex-col items-center justify-center my-24'
    initial={{opacity:0,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    >
        <h1 className='text-gray-800 text-3xl sm:text-4xl mb-2 font-semibold'>Create AI Images</h1>
        <p className='text-md text-gray-500 mb-12'>Turn your imagination into visuals</p>
        <div className='flex flex-col md:flex-row gap-5 md:gap-14 items-center font-medium'>
            <img src={assets.sample_img_2} alt="" className='w-80 xl:w-96 rounded-lg'/>
            <div>
                <h2 className='text-3xl font-medium mb-4 max-w-lg'>Unleash your creativity with the power of AI</h2>
                <p className='text-gray-600 mb-4'>Experience the next generation of image creation with our AI-powered text-to-image generator. Whether you need breathtaking visuals or custom illustrations, our tool transforms your ideas into stunning images in just a few clicks. Simply describe it and watch your vision come to life instantly.</p>
                <p className='text-gray-600 mb-4'>Simply type your prompts and let our cutting-edge AI generate high-quality visuals in seconds. From product designs to creative concepts, even the unimaginable becomes reality. Powered by advanced AI technology, the possibilities are endless. </p>
            </div>
        </div>
    </motion.div>
  )
}

export default Description