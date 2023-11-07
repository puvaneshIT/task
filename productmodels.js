const mongoose=require('mongoose')
const productSchema=mongoose.Schema(
    {
        name:{
            type:String,required:true
        },
        price:{
            type:Number,required:true
        },
        totalAmount:{
            type:Number,default:0
        },
        status:{
            type:String,required:true
        },
        year:{
            type:Number,required:true
        }

    
    },
    {
       timestamps:true
    }
    
)
const product=mongoose.model('muthu',productSchema,'muthu');
module.exports=product;

