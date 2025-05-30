import express from 'express'
import authUser from '../middleware/auth.js'
import { generateImage } from '../controllers/imageController.js'

const imageRouter = express.Router()
imageRouter.post('/generate-img',authUser,generateImage)

export default imageRouter