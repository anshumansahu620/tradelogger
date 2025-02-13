const mongoose=require('mongoose')
const Stock=require('./models/Stock.js')
async function main(){
    mongoose.connect("mongodb://127.0.0.1:27017/tradelogger")
}
main().then((res)=>{console.log("connected to tradelogger ")}).catch((res)=>{
    console.log("failed")
})
let stockData = [
        {
            name: "Apple Inc.",
            price: 175.50,
            profit: 15.25,
            created_at: new Date("2024-02-01T10:00:00Z")
        },
        {
            name: "Tesla Inc.",
            price: 680.75,
            profit: 25.40,
            created_at: new Date("2024-02-02T12:30:00Z")
        },
        {
            name: "Amazon",
            price: 3200.00,
            profit: 150.75,
            created_at: new Date("2024-02-03T09:15:00Z")
        },
        {
            name: "Google",
            price: 2800.30,
            profit: 120.10,
            created_at: new Date("2024-02-04T11:45:00Z")
        },
        {
            name: "Microsoft",
            price: 305.20,
            profit: 30.90,
            created_at: new Date("2024-02-05T08:20:00Z")
        }
    ];
    
Stock.insertMany(stockData).then(
    (res)=>{
        console.log(stockData)
    }
).catch(
    (res)=>{
        console.log("error")

    }
)
    
 