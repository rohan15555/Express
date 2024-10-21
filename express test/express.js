const express =require('express')
const app=express()
const port=3005

app.get('/',(req,res)=>{
    res.send('hello new')
})

app.listen(port,()=>{
    console.log(`server is running on port${port}`)
})