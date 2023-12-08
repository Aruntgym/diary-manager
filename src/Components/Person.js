import React from 'react'
import Base from '../Base/Base'
import { useNavigate } from 'react-router-dom';
import { Button, Paper } from '@mui/material';

const Person = ({memories, setMemories})=> {
    // const [memoId, setMemoId] = useState("")
    const navigate = useNavigate()
    const deletememory = async (memoryId)=>{
        try {
            const res = await fetch(`https://650034db18c34dee0cd47f40.mockapi.io/diary/${memoryId}`,{
                method:"DELETE"
            });
            const data = await res.json()
            console.log(data)
            
                const removedmemory = memories.filter(memodata =>memodata.id !== memoryId);
                setMemories(removedmemory);
            
        } catch (error) {
            console.log(error)
        }     
    }
    // console.log(memories);
  return (
    <Base
    title={"Welcome to Diary Memories"}
    description={"This is 2023 Diary Memories"}
    >   
        <p>
            Please navigate to sweet memories that make you laugh and longing for<br/>Sad memory that make you feel worry<br/>Also create a good future memory in this Diary 2023 Memory Application
        </p>
            <div className='memo-collection'>
                {memories.map((memo, idx)=>(
                <Paper elevation={6} className='memo-card' key={idx}>
                    <h2>Date : {memo.date}</h2>
                    <p>Title : {memo.title}</p>
                    <p>Mood : {memo.mood}</p>
                    <p>Content : {memo.content}</p>
                    <p>Tags : {memo.tags}</p>
                    <p>Attachements : {memo.attachemtents}</p>
                    <div className='card-btn-group'>
                        <Button color="secondary" onClick={()=>navigate(`/edit/${memo.id}`)}>Edit</Button>
                        <Button color="error" onClick={()=>deletememory(memo.id)}>Delete</Button>
                    </div>
                    </Paper>
                ))}
            </div>

    </Base>
  )
}

export default Person