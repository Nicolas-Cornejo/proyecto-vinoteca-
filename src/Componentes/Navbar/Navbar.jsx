
import CartWidget from '../CartWidget/CartWidget'
import "./Navbar.css"
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header >
      <Link to="/">
        <h1>Cosecha Divina</h1>
      </Link>
        <nav>
            <ul>
            {/* <li><NavLink to="/">Todos</NavLink></li> */}
                <li><NavLink to="/categoria/tintos">Vinos tintos</NavLink></li>
                <li><NavLink to="/categoria/blancos">Vinos blancos</NavLink></li>
                <li><NavLink to="/categoria/espumosos">Vinos Espumosos</NavLink></li>
            </ul>
        </nav>
        <CartWidget></CartWidget>
    </header>
  )
}
export default Navbar


