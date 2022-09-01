import React from 'react'
import { Item } from '../Item/Item'
import { ItemCount } from '../ItemCount/ItemCount'
export const ItemList = (props) => {
  return (
    <>
      {props.books.map(book =>{
        return(
          <Item key={book.id} name={book.nombre} autor={book.autor} genres={book.genero} stock={book.stock} img={book.img}/>
        )
      })}
    </>
  )
}
