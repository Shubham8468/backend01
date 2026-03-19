import express from 'express'
import dotenv from 'dotenv'
import http  from 'http'
import path from 'path'
import {Server} from 'socket.io'
const app=express();
dotenv.config();
const server=http.createServer(app)
const io= new Server(server);





app.use(express.static(path.resolve('./public'))) // this is the method for not give 

const port= process.env.PORT ||4000;
//io connect
io.on('connection',(socket)=>{
    socket.on('msgFromFronted',(msg)=>{
     console.log(msg)//msg recived from Frondend
     //Now i send msg to frondend from Backend
     io.emit("mesFromBackend",`${socket.id} : ${msg}`)
    })
    console.log( `a user connected :${socket.id}`)//jb bhi connect hoga to user id 
})



server.listen(port,()=>{
    console.log(`server run on PORT : ${port}`)
})