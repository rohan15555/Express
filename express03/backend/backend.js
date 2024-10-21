var express=require('express')
var cors =require("cors")
var app=express()
var port=3001

app.use(cors());
app.use(express.json());

const students=[
    {name:"std1",age:20,place:"kkd"},
    {name:"std2",age:21,place:"kkgg"},
    {name:"std3",age:22,place:"kkdtrt"},
    {name:"std4",age:23,place:"kkdhghh"},
]

app.post('/api/form',(req,res)=>{
    console.log('from data recieved : ' ,req.body)
    res.json({message:'form data recived successfully',data: req.body})
})

app.get('/api/students',(req,res)=>{
   res.json(students)
})

app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);
})