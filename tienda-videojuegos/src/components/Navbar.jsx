import {Link} from 'react-router-dom'
import "./NavBar.css"
function NavBar() {
  return (
    <nav>
      <h1>GestorApp</h1>
      <ul>
        <li><Link to="/">Catalogo</Link></li>
        <li><Link to="/nuevo">Nuevo Videojuego</Link></li>
      </ul>
    </nav>
  )
}
export default NavBar