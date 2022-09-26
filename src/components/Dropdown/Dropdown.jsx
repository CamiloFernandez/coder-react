import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Dropdown.css'

export const Dropdown = () => {
  const [show, setShow] = useState(false)
  
  return (
    <div>
      <h2 className='dropdown__title underline' onClick={()=> setShow(!show)}>Categorias</h2>
      <ul className={show ? 'dropdown__ul-show' : 'dropdown__ul'}>
        <li className='dropdown__li'><Link to={'/'} className='underline'>Todos</Link></li>
        <li className='dropdown__li'><Link to={'/books/fantasía'} className='underline'>Fantasía</Link></li>
        <li className='dropdown__li'><Link to={'/books/terror'} className='underline'>Terror</Link></li>
      </ul>
    </div>
  )
}
