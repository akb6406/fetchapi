const mongoose= require("mongoose");

mongoose.connect("mongodb://localhost:27017/Olympicapi"
).then(() =>{
    console.log("cnnection sucessfully")
}).catch((err) =>{
    console.log(err)
})