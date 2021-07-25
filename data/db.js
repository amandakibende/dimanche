const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/dimanche", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify: false,
})
.then(()=>{
    console.log("Connecting to mango database !")
})
.catch((error)=>{
    console.error("Error connecting to the database", error)
});