import React from 'react'
import './Item.css'
import { ItemCount } from '../ItemCount/ItemCount'

export const Item = (props) => {
  return (
    <>
      <ul className='item'>
        <li><img className='item__img' src={props.img}/></li>
        <li className='item__title'>{props.name}</li>
        <li className='item__text'>Autor: {props.autor}</li>
        <li className='item__text'>Género: {props.genres}</li>
        <ItemCount className='item__count' stock={props.stock}/>
      </ul>
    </>
  )
}
