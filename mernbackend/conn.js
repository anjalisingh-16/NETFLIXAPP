const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/netflix",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true
}).then(()=>
{
    console.log("Connection established")
}).catch((e)=>
{
    console.log("no connection");
})