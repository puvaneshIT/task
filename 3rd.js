const express=require('express')
const mongoose=require('mongoose')
const product = require('./models/productmodels')
const app=express()

app.use(express.json())

app.get('/',(req,res)=>
{
    res.send("hello world")
})
app.get('/blog',(req,res)=>
{
    res.send('helo blog')
})
app.get('/muthu',async(req,res)=>{
    try{
        const products=await product.find({}).sort({ title: 1 }).limit(3);
        res.status(200).json(products)

    }
    catch(error){

        res.status(500).json({message:error.message})
    }

})
app.post('/muthu',async(req,res)=>{
    try{
        const product=await product.create(req.body)
        res.status(200).json(product);

    }
    catch(error){
    console.log(error.message)
    res.status(500).json({message:error.message})
    }
})
mongoose.set("strictQuery",false)
mongoose.connect('mongodb://127.0.0.1:27017/puvan')
.then(()=>
{
    console.log('connected to db')
    app.listen(3000,()=>
{
    console.log("server is running on port 3000")
});

   
})
.catch((error)=>
{
    console.log(error)
})