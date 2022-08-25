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
    <div className='product-container'>
      <img className='img' src= {props.img} alt= {props.alt}/>
      <h2 className="title">{props.title}</h2>
      <div className="item-count">
        <p className='text text.stock'>Stock: {props.stock}</p>
        <p className='text text-count'>Cantidad: {count}</p>
        <button className='btn btn-sub' onClick={() => sub()}>-</button>
        <button className='btn btn-add' onClick={() => add()}>+</button> 
        <button className='btn btn-cart' onClick={() => resetCount()}>Añadir al carrito</button>
      </div>
    </div>
  )
}
