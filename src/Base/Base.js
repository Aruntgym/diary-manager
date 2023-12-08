import { AppBar, IconButton, Toolbar, Typography} from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Base({title, description, children}) {
    const navigate = useNavigate()
  return (
    <div className='main-container'>
        <header>
            <nav>
            <AppBar position="static">
  <Toolbar variant="dense">

  <Typography sx={{ mr: 2 }}>
        Diary-Management
    </Typography>

    <IconButton edge="start" color="inherit" aria-label="Dashboard" onClick={()=>navigate("/")} sx={{ mr: 2 }}>
        Dairy 2023
    </IconButton>

    <IconButton edge="end" color="inherit" aria-label="memories"  onClick={()=>navigate("/person")} sx={{ mr: 2 }}>
        Memories
    </IconButton>

    <IconButton edge="end" color="inherit" aria-label="add memory" onClick={()=>navigate("/add-memories")} sx={{ mr: 2 }}>
        Add-Memory
    </IconButton>
   
  </Toolbar>
</AppBar>                
            </nav>
        </header>
        <main>
        <h1>{title}</h1>
        <h4>{description}</h4>
        <div className='contents'>
            {children}       
        </div>
        </main>
    </div>
  )
}

export default Base