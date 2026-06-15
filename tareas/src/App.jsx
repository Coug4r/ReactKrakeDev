import './App.css'
import {useState} from 'react'

function Tarea({tarea}) {
  const [completada, setCompletada] = useState(false);
  return (
    <div style={{border: '1px solid gray',
    padding:'10px',margin: '10px',
    textDecoration:completada ? 'line-through' : 'none',
    opacity: completada ? 0.5 : 1,
    cursor: 'pointer'}}
    onClick={()=> setCompletada(!completada)}>
      <p>{tarea}</p>
    </div>
  )
}


function App() {
  const [tareas, setTareas] = useState(['Comprar pan', 'Hacer ejercicio', 'Leer un libro']);
  const [nuevaTarea, setNuevaTarea] = useState('');
  function arregarTarea() {  
      if (nuevaTarea.trim() === '') {
        return;
      }else{
        setTareas([...tareas, nuevaTarea]);
        setNuevaTarea('')
      }
  }
  return (
    <div>
      <h1>Mi lista de Tareas</h1>
      <div>
        <input 
          type="text"
          value ={nuevaTarea}
          onChange ={(e)=> setNuevaTarea(e.target.value)}
          placeholder='Nueva tarea...' 
          style={{flex:1, padding: '8px'}}
        />

        <button onClick={arregarTarea} style={{padding: '10px'}}>Agregar Tarea</button>
      </div>
      {tareas.map((tarea,indice)=>{return <Tarea key={indice} tarea={tarea}/>})}
    </div>
  )
}

export default App
