import { useState, useEffect } from 'react'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail'


export const ItemDetailContainer = () => {
  const { id } = useParams()

  const [details, setDetails] = useState({})

  const getBook = async () => {
    const booksJson = await fetch('../../json/Books.json')
    const booksArray = await booksJson.json()
    const bookFind = await booksArray.find((book => 
      { return book.id == Number(id);
      }))
    setDetails(bookFind)
  }

  useEffect(() => {
    getBook()
  }, [])

  return (
    <ItemDetail name={details.nombre} autor={details.autor} stock={details.stock} sinopsis={details.sinopsis} img={details.img} editorial={details.editorial} price={details.precio}/>
  )
}
