import './ItemCount.css'

import React, {useState} from 'react'

export const ItemCount = (props) => {
  const [count, setCount] = useState(1)

  const add = () =>{
    if(count < props.stock){
      setCount(count + 1)
    }
  }

  const sub = () =>{
    if(count > 1 ){
      setCount(count - 1)
    }
  }

  const resetCount = () =>{
    setCount(1)
  }

  return (
      <div className="item-count">
        <p className='item-count-text item-count-stock'>Stock: {props.stock}</p>
        <p className='item-count-text item-count-count'>Cantidad: {count}</p>
        <button className='item-count-btn btn-sub' onClick={() => sub()}>-</button>
        <button className='item-count-btn btn-add' onClick={() => add()}>+</button> 
        <button className='item-count-btn btn-cart' onClick={() => resetCount()}>Añadir al carrito</button>
      </div>
  )
}
