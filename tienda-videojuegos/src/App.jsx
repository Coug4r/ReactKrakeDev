import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import FormularioVideoJuego from "./components/FormularioVideoJuego"
import Videojuegos from "./components/TablaVideojuegos"
import NavBar from "./components/NavBar"
import NotFound from "./components/NotFound"
import AlertaNotificacion from "./components/AlertaNotificacion"

function App() {
  const [videojuegos, setVideojuegos] = useState(() => {
    const datosGuardados = localStorage.getItem("lista_videojuegos")
    return datosGuardados ? JSON.parse(datosGuardados) : []
  })

  const [mensajeToast, setMensajeToast] = useState("")

  useEffect(() => {
    localStorage.setItem("lista_videojuegos", JSON.stringify(videojuegos))
  }, [videojuegos])

  function manejarGuardar(videojuego) {
    const existe = videojuegos.find(v => v.id === videojuego.id)
    if (existe) {
      setVideojuegos(videojuegos.map(v => v.id === videojuego.id ? videojuego : v))
      setMensajeToast("Videojuego editado con éxito ✅")
    } else {
      setVideojuegos([...videojuegos, videojuego])
      setMensajeToast("Videojuego agregado con éxito 🎮")
    }
  }

  function manejarEliminar(id) {
    setVideojuegos(videojuegos.filter(v => v.id !== id))
    setMensajeToast("Videojuego eliminado con éxito 🗑️")
  }

  return (
    <Router>
      <NavBar />
      {mensajeToast && (
        <AlertaNotificacion mensaje={mensajeToast} onClose={() => setMensajeToast("")} />
      )}
      <Routes>
        <Route path="/" element={<Videojuegos juegos={videojuegos} onEliminar={manejarEliminar} />} />
        <Route path="/nuevo" element={<FormularioVideoJuego onGuardar={manejarGuardar} />} />
        <Route path="/editar" element={<FormularioVideoJuego onGuardar={manejarGuardar} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
