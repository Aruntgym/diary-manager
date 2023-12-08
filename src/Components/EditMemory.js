import React, { useEffect, useState } from 'react'
import Base from '../Base/Base'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, TextField } from '@mui/material'

function EditMemory({memories,  setMemories}) {
  const {id} = useParams();
  const navigate = useNavigate()
    const [idx, setIdx] = useState("")
    const [date, setDate] = useState("")
    const [title, setTitle] = useState("")
    const [mood, setMood] = useState("")
    const [content, setContent] = useState("")
    const [tags, setTags] = useState("")
    const [attachemtents, setAttachments] = useState("")

    useEffect(()=> {
      const memoryData = memories.find(memo => memo.id === id);
      if(memoryData){
      setIdx(memoryData.id)
      setDate(memoryData.date)
      setTitle(memoryData.title)
      setMood(memoryData.mood)
      setContent(memoryData.content)
      setTags(memoryData.tags)
      setAttachments(memoryData.attachemtents)
    }
    },[id, memories])

    const updateMemory = async () =>{
      try {
        const updatedMemory = {
          id,
          date,
          title,
          mood,
          content,
          tags,
          attachemtents
        }
        const response = await fetch(`https://650034db18c34dee0cd47f40.mockapi.io/diary/${id}`, {
          method:"PUT",
          body:JSON.stringify(updatedMemory),
          headers:{
              "Content-Type":"application/json"
          }
        });

      const data = await response.json()
      console.log(data)
      //fetch update the memory
      const memoryIndex = memories.findIndex((memo)=>memo.id === id);
      console.log(memoryIndex)

     
      // console.log(updatedMemory)
      memories[memoryIndex] = updatedMemory
      setMemories([...memories])
      navigate("/person");
    }
      catch(error){
        console.log(error)
      }
      
    }
  return (
    <Base
    title={"Edit New Memory"}
    description={"Fill the Page to Edit new memory"}>
    <div className='form-group'>
        <h3>Update Memory</h3>
        <TextField label="Id" variant="outlined" fullWidth sx={{ m: 1}}
        placeholder='Enter Id of Memory' 
        type="number"
        value={idx} 
        onChange={(e)=>setIdx(e.target.value)}
        />
        <TextField label="Enter Date of Memory" variant="outlined" fullWidth sx={{ m: 1}}
        placeholder='Enter Date of Memory'
        type="text"
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
        <Button onClick={updateMemory}variant='contained'>Update Memory</Button>
        </div>
    </div>
    </Base>
  )
}

export default EditMemory