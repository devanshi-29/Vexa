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

}catch(err){
        console.log(err)
    }

    
}