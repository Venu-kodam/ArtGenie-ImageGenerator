import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import razorpay from 'razorpay'
import transactionModel from '../models/transactionModel.js'
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.json({ success: false, message: "Missing details" })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })
        const user = await newUser.save()
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        res.json({ success: true, token, user: { name: user.name } })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.json({ success: false, message: "User doesn't exist" })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
            res.json({ success: true, token, user: { name: user.name } })
        }
        else {
            return res.json({ success: false, message: "Invalid Credentials" })
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

const credits = async (req, res) => {
    try {
        const { userId } = req.body
        const user = await userModel.findById(userId)
        res.json({ success: true, credits: user.credits, user: { name: user.name } })
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message })
    }
}

//razorpay instance
const razorpayInstance = new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
})

//razorpay payment
const razorpayPayment = async (req, res) => {
    try {
        const { userId, planId } = req.body
        
        const user = await userModel.findById(userId)
        if (!userId || !planId) {
            return res.json({ success: false, message: "Missing details" })
        }
        let credits, amount, date,plan
        switch (planId) {
            case 'Basic':
                plan = 'Basic'
                amount = 100
                credits = 10
                break;
            case 'Advanced':
                plan = 'Advanced'
                amount = 500
                credits = 50
                break;
            case 'Business':
                plan = 'Business'
                amount = 1000
                credits = 100
                break;
            default:
                return res.json({ success: false, message: "Plan not found!" })
        }
        date = Date.now()
        const transactionData = {
            userId, plan, amount, credits, date
        }

        const newTransaction = await transactionModel.create(transactionData)
        
        
        const options = {
            amount: amount * 100,
            currency:process.env.CURRENCY,
            receipt: newTransaction._id
        }
        
        await razorpayInstance.orders.create(options, (error, order) => {
            if (error) {
                console.log(error)
                return res.json({ success: false, message: error.message })
            }
            res.json({ success: true, order })
        })
    } catch (error) {
        console.log("payment error", error.message);
        res.json({ success: false, message: error.message })
    }
}


const verifyRazorpay = async (req, res) => {
    try {
        const { razorpay_order_id } = req.body
        const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id)

        if (orderInfo.status === 'paid') {
            const transactionData = await transactionModel.findById(orderInfo.receipt)
            if (transactionData.payment) {  //it means payment already verified
                return res.json({ success: false, message: "Payment failed" })
            }

            const userData = await userModel.findById(transactionData.userId)

            //updated credits --> user credits + credits after purchase
            const credits = userData.credits + transactionData.credits
            await userModel.findByIdAndUpdate(userData._id, { credits })  //update the credits
            await transactionModel.findByIdAndUpdate(transactionData._id, { payment: true }) //update the payment to true
            res.json({ success: true, message: "Credits Added" })
        }
        else{
            res.json({ success: false, message: "Payment failed" })
        }
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message })
    }
}
export { register, login, credits, razorpayPayment, verifyRazorpay }