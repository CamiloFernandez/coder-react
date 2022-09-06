import './NavBar.css'
import {CartWidget} from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav__ul">
        <li className="nav__li">
          <Link to={'/'} className='nav__link'>Tienda</Link>
        </li>
        <li className="nav__li">
          <a className='nav__link' href="">Sobre Nosotros</a>
        </li>
        <li className="nav__li">
          <a className='nav__link' href="">Contactanos</a>
        </li>
        <CartWidget/>
      </ul>
    </nav>
  )
}
