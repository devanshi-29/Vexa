const jwt=require("jsonwebtoken")


const getToken =async (userId)=>{
   try{
       const token=await jwt.sign(userId,process.env.SECRET_KEY,{expiresIn:"10d"})
       return token
    }
   catch(error){
      console.log(error)
   }
}

module.exports=getToken

