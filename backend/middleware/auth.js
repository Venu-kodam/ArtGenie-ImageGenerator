import jwt from 'jsonwebtoken'

const authUser = async (req, res, next) => {
    const { token } = req.headers
    if (!token) {
        return res.json({ success: false, message: "Not authorized to login" })
    }
    try {
        //decode the token
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)
        if (tokenDecode.id) {      //if id is available, add id in req.body
            req.body.userId = tokenDecode.id
        }
        else {
            return res.json({ success: false, message: "Not authorized to login" })
        }
        next()
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}
export default authUser