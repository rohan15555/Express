const express = require('express')
const app =express()
const port =3004

app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(port,()=>{
    console.log(`server is running on port${port}`)
})