import express from 'express'
import { register,login, credits, razorpayPayment, verifyRazorpay } from "../controllers/userController.js"
import authUser from '../middleware/auth.js'

const userRouter = express.Router()
userRouter.post('/register',register)
userRouter.post('/login',login)
userRouter.get('/credits',authUser,credits)
userRouter.post('/payment',authUser,razorpayPayment)
userRouter.post('/verify',verifyRazorpay)

export default userRouter