import { Link } from "react-router-dom"
import "./navBar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-logo">GestorApp</span>
      <ul className="navbar-links">
        <li>
          <Link to="/">Empleados</Link>
        </li>
        <li>
          <Link to="/nuevo">Nuevo Empleado</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
