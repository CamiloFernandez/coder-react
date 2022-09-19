import React from 'react'
import { Link } from 'react-router-dom'
import { CartItem } from '../CartItem/CartItem'
import { useCartConstext } from '../context/CartContext'
import './Cart.css'

export const Cart = () => {

  const {cartList, total, clearCart} = useCartConstext()

  return (
    total === 0 ? 
    <div className='cart__empy'>
      <h2 className='cart__empy-title'>No hay articulos en el carrito</h2>
      <Link to='/books' ><button className='cart__empy-btn'>Ir a Comprar</button></Link>
    </div> :
    <div className='cart'>
      {cartList.map(item =>{
        return(
          <CartItem key={item.id} id={item.id} amount={item.amount} name={item.book.name} price={item.book.price} autor={item.book.autor} editorial={item.book.editorial} img={item.book.img} />
        )
      }) }  
      <li className='cart__buy-container'>
        <ul><h2 className='cart__total-price'>Total:${total}</h2></ul>
        <ul><button className='cart__buy-btn' onClick={()=> clearCart()} >Finalizar Compra</button></ul>
      </li>
    </div>
  )
}
