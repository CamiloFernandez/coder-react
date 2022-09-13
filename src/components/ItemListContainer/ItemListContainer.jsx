import { useState, useEffect } from 'react'
import './ItemListContainer.css'
import { ItemList } from '../ItemList/ItemList'
import { Loading } from '../Loading/Loading'
import { useParams } from 'react-router-dom'

export const ItemListContainer = (props) => {

  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const { generos } = useParams()

  const getAllBooks = async () => {
    const booksJson = await fetch('./json/Books.json')
    const booksParsed = await booksJson.json()
    setBooks(booksParsed)
    setLoading(false)
  }

  const getGenres = async () => {
    const booksJson = await fetch('./../json/Books.json')
    const booksParsed = await booksJson.json()
    const booksGenres = await booksParsed.filter(book => book.genero === generos)
    setBooks(booksGenres)
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      generos ? getGenres() : getAllBooks()
    }, 1000);
  }, [generos])

  return (
    loading ? <Loading /> : <main className='item-list-container'>
      <ItemList books={books} />
    </main>
  )
}