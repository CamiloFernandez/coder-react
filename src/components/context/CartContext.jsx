import React, { createContext, useContext, useState } from "react";


const cartContext = createContext();
export const useCartConstext = () => useContext(cartContext)

export const CartProvider = ({ children }) => {

  const [cartList, setCartList] = useState([])
  
  const clearCart = () =>{
    setCartList([]);
  }

  const addItem = (id, quantity) => {
    setCartList([...cartList, {id, quantity}])
    console.log(cartList)
  }


  return(
    <cartContext.Provider value={{cartList, clearCart, addItem}}>
      {children}
    </cartContext.Provider>
  )
}

