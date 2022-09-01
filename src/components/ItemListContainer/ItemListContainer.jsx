import { useState, useEffect } from 'react'
import './ItemListContainer.css'
import { ItemList } from '../ItemList/ItemList'
import { ItemCount } from '../ItemCount/ItemCount'


export const ItemListContainer = (props) => {

  const [books, setBooks] = useState([])

  const getBooks = async ()=>{
    const booksJson = await fetch('./json/Books.json')
    const booksArray = await booksJson.json()
    setBooks(booksArray)
  }

  useEffect(() => {
    getBooks()
  }, [])
  

  return (
    <main className='item-list-container'>
      <ItemList books={books}/>
    </main>
  )
}