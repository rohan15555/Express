import React, { useEffect } from "react"
import { useState } from "react"



function App() {
  const  [formData,setFormData]=useState({
    name:"",
    email:"",
    phone:''
  });

  const [students,setstudents]=useState([])

  useEffect(()=>{
    fetch('http://localhost:3001/api/students')
    .then((response)=>response.json())
    .then((data)=>{setstudents(data)})
    .catch((error)=>{
      console.log("error:",error)
    })

  },[])
  
  

  const handleOnchange=(e)=>{
     setFormData({...formData, [e.target.name]:e.target.value})
  }
  const handleSubmit=async (e)=>{

      e.preventDefault();
      console.log(formData)
      
      try{
        const response =await fetch('http://localhost:3001/api/form',{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
          },
          body:JSON.stringify(formData),
        });
        const result =await response.json();
        console.log("server response:",result)
      }catch(error){
         console.log("error" ,error)
      }
      
      
  }
  

  return (
   <div>

    <ul>
      {
        students.map((student)=>(
          <li key={student.name}>{student.name}  {student.age}</li>
        ))
      }
  
    </ul>

    <form action="" onSubmit={handleSubmit}>
      <input  type="text" placeholder='Name'  name="name" onChange={handleOnchange} /><br />
      <input type="email"placeholder='Email'  name="email" onChange={handleOnchange}/><br />
      <input type="number" placeholder='Phone no' name="phone" onChange={handleOnchange} /><br />
      <button>Submit</button>
    </form>
    
   </div>
  )
}

export default App
