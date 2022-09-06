import React from 'react'
import { Item } from '../Item/Item'
export const ItemList = (props) => {
  return (
    <>
      {props.books.map(book =>{
        return(
          <Item key={book.id} name={book.nombre} autor={book.autor} genres={book.genero} stock={book.stock} img={book.img} id={book.id}/>
        )
      })}
    </>
  )
}
