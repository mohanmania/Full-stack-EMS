const jwt =require("jsonwebtoken")
const User = require("../models/User")
const verifyUser = async (req,res,next)=>{
    try {
        if(!req.headers.authorization){
            return res.status(401).json({success:false, error:"authorization header missing"});
        }
        const token = req.headers.authorization.split(' ')[1];
        if(!token){
            return res.status(404).json({success:false,error:"Token not provided"})
        }
        const decoded = jwt.verify(token,process.env.JWT_KEY)
        if(!decoded){
            return res.status(404).json({success:false,error:"token not valid"})
        }
        const user = await User.findById({_id:decoded}).select('-password')
        if(!user){
            return res.status(404).json({success:false,error:"User not found"})
        }
        req.user = user
        next()
    } catch (error) {
        return res.status(404).json({success:false,error:"server error"})

        
    }

}
module.exports = verifyUser