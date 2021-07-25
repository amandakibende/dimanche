const mongoose = require("mongoose");
const Bag = require("../model/bag");

const bags =[
    {brand: "Jacquemus", color: "Dark brown", price: 625},
    {brand: "Dior", color:"black", price: 2500},
    {brand: "Brandon Blackwood", color: "green", price: 143},
];


mongoose.connect("mongodb:localhost/dimanche", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.then(() =>{
    console.log("Connected to the database, hunnay!")
})
.catch((error)=>{
    console.error("Error connecting", error);
})