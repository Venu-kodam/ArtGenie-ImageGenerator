import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'
const Testimonials = () => {
  return (
    <motion.div className='flex flex-col items-center justify-center my-28 py-8'
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    >
        <h1 className='text-gray-800 text-3xl sm:text-4xl mb-2 font-semibold'>Testimonials</h1>
        <p className='text-md text-gray-600 mb-8'>What Our Users are saying</p>
        <div className='flex flex-wrap gap-6 mt-10'>
            {
                testimonialsData.map((testimonial,index)=>(
                    <div key={index} className='flex flex-col gap-2 items-center rounded-lg justify-center border bg-white p-10 shadow-lg mx-auto cursor-pointer w-80 hover:scale-[1.03] transition-all duration-300'>
                        <img src={testimonial.image} className='w-14 rounded-full' alt="" />
                        <h2 className='text-gray-800 text-xl font-semibold'>{testimonial.name}</h2>
                        <p className=' text-gray-600'>{testimonial.role}</p>
                        <div className='flex mb-2'>
                            {
                                Array(testimonial.stars).fill().map((item,index)=>(
                                    <img key={index} src={assets.rating_star} alt="" />
                                ))
                            }
                        </div>
                        <p className='text-center text-sm text-gray-600'>{testimonial.text}</p>
                    </div>
                ))
            }
        </div>
    </motion.div>
  )
}

export default Testimonials