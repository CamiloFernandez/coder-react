import React from 'react'
import './ItemDetail.css'
import {ItemCount} from '../ItemCount/ItemCount'

export const ItemDetail = (props) => {
  return (
    <div className='detail'>
      <div>
        <img className='detail__img' src={props.img} alt="Imagen libro" />
        <p className='detail__text'> <span className='detail-span'>Stock:</span> {props.stock}</p>
        <p className='detail__text'>${props.price}</p>
      </div>
      <ul className='detail-text-container'>
        <li className='detail__title'>{props.name}</li>
        <li className='detail__text'>{props.autor}</li>
        <li className='detail__text'> <span className='detail__span'>Editorial:</span> {props.editorial}</li>
        <li className='detail__text'><span className='detail-span'></span>{props.sinopsis}</li>
        <ItemCount stock={props.stock}/>
      </ul>
    </div>
  )
}
