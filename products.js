const mongoose=require('mongoose')
const productSchema=mongoose.Schema(
    {
        totalAmount:{
            type:Number,
            required:true
    
        },
        name:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        status:{
            type:String,
            required:true
        },
        address:{
            type:Object,
            required:true
        }


    
    },
    {
       timestamps:true
    }
    
)
const product=mongoose.model('orders1',productSchema,'orders1');
module.exports=product;

