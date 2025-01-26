import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'
import axios from 'axios'
import {toast} from 'react-toastify'
const BuyCredits = () => {
  const { user,navigate,setShowLogin,backendUrl,loadCreditsData,token } = useContext(AppContext)

  const initPay = async(order)=>{
    const options = {
      key:import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount:order.amount,
      currency:order.currency,
      name:"Credits payment",
      description:"Credits payment",
      order_id:order.id,
      receipt:order.receipt,
      handler:async(response)=>{
        console.log(response)

        //verify the payment
        try {
          const{data} = await axios.post(backendUrl+'/api/user/verify',response,{headers:{token}})
          if(data.success){
            loadCreditsData()      //after verifying load the credits then navigate to home
            navigate('/')
            toast.success('Credits Added')
          }
        } catch (error) {
          console.log(error.message)
        }
      }
    }
    const rzp = new window.Razorpay(options)
    rzp.open()
  }
  
  const PaymentRazorpay = async(planId)=>{
    try {
      if(!user){
        setShowLogin(true)
      }
      const {data} = await axios.post(backendUrl+'/api/user/payment',{planId},{headers:{token}})
      if(data.success){
        initPay(data.order)
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <motion.div className='min-h-[80vh] mb-10 text-center pt-12'
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <button className='border border-gray-400 py-2 px-10 rounded-full mb-6 font-medium'>Our Plans</button>
      <h1 className='text-center text-3xl font-medium mb-4 sm:mb-8'>Choose the plan</h1>
      <div className='flex flex-wrap gap-8 text-left justify-center '>
        {
          plans.map((plan, index) => (
            <div key={index} className='bg-white drop-shadow-sm border rounded-lg max-w-80 p-8 text-gray-600 hover:scale-105 transition-all duration-500 cursor-pointer'>
              <img src={assets.logo_icon} width={40} alt="" />
              <p className='font-semibold text-black mt-3 mb-1'>{plan.id}</p>
              <p className='text-sm'>{plan.desc}</p>
              <p className='mt-4'>
                <span className='text-3xl font-medium text-black'>₹{plan.price}</span>/ {plan.credits} Credits
              </p>
              <button onClick={()=>PaymentRazorpay(plan.id)} className='text-white bg-black rounded-md mt-8 text-sm w-full py-2.5 min-w-52'>{user ? 'Purchase' : 'Get Started'}</button>
            </div>
          ))
        }
      </div>
    </motion.div>
  )
}

export default BuyCredits