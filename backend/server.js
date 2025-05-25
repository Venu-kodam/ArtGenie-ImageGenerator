import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/DB.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'

const PORT = process.env.PORT || 4000

const app  = express()

app.use(express.json())
app.use(cors())
connectDB()

//api end points
app.get('/',(req,res)=>res.send('API working'))
app.use('/api/user',userRouter)
app.use('/api/image',imageRouter)

app.listen(PORT,()=>console.log(`Server started on http://localhost:${PORT}`))