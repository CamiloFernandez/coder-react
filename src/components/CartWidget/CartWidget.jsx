import './CartWidget.css'
import { CgShoppingCart } from 'react-icons/cg';

export const CartWidget = () => {

  const number = 4

  return (
    <div className='cart-icon'>
      <CgShoppingCart/>
      <div className='count-item'><p className='count-item-num'>{number}</p></div>
    </div>
  )
}
