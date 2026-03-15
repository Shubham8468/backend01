import express from 'express'
import cors from 'cors'

const app= express();
const port = process.env.PORT || 4600

app.use(cors())

const joke=[{
    id:1,
    title:'A joke',
    contend:"this is a joke"
},
{
    id:2,
    title:"A joke",
    contend:"this is a joke"
},
{
    id:3,
    title:"A joke",
    contend:'this is a joke'
},
{
    id:4,
    title:"A joke",
    contend:"this is a joke"
},
{
    id:5,
    title:"A joke",
    contend:"this is a joke"
}]


app.get('/',(req,resp)=>{
    resp.send('server is Running')
})
app.get('/jokes',(req,resp)=>{
    resp.json(joke)
})
app.listen(port,()=>{
    console.log(`server run at ${port} port`)
}) 