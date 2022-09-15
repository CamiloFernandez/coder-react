import './App.css';
import { NavBar } from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {CartProvider } from './components/context/CartContext'

function App() {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/books' element={<ItemListContainer/>}></Route>
          <Route path='/books/:generos' element={<ItemListContainer/>}></Route>
          <Route path='/detalles/:id' element={<ItemDetailContainer/>}></Route>
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
