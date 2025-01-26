import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
const Login = () => {
    const [currentState, setCurrentState] = useState('Sign Up')
    const{setShowLogin,setToken,setUser,backendUrl} = useContext(AppContext)

    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')


    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            if(currentState==='Login'){    //api-endpoint for login 
                const{data} = await axios.post(backendUrl + "/api/user/login",{email,password})
                if(data.success){
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem('token',data.token)
                    setShowLogin(false)
                }
                else{
                    console.log(data.message)
                }
            }
            else{                   //api-endpoint for registration
                const{data} = await axios.post(backendUrl + "/api/user/register",{name,email,password})
                if(data.success){
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem('token',data.token)
                    setShowLogin(false)
                }
                else{
                    console.log(data.message)
                }
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    //handle scroll behaviour for login form
    useEffect(()=>{
        document.body.style.overflow = 'hidden'
        return ()=>{
            document.body.style.overflow = 'unset'
        }
    },[])

    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
            <form onSubmit={handleSubmit} className='relative bg-white p-10 rounded-xl text-slate-500'>
                <h1 className='text-center text-2xl text-neutral-700 font-medium'>{currentState}</h1>
                {
                    currentState !== 'Login' &&
                    <div className='border px-6 py-2 flex items-center gap-3 rounded-full mt-5'>
                        <img src={assets.profile_icon} className="ml-[-3px] w-6" alt="" />
                        <input onChange={(e)=>setName(e.target.value)} value={name} type="text"  placeholder='Full Name' className='outline-none text-sm' required />
                    </div>
                }
                <div className='border px-6 py-2 flex items-center gap-3 rounded-full mt-5'>
                    <img src={assets.email_icon} className="" alt="" />
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='Email' className='outline-none text-sm' required />
                </div>
                <div className='border px-6 py-2 flex items-center gap-3 rounded-full mt-5'>
                    <img src={assets.lock_icon} className="" alt="" />
                    <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='Password' className='outline-none text-sm' required />
                </div>
                <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot password?</p>
                <button className='bg-black w-full text-white py-2 rounded-full'>{currentState === 'Login' ? "Login" : 'Sign Up'}</button>
                {
                    currentState === 'Login' ?
                        <p className='mt-5 text-center'>Don't have an account?
                            <span onClick={()=>setCurrentState('Sign Up')} className='text-blue-600 cursor-pointer'> Sign Up</span>
                        </p>
                        :
                        <p className='mt-5 text-center'>Already have an account?
                            <span onClick={()=>setCurrentState('Login')} className='text-blue-600 cursor-pointer'> Login</span>
                        </p>
                }
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" className='absolute top-8 right-6 cursor-pointer'/>
            </form>
        </div>
    )
}

export default Login