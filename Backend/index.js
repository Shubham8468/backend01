import express from 'express'
import 'dotenv/config'

const app=express();
const port=process.env.PORT || 3600;
app.get('/',(req,resp)=>{
    resp.send("Home page");
})
app.get('/twitter',(req,resp)=>{
    resp.send('shubh386')
})
app.get('/login',(req,resp)=>{
    resp.send("<h1>Please login at chai aur code</h1>")
})
app.listen(port,()=>{
    console.log(`Server start at port No:- ${port}`)
});