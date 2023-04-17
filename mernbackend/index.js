const express=require("express");
const app=express();
const dotenv=require("dotenv");
const authRoute=require("./routes/auth.js");
const userRoute=require("./routes/users.js");
const movieRoute=require("./routes/movies.js");
const listRoute=require("./routes/lists.js");
// const CryptoJS=require("crypto.js");
require("./conn.js");
// const app=express();
dotenv.config();
const Port=process.env.PORT ||3000;
app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/movies",movieRoute);
app.use("/api/lists",listRoute);
app.listen(Port,()=>
{
    console.log(`Server is running at ${Port} `);
})