const mongoose=require('mongoose')
const stockSchema=new mongoose.Schema({
    
    name:{type:String,required:true},
    
    price:{type:Number,required:true},
    profit:{type:Number},
   
    created_at:{type:Date,required:true
    }

})
const Stock=mongoose.model("Stock",stockSchema);
module.exports=Stock;