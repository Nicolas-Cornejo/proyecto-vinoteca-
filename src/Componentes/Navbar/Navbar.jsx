
import CartWidget from '../CartWidget/CartWidget'
import "./Navbar.css"

const Navbar = () => {
  return (
    <header >
        <h1>Cosecha Divina</h1>
        <nav>
            <ul>
                <li>Inicio</li>
                <li>Vinos Tintos</li>
                <li>Vinos Blancos</li>
            </ul>
        </nav>
        <CartWidget></CartWidget>
        
    </header>
  )
}
export default Navbar