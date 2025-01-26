import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext'
const Result = () => {
  const [image, setImage] = useState(assets.sample_img_2)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')

  const{generateImage} = useContext(AppContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    if(input){
      const image = await generateImage(input)
      if(image){
        setIsImageLoaded(true)
        setImage(image)
      }
    }
    setLoading(false)
  }
  return (
    <motion.form onSubmit={handleSubmit} className='flex flex-col items-center justify-center min-h-[90vh]'
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div>
        <div className="relative">
          <img src={image} className='max-w-sm rounded-lg cursor-pointer' alt="" />
          <span className={`absolute bottom-0 left-0 h-1 bg-blue-500  ${loading ? 'w-full transition-all duration-[10s]' : 'w-0'}`} />
        </div>
        <p className={loading ? '' : 'hidden'}>Loading...</p>
      </div>
      {
        !isImageLoaded &&
        <div className='flex w-full max-w-xl bg-neutral-500 rounded-full text-sm p-0.5 mt-10 text-white'>
          <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Type prompt here to generate image' className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder:text-white' />
          <button type='submit' className='bg-black px-10 sm:px-16 py-3 rounded-full text-white'>Generate</button>
        </div>
      }

      {
        isImageLoaded &&
        <div className='flex gap-2 flex-wrap justify-center mt-10 text-sm'>
          <p onClick={() => setIsImageLoaded(false)} className='bg-transparent rounded-full cursor-pointer border border-zinc-900 text-black px-8 py-3 font-medium'>Generate Another</p>
          <a href={image} download className=' rounded-full cursor-pointer border border-zinc-900 bg-black text-white px-8 py-3 '>Download</a>
        </div>
      }
    </motion.form>
  )
}

export default Result