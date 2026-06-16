import { useState } from "react"
import TablaVideojuegos from "./components/TablaVideojuegos"
import data from "./data/videojuegos"

function App() {
  // Estado inicial con los videojuegos
  const [juegos, setJuegos] = useState(data)

  // Función para editar
  const onEditar = (juego) => {
    console.log("Editar videojuego:", juego)
    // Aquí podrías abrir un formulario modal para editar
  }

  // Función para eliminar
  const onEliminar = (juego) => {
    console.log("Eliminar videojuego:", juego)
    setJuegos(juegos.filter((j) => j.id !== juego.id))
  }

  return (
    <div>
      <TablaVideojuegos
        juegos={juegos}
        onEditar={onEditar}
        onEliminar={onEliminar}
      />
    </div>
  )
}

export default App
