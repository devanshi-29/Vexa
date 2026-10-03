const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({

    name:{
       required:true,
       type:String
    },

    email:{
       required:true,
       type:String,
       unique:true
    },

    password:{
      required:true,
       type:String
    },

    assistantName:{
       type:String
    },

    assistantImage:{
       type:String
    },

    history:[
        {type:String}
    ]


},{timestamp:true})

const userModel=mongoose.model("user",userSchema)

module.exports=userModel