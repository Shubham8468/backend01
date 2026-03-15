import express from 'express'
import dotenv from 'dotenv'
import http  from 'http'
import path from 'path'
import {Server} from 'socket.io'
const app=express();
dotenv.config();
const server=http.createServer(express)
const io= new Server(server);





app.use(express.static(path.resolve('./public'))) // this is the method for not give 

const port= process.env.PORT ||4000;
app.get('/',(req,resp)=>{
    
   resp.sendFile(path.join('/index.html'))
    
})
app.listen(port,()=>{
    console.log(`server run on PORT : ${port}`)
})