import './ItemListContainer.css'

export const ItemListContainer = () => {
  return (
    <div className='item-list-container'>
      <h1 className="title">Productos</h1>
      <ul className='item-list'>
        <li className='item'>Pc Gamer</li>
        <li className='item'>Silla Gamer</li>
        <li className='item'>Teclado Gamer</li>
        <li className='item'>Plato Gamer</li>
      </ul>
    </div>
  )
}
