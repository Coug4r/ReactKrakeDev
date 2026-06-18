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

    useEffect(() => {
        if (videojuegoRecuperado) {
            setTitulo(videojuegoRecuperado.titulo || "")
            setGenero(videojuegoRecuperado.genero || "")
            setPlataforma(videojuegoRecuperado.plataforma || "")
            setLanzamiento(videojuegoRecuperado.lanzamiento || "")
            setPrecio(videojuegoRecuperado.precio ?? 0)
            setDisponible(videojuegoRecuperado.disponible ?? false)
            setProgreso(videojuegoRecuperado.progreso ?? 0)

        } else {
            setTitulo("")
            setGenero("")
            setPlataforma("")
            setLanzamiento("")
            setPrecio(0)
            setDisponible(false)
            setProgreso(0)
        }
    }, [videojuegoRecuperado])

    function ManejarGuardar() {
        const videojuego = {
            id: videojuegoRecuperado ? videojuegoRecuperado.id : Date.now(),
            titulo,
            genero,
            plataforma,
            lanzamiento,
            precio,
            disponible,
            progreso
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
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

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
        <input
          type="date"
          value={lanzamiento}
          onChange={(e) => setLanzamiento(e.target.value)}
        />

        <label>Precio:</label>
        <input
          type="number"
          step="0.01"
          min="0"
          value={precio}
          onChange={(e) => setPrecio(parseFloat(e.target.value))}
        />

        <label>
          Disponible:
          <input
            type="checkbox"
            checked={disponible}
            onChange={(e) => setDisponible(e.target.checked)}
          />
        </label>

        <label>Progreso:</label>
        <input
          type="range"
          min="0"
          max="100"
          value={progreso}
          onChange={(e) => setProgreso(parseInt(e.target.value))}
        />
        <span>{progreso}%</span>

        <button type="button" onClick={ManejarGuardar}>Guardar</button>
        <button type="button" onClick={ManejarCancelar}>Cancelar</button>
      </form>
    </div>
    )
}
export default FormularioVideoJuego