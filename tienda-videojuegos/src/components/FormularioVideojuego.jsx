import React, { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import "./FormularioVideojuego.css"

function FormularioVideoJuego({ onGuardar }) {
  const location = useLocation()
  const navigate = useNavigate()
  const videojuegoRecuperado = location.state?.videojuego || null

  const [titulo, setTitulo] = useState("")
  const [disponible, setDisponible] = useState(false)
  const [progreso, setProgreso] = useState(0)
  const [lanzamiento, setLanzamiento] = useState("")
  const [genero, setGenero] = useState("")
  const [plataforma, setPlataforma] = useState("")
  const [precio, setPrecio] = useState(0)
  const [sinopsis, setSinopsis] = useState("")
  const [calificacion, setCalificacion] = useState("")
  const [errores, setErrores] = useState({})

  useEffect(() => {
    if (videojuegoRecuperado) {
      setTitulo(videojuegoRecuperado.titulo || "")
      setGenero(videojuegoRecuperado.genero || "")
      setPlataforma(videojuegoRecuperado.plataforma || "")
      setLanzamiento(videojuegoRecuperado.lanzamiento || "")
      setPrecio(videojuegoRecuperado.precio ?? 0)
      setDisponible(videojuegoRecuperado.disponible ?? false)
      setProgreso(videojuegoRecuperado.progreso ?? 0)
      setSinopsis(videojuegoRecuperado.sinopsis || "")
      setCalificacion(videojuegoRecuperado.calificacion || "")
    }
  }, [videojuegoRecuperado])

  function validarFormulario() {
    const erroresActivos = {}
    if (!titulo.trim()) erroresActivos.titulo = "El título no puede estar vacío."
    if (sinopsis.length < 10 || sinopsis.length > 250) erroresActivos.sinopsis = "La sinopsis debe tener entre 10 y 250 caracteres."
    if (calificacion < 1 || calificacion > 100) erroresActivos.calificacion = "La calificación debe estar entre 1 y 100."
    if (lanzamiento && new Date(lanzamiento) > new Date()) erroresActivos.lanzamiento = "La fecha no puede ser futura."
    return erroresActivos
  }

  function ManejarGuardar(e) {
    e.preventDefault()
    const erroresActivos = validarFormulario()
    if (Object.keys(erroresActivos).length > 0) {
      setErrores(erroresActivos)
      return
    }

    const videojuego = {
      id: videojuegoRecuperado ? videojuegoRecuperado.id : Date.now(),
      titulo,
      genero,
      plataforma,
      lanzamiento,
      precio,
      disponible,
      progreso,
      sinopsis,
      calificacion
    }
    onGuardar(videojuego)
    navigate("/")
  }

  function ManejarCancelar() {
    navigate("/")
  }

  return (
    <div className="formulario-container">
      <h2>{videojuegoRecuperado ? "Editar" : "Agregar"} Videojuego</h2>
      <form>
        <label>Título:</label>
        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        {errores.titulo && <span className="error-mensaje">{errores.titulo}</span>}

        <label>Género:</label>
        <select value={genero} onChange={(e) => setGenero(e.target.value)}>
          <option value="">Seleccione un género</option>
          <option value="Aventura">Aventura</option>
          <option value="Acción">Acción</option>
          <option value="RPG">RPG</option>
          <option value="Deportes">Deportes</option>
        </select>

        <label>Plataforma:</label>
        <select value={plataforma} onChange={(e) => setPlataforma(e.target.value)}>
          <option value="">Seleccione una plataforma</option>
          <option value="PC">PC</option>
          <option value="PlayStation">PlayStation</option>
          <option value="Xbox">Xbox</option>
          <option value="Nintendo Switch">Nintendo Switch</option>
        </select>

        <label>Fecha de Lanzamiento:</label>
        <input type="date" value={lanzamiento} onChange={(e) => setLanzamiento(e.target.value)} />
        {errores.lanzamiento && <span className="error-mensaje">{errores.lanzamiento}</span>}

        <label>Precio:</label>
        <input type="number" step="0.01" min="0" value={precio} onChange={(e) => setPrecio(parseFloat(e.target.value))} />

        <label>Sinopsis:</label>
        <textarea value={sinopsis} onChange={(e) => setSinopsis(e.target.value)}></textarea>
        {errores.sinopsis && <span className="error-mensaje">{errores.sinopsis}</span>}

        <label>Calificación:</label>
        <input type="number" value={calificacion} onChange={(e) => setCalificacion(parseInt(e.target.value))} />
        {errores.calificacion && <span className="error-mensaje">{errores.calificacion}</span>}

        <label>
          Disponible:
          <input type="checkbox" checked={disponible} onChange={(e) => setDisponible(e.target.checked)} />
        </label>

        <label>Progreso:</label>
        <input type="range" min="0" max="100" value={progreso} onChange={(e) => setProgreso(parseInt(e.target.value))} />
        <span>{progreso}%</span>

        <button type="submit" onClick={ManejarGuardar}>Guardar</button>
        <button type="button" onClick={ManejarCancelar}>Cancelar</button>
      </form>
    </div>
  )
}

export default FormularioVideoJuego
