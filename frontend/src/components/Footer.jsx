import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex justify-between items-center mt-20 py-4'>
      <div className='flex gap-6 items-center '>
        <h1 className='font-semibold text-3xl sm:text-4xl text-gray-800'>ArtGenie</h1>
        <p className='text-gray-600 max-sm:hidden'>Copyright &copy; ArtGenie | All rights reserved</p>
      </div>
      <div className='flex gap-2'>
        <img src={assets.twitter_icon} alt=""  className='w-9 cursor-pointer'/>
        <img src={assets.instagram_icon} alt="" className='w-9 cursor-pointer'/>
        <img src={assets.facebook_icon} alt="" className='w-9 cursor-pointer'/>
      </div>
    </div>
  )
}

export default Footer