import { useState } from "react"
import TablaVideojuegos from "./components/TablaVideojuegos"
import data from "./data/videojuegos"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import FormularioVideojuego from "./components/FormularioVideojuego"
import NavBar from "./components/Navbar"
import NotFound from "./components/NotFound"

function App() {
  // Estado inicial con los videojuegos
  const [juegos, setJuegos] = useState(data)

  function agregarJuego(nuevoJuego) {
    setJuegos([...juegos, nuevoJuego])
  }

  function eliminarJuego(id) {
    const filtrados = juegos.filter((juego) => juego.id !== id)
    setJuegos(filtrados)
  }

  function editarJuego(juegoEditado) {
    const actualizados = juegos.map((juego) => {
      if (juego.id === juegoEditado.id) {
        return juegoEditado
      } else {
        return juego
      }
    })
    setJuegos(actualizados)
  }

  function manejarGuardar(juego) {
    const existe = juegos.find((j) => j.id === juego.id)
    if (existe) {
      editarJuego(juego)
    } else {
      agregarJuego(juego)
    }
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <TablaVideojuegos
              juegos={juegos}
              onEliminar={eliminarJuego}  
            />
          }  
        />
        <Route
          path="/nuevo"
          element={
            <FormularioVideojuego
              onGuardar={manejarGuardar}
            />
          }
        />
        <Route
          path="/editar"
          element={
            <FormularioVideojuego
              onGuardar={manejarGuardar}
            />
          }
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
