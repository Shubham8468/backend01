import mongoose from 'mongoose'
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        lowercase:ture
    },
    userEmail:{
        type:String,
        required:true,
        unique:true
    },
    passwword:{
        type:String,
        required:true,
        
    }

},{timesteps:true})


export const User= mongoose.model('User',userSchema);
//Models:- this are the stended model prectices
//note :- model me jo ja rha ha DB me store hone vo hmesa capital me start hoga 
// aur jo export kr rhe hai vo bhi se hi hoga