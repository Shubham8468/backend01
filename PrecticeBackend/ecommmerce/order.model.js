import mongoose from 'mongoose'
const orderItemsSchema=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    quantity:{
        type:Number,
        required:true
    }
})
const orderSchema= new mongoose.Schema(
    {
      orderPrice:{
        type:Number,
        required:ture,
      },
      customr:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
      },
      orderItems :{
         type:[orderItemsSchema]
      },
      address:{
        type:String,
        required:true
      },
      status:{
        type:String,
        enum:["PENDING","CANCELL","DELIVERED"] ,// Ye hm stricty user ko de rhe hai ye yahi ho skta hia bus
        default:'PENDING',
      }

    }
    ,{timestamps:true})
    export const Order= mongoose.model('Order',orderSchema)