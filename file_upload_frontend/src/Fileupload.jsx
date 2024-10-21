import {useState}from'react'

function Fileupload() {
    const [file,setFile] =useState(null)

    const handleFileChange =(e) =>{
        setFile(e.target.files[0])
    }
    const handleSubmit = async (e) => {
        e.preventDefult()

        if(!file) return

        const formData=new FormData()
        formData.append('file',file)

        try{
          const response=await fetch('/upload',{
            method:'POST',
            body:formData,
          })
          if(response.ok){
            alert('File upload successfully')

          }else{
            alert('File upload failed')
          }
          }catch(error){
            console.error('error uploading file:',error)
            alert('Error uploading file')
         
        }

    }

  return (
    <div>
        <h1>Upload page</h1>
      <form onSubmit={handleSubmit}>
       <input type="file" onChange={handleFileChange} />
    <button>Upload</button>
      </form>
    </div>
  )
}

export default Fileupload
