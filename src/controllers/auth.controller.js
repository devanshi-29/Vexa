const getToken = require("../config/token")
const userModel=require("../models/user.model")

async function signUp(req,res){

    const {name,email,password}=req.body

    try{

    const isUserAlreadyExist = await userModel.findOne({email})
    if(isUserAlreadyExist){
        return res.status(409).json({
            message:"User already exists!"
        })
    }

    if(password.length<6){
        return res.status(409).json({
            message:"Password must be atleast 6 characters!"
        })
    }

    const hash= await bcrypt.hash(password,10)

    const user=await userModel.create({
        username,email,password:hash
    })

    const token=await getToken(user_.id)
    res.cookie("token",token,{
        httpOnly:true,
        maxAge:7*24*60*60*1000,
        sameSite:"strict",
        secure:false
    })

    return res.status(201).json(user)

}catch(err){
       return res.status(500).json({message:`Signup Error ${error}`})
    }
    
}

async function login(req,res){
    const {email,password}=req.body

    try{

    const user = await userModel.findOne({email})
    if(!user){
        return res.status(409).json({
            message:"User does not exists!"
        })
    }

    const isMatch=await bcrypt.compare(password,user.password)

    if(!isMatch){
         return res.status(409).json({
            message:"Incorrect Password!"
        })
    }

    const token=await getToken(user_.id)
    res.cookie("token",token,{
        httpOnly:true,
        maxAge:7*24*60*60*1000,
        sameSite:"strict",
        secure:false
    })

    return res.status(200).json(user)

}catch(err){
       return res.status(500).json({message:`Login Error ${error}`},
       )
    }
}

async function logout(req,res){
    try{
        res.clearCookie("token")
        return res.status(200).json({message:"Logged out Successfully"})
    }catch(error){
        return res.status(500).json({message:`Logout Error ${error}`},
       )
    }
}

module.exports={signUp,login,logout}