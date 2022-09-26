import './NavBar.css'
import {CartWidget} from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { Dropdown } from '../Dropdown/Dropdown'

export const NavBar = () => {
  return (
    <nav className="nav">
      <Dropdown/>
      <CartWidget/>
    </nav>
  )
}
