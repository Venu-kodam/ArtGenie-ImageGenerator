import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext'
const GenerateBtn = () => {
    const{user,setShowLogin,navigate} = useContext(AppContext)
      const onClickHandler = ()=>{
        if(user){
          navigate('/result')
        }else{
          setShowLogin(true)
        }
      }
    return (
        <motion.div className='pb-16 text-center'
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16'>See the magic. Try now</h1>
            <button onClick={onClickHandler} className='sm:text-lg text-white bg-black hover:scale-105 transition-all duration-500 w-auto m-auto rounded-full py-3 px-12 inline-flex items-center  gap-2'>Generate Images
                <img src={assets.star_group} className='h-6' alt="" />
            </button>
        </motion.div>
    )
}

export default GenerateBtn