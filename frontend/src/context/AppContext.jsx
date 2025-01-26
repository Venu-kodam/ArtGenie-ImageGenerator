import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AppContext = createContext()
const AppContextProvider = ({children})=>{
    const[user,setUser] = useState(null)
    const[showLogin,setShowLogin] = useState(false)
    const navigate = useNavigate()
    
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const[token,setToken] = useState(localStorage.getItem('token'))
    const[credits,setCredits] = useState(false)

    //function to load the credits
    const loadCreditsData = async()=>{
        try {
            const {data} = await axios.get(backendUrl+'/api/user/credits',{headers:{token}})
            if(data.success){
                setCredits(data.credits)
                setUser(data.user)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    //function to logout
    const logout =()=>{
        localStorage.removeItem('token')
        setToken('')
        setUser(null)
    } 

    const generateImage = async(prompt)=>{
        try {
            const {data} = await axios.post(backendUrl+'/api/image/generate-img',{prompt},{headers:{token}})
            if(data.success){
                loadCreditsData()
                return data.resultImage
            }
            else{
                console.log(data.message)
                loadCreditsData()
                if(data.credits ===0){
                    navigate('/buy')
                }
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(()=>{
        if(token){
           loadCreditsData() 
        }
        
    },[token])
    const value = {
        user,setUser,navigate,showLogin,setShowLogin,backendUrl,
        token,setToken,credits,setCredits,loadCreditsData,logout,
        generateImage
    }
    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider