import { useState, useEffect } from 'react'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { Loading } from '../Loading/Loading'

export const ItemDetailContainer = () => {
  const { id } = useParams()

  const [details, setDetails] = useState({})
  const [loading, setLoading] = useState(true)
  const getBook = async () => {
    const booksJson = await fetch('../../json/Books.json')
    const booksArray = await booksJson.json()
    const bookFind = await booksArray.find((book => 
      { return book.id === Number(id);
      }))
    setDetails(bookFind)
    setLoading(false)
  }

  useEffect(() => {
    setTimeout(() => {
      getBook()
    }, 1000);
  }, [])

  return (
    loading ? <Loading/> : <ItemDetail name={details.nombre} autor={details.autor} stock={details.stock} sinopsis={details.sinopsis} img={details.img} editorial={details.editorial} price={details.precio} id={details.id}/>
  )
}
