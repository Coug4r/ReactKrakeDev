import { useNavigate } from "react-router-dom"
import BarraDeProgreso from "./BarraDeProgreso"
import "./TablaVideojuegos.css"
function Videojuegos({ juegos, onEliminar }) {
  const navigate = useNavigate()
  function manejarEditar(vid){
    navigate('/editar',{state:{videojuego: vid}})
  }
  return (
    <div className="videojuegos-container">
      <h2>Catálogo de Videojuegos</h2>
      <div className="tabla-wrapper">
        <table className="videojuegos-table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Género</th>
              <th>Plataforma</th>
              <th>Lanzamiento</th>
              <th>Precio</th>
              <th>Disponible</th>
              <th>Progreso</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {juegos.map((juego) => (
              <tr key={juego.id}>
                <td>{juego.titulo}</td>
                <td>{juego.genero}</td>
                <td>{juego.plataforma}</td>
                <td>{juego.lanzamiento}</td>
                <td>${juego.precio}</td>
                <td>{juego.disponible ? "Sí" : "No"}</td>
                <td>
                  <BarraDeProgreso progreso={juego.progreso}></BarraDeProgreso>
                </td>
                <td>
                  <button onClick={() => manejarEditar(juego)}>Editar</button>
                  <button onClick={() => onEliminar(juego.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Videojuegos
