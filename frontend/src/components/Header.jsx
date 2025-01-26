import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext'
const Header = () => {
  const{user,setShowLogin,navigate} = useContext(AppContext)
  const onClickHandler = ()=>{
    if(user){
      navigate('/result')
    }else{
      setShowLogin(true)
    }
  }
  return (
    <motion.div className='flex flex-col justify-center items-center text-center my-20'
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div >
        <motion.div className='inline-flex text-center gap-2 bg-white py-1.5 px-6 rounded-full border border-neutral-500'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <p className=''>Best text to image generator </p>
          <img src={assets.star_icon} alt="" />
        </motion.div>
        <div>
          <motion.h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[600px] mx-auto mt-8 text-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 2 }}
          >Turn prompt to <br /> <span className='text-purple-600'>image</span> in a snap
          </motion.h1>
          <motion.p className='text-center max-w-xl mx-auto mt-5'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >Turn your imagination into reality with AI-powered image generation. Simply enter a prompt and watch your vision come to life!</motion.p>
          <motion.button onClick={onClickHandler} className='sm:text-lg text-white bg-black w-auto mt-8 mx-auto rounded-full py-2.5 px-12 flex items-center  gap-2'
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8, duration: 1 } }}
          >Generate Images
            <img src={assets.star_group} className='h-6' alt="" />
          </motion.button>
          <motion.div className='flex flex-wrap justify-center gap-3 mt-12 '
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            {
              Array(6).fill('').map((item, index) => (
                <motion.img
                  whileHover={{ scale: 1.05, duration: 0.5 }}
                  key={index} src={index % 2 == 0 ? assets.sample_img_1 : assets.sample_img_2} alt="" className='w-20 rounded hover:scale-105 duration-300 max-sm:w-10 cursor-pointer' />
              ))
            }
          </motion.div>
          <motion.p className='mt-4 text-neutral-600'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          >Generated images from ArtGenie</motion.p>
        </div>
      </div>
    </motion.div>
  )
}

export default Header