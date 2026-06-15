import { useState } from 'react'
import './App.css'

function Pelicula({titulo}){
  const [favorito, setFavorito] = useState(false)
  return(
    <div style={{border: '1px solid gray',
    padding:'10px',margin: '10px',
    cursor: 'pointer'}}
    onClick={()=> setFavorito(!favorito)}
    >{titulo} {favorito? "⭐":''}</div>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const [nuevaPelicula, setNuevaPelicula] = useState('');
  const [peliculas, setPeliculas] = useState(['DJango', 'Star Wars', 'Rambo', 'Como Entrenar a Tu Dragon']);
  function agregarPeli(){
    if (nuevaPelicula.trim() === ''){
      return;
    }else{
      setPeliculas([...peliculas, nuevaPelicula]);
      setNuevaPelicula('');
    }
  }
  return (
    <div>
      <h1 style={{fontFamily: 'Arial Black, sans-serif',fontSize: '3rem',
      textAlign: 'center',
      color: '#ff4444',
      textShadow: '2px 2px 6px rgba(0,0,0,0.5)',
      margin: '20px 0',
      letterSpacing: '3px',
      borderBottom: '4px solid #ff4444',
      paddingBottom: '10px'}}>Catalogo Peliculas
      </h1>
      <input 
          type="text"
          value ={nuevaPelicula}
          onChange ={(e)=> setNuevaPelicula(e.target.value)}
          placeholder='Nueva pelicula...' 
          style={{flex:1, padding: '8px'}}
        />
        <button onClick={agregarPeli} style={{padding: '10px', margin: '10px'}}>Agregar Pelicula</button>
    <div style={{
    fontFamily: 'Georgia, serif',
    fontSize: '1.8rem',
    color: '#f7f5f5',
    margin: '10px 0',
    textAlign: 'center',
    textShadow: '1px 1px 4px rgba(0,0,0,0.3)',
    letterSpacing: '1px'}}>
      {peliculas.map((pelicula, indice)=>{return(<Pelicula titulo={pelicula}></Pelicula>)})}
    </div>
    </div>
  )
}

export default App
