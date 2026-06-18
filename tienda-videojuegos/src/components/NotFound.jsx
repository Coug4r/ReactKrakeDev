import { Link } from "react-router-dom"


function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" className="notfound-button">Volver al inicio</Link>
    </div>
  )
}

export default NotFound
