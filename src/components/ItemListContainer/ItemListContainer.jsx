import { useState, useEffect } from 'react'
import './ItemListContainer.css'
import { ItemList } from '../ItemList/ItemList'
import { Loading } from '../Loading/Loading'

export const ItemListContainer = (props) => {

  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)

  const getBooks = async ()=>{
    const booksJson = await fetch('./json/Books.json')
    const booksArray = await booksJson.json()
    setBooks(booksArray)
    setLoading(false)
  }


  useEffect(() => {
    setTimeout(() => {
      getBooks()
    }, 1000);
  }, [])
  

  return (
    loading ? <Loading/> : <main className='item-list-container'>
     <ItemList books={books}/>
    </main>
  )
}