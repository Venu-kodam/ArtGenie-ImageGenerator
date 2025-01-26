import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import {assets} from '../assets/assets'
import { AppContext } from '../context/AppContext'
const Navbar = () => {
    const{user,navigate,setShowLogin,credits,logout} = useContext(AppContext)
    
    return (
        <div className='py-2 flex items-center justify-between'>
            <Link to='/'>
                <h1 className='font-semibold text-2xl sm:text-4xl logo my-2'>ArtGenie</h1>
            </Link>
            <div>
                {user?
                <div className='flex  items-center gap-2 sm:gap-4'>
                    <button onClick={()=>navigate('/buy')} className='flex items-center gap-2 px-2 sm:px-6 py-1.5 sm:py-3 rounded-full bg-black text-white hover:scale-105 transition-all duration-700'>
                        <img src={assets.credit_star} className='w-5' alt="" />
                        <p>Credits: {credits}</p>
                    </button>
                    <p className='text-gray-600 max-sm:hidden'>Hi, {user.name}</p>
                    <div className='relative group'>
                        <img src={assets.profile_icon} className='w-10 cursor-pointer drop-shadow' alt="" />
                        <div className='cursor-pointer absolute hidden group-hover:block top-0 right-0 z-5  pt-12'>
                            <ul className='list-none p-2 m-0 bg-white rounded-md border text-sm'>
                                <li onClick={logout} className='py-1 px-2 cursor-pointer pr-8'>Logout</li>
                            </ul>
                        </div>
                    </div>
                </div>
                :
                <div className='flex items-center gap-4'>
                    <p onClick={()=>navigate('/buy')} className='cursor-pointer'>Pricing</p>
                    <p onClick={()=>setShowLogin(true)} className='bg-black text-white px-6 py-2 sm:px-10 text-sm rounded-full cursor-pointer'>Login</p>
                </div>
                }
            </div>
        </div>
    )
}

export default Navbar