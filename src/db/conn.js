const mongoose  = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/Registration", {
//     userNewUrlParser: true,
//     useUnifiedTopology: true,
//     // useCreateIndex: true
// }).then(()=>{
//     console.log("connection succesfully...");
// }).catch((err)=>{
//     console.log("Not connected");
// })
mongoose.connect("mongodb://127.0.0.1:27017/Registration",{
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connection Sucessfuly...");
}).catch((err)=>{
    console.log("Not Connected");
})