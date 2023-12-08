import React, { useState } from 'react'
import Base from '../Base/Base'
import { useNavigate } from 'react-router-dom'
import { Button, TextField } from '@mui/material'

function AddMemory({memories, setMemories}) {
    const [date, setDate] = useState("")
    const [title, setTitle] = useState("")
    const [mood, setMood] = useState("")
    const [content, setContent] = useState("")
    const [tags, setTags] = useState("")
    const [attachemtents, setAttachments] = useState("")
    const navigate = useNavigate()

    const handleAddMemory = async ()=>{
      const newMemory = {
        date,
        title,
        mood,
        content,
        tags,
        attachemtents
      }
      try{
          const response = await fetch(`https://650034db18c34dee0cd47f40.mockapi.io/diary`, {
            method:"POST",
            body:JSON.stringify(newMemory),
            headers:{
                "Content-Type":"application/json"
            },
          })
        const data = await response.json();

        console.log(newMemory)
        setMemories([...memories, newMemory])
        navigate("/person")
      }catch(error){
        console.log(error)
      }
        
        }
  return (
    <Base
    title={"Add New Memory"}
    description={"Fill the Page to add new memory"}
    >
    <div className='form-group'>
        <h3>Add Memory</h3>

        <TextField label="Enter Date of Memory" variant="outlined" fullWidth sx={{ m: 1}}
        placeholder='Enter Date of Memory'
        type="number"
        value={date}
        onChange={(e)=>setDate(e.target.value)}
        />
        <TextField label="Enter Title of Memory" variant="outlined" fullWidth sx={{ m: 1}}
        placeholder='Enter Title of Memory' 
        type="text" 
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        />
        <TextField label="Enter Mood of Memory" variant="outlined" fullWidth sx={{ m: 1}}
        placeholder='Enter Mood of Memory' 
        type="text"
        value={mood}
        onChange={(e)=>setMood(e.target.value)}
        />
        <TextField label="Enter Content of Memory" variant="outlined" fullWidth sx={{ m: 1}}
        placeholder='Enter Content of Memory' 
        type="text" 
        value={content}
        onChange={(e)=>setContent(e.target.value)}
        />
        <TextField label="Enter Tags of Memory" variant="outlined" fullWidth sx={{ m: 1}}
        placeholder='Enter Tags of Memory' 
        type="text" 
        value={tags}
        onChange={(e)=>setTags(e.target.value)}
        />
        <TextField label="Enter Attachments of Memory" variant="outlined" fullWidth sx={{ m: 1}}
        placeholder='Enter Attachments of Memory' 
        type="text" 
        value={attachemtents}
        onChange={(e)=>setAttachments(e.target.value)}
        />
        <div>
        <Button onClick={handleAddMemory}variant='contained'>Add Memory</Button>
        </div>
    </div>
    </Base>
  )
}

export default AddMemory