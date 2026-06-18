import { useState, useEffect } from "react"
import TablaVideojuegos from "./components/TablaVideojuegos"
import data from "./data/videojuegos"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import FormularioVideojuego from "./components/FormularioVideojuego"
import NavBar from "./components/Navbar"
import NotFound from "./components/NotFound"
import AlertaNotificacion from "./components/AlertaNotificacion"

function App() {
  const [juegos, setJuegos] = useState(() => {
  const datosGuardados = localStorage.getItem("lista_videojuegos")
  if (datosGuardados) {
    const parsed = JSON.parse(datosGuardados)
    // Si falta sinopsis, usa el dataset original
    return parsed.every(j => j.sinopsis) ? parsed : data
  }
  return data
  })
  const [mensaje, setMensaje] = useState("")

  useEffect(() => {
    localStorage.setItem("lista_videojuegos", JSON.stringify(juegos))
  }, [juegos])

  function agregarJuego(nuevoJuego) {
    setJuegos([...juegos, nuevoJuego])
    setMensaje("Juego agregado con éxito")
  }

  function eliminarJuego(id) {
    const filtrados = juegos.filter((juego) => juego.id !== id)
    setJuegos(filtrados)
    setMensaje("Juego eliminado con éxito")
  }

  function editarJuego(juegoEditado) {
    const actualizados = juegos.map((juego) => juego.id === juegoEditado.id ? juegoEditado : juego)
    setJuegos(actualizados)
    setMensaje("Juego editado con éxito")
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
      {mensaje && <AlertaNotificacion mensaje={mensaje} onClose={() => setMensaje("")} />}
      <Routes>
        <Route path="/" element={<TablaVideojuegos juegos={juegos} onEliminar={eliminarJuego} />} />
        <Route path="/nuevo" element={<FormularioVideojuego onGuardar={manejarGuardar} />} />
        <Route path="/editar" element={<FormularioVideojuego onGuardar={manejarGuardar} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
