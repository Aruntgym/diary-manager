import { useEffect, useState } from 'react';
import './App.css';
import  Person  from './Components/Person'
import { Route , Routes } from 'react-router-dom';
import  Dashboard  from './Components/Dashboard';
import AddMemory from './Components/AddMemory';
import EditMemory from './Components/EditMemory';
import Nopage from './Components/Nopage';


function App() {
  const [memories, setMemories] = useState([]);
  useEffect (()=>{
  const getMemoryDetails = async()=>{
    const res = await fetch(`https://650034db18c34dee0cd47f40.mockapi.io/diary`,{
      method: "GET"
    });
  const data = await res.json();
  setMemories(data)
}
getMemoryDetails()
}, [])
  return (
    <div className='App'>

    <Routes>
      <Route exact path="/" element = {<Dashboard/>}/>

      <Route path="/person" element={<Person
      memories={memories}
      setMemories={setMemories}/>}
      />

      <Route path="/add-memories" element={<AddMemory
       memories={memories}
       setMemories={setMemories}/>}
      />

      <Route path="/edit/:id" element={<EditMemory
      memories={memories} 
      setMemories={setMemories}/>}/>

      <Route
      path="*"
      element={<Nopage/>}
      />

    </Routes>
    </div>
  )
}

export default App