const jwt=require("jsonwebtoken");
function verify(req,resp,next){
const authHeader=req.headers.token;
if(authHeader)
{
    const token=authHeader.split(" ")[1];
    jwt.verify(token,process.env.SECRET_KEY,(err,user)=>
    {
  if(err) resp.status(403).json("Token is not valid");
  req.user=user;
  next();
    })
}
else{
 return resp.status(401).json("You are not authenticated");
}
}
module.exports=verify;