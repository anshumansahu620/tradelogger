const express=require("express")

const mongoose=require("mongoose")
const Stock=require("./models/Stock")
const User=require("./models/User")
const app=express();
const port=3000;
const path=require("path")
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
async function main(){
    mongoose.connect("mongodb://127.0.0.1:27017/tradelogger") 
}
main().then(
    (res)=>{
        console.log("connected sucessfully to server")
    }
).catch(
    (res)=>{
        console.log("error in connecting to it")
    }
)


//display stocks


app.get('/stocks', async (req, res) => {
    try {
        let stock = await Stock.find();
        res.render('stocks.ejs', { stock }); // Renders the chats.ejs file
        console.log(stock)
    } catch (error) {
        res.status(500).send(error.message);
    }
});



//add stocks
app.get("/add",(req,res)=>{
    res.render("add.ejs")
})


app.post("/stocks",(req,res)=>{
    let {name,price,profit}=req.body;
    let stock=new Stock({
        name:name,
        price:price,
        profit:profit,
        created_at:new Date(),
    })
    stock.save().then((res)=>{
        console.log("submitted sucessfully")
    }).catch((res)=>{
        console.log("error"+res);
    })
    res.redirect("/stocks")
})
app.post("/login",(req,res)=>{
    let {username,Password}=req.body;
    
})


app.get("/",(req,res)=>{
    res.render("homepage.ejs")
    
})
app.get("/login",(req,res)=>{
    res.render("login.ejs")
})
app.get("/createaccount",(req,res)=>{
    res.render("createaccount.ejs")
})
app.listen(port,(req,res)=>{
    console.log("http://localhost:3000/")
    
})