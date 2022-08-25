import './ItemListContainer.css'
import { ItemCount } from '../ItemCount/ItemCount'
import carritoFachero from '../../assets/img/carritoFachero.jpg'
import carritoCrio from '../../assets/img/carritoCrio.jpg'
import carritoBatman from '../../assets/img/carritoBatman.jpg'

export const ItemListContainer = (props) => {
  return (
    <div className='item-list-container'>
      <h1 className="title-list"> {props.title} </h1>
      <ul className='item-list'>
        <li>
          <ItemCount img={carritoFachero} alt='Carrito fachero' title='Carrito Fachero' stock={10} />
        </li>
        <li>
          <ItemCount img={carritoCrio} alt='Carrito con crio' title='Carrito con Crio' stock={7} />
        </li>
        <li>
          <ItemCount img={carritoBatman} alt='Carrito Batman' title='Carrito Batman' stock={4} />
        </li>
      </ul>
    </div>
  )
}
