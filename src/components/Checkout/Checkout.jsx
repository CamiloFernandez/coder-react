import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useCartConstext } from '../context/CartContext'
import { db } from '../../firestore/firestore'
import './Checkout.css'
import Swal from 'sweetalert2'

export const Checkout = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const { total, cartList, clearCart } = useCartConstext()

  const onSubmit = (data) => {
    const buyer = data
    const items = cartList.map(item => { return { id: item.id, name: item.book.name, price: item.book.price, amount: item.amount } })
    const date = new Date()
    const order = { buyer, items, date, total }
    generateOrder(order)
    setUpdate()
    clearCart()
  }
  
  const generateOrder = async (data) => {
    try {
      const col = collection(db, "Orders")
      const order = await addDoc(col, data)
      Swal.fire(
        'Compra Finalizada',
        `Tu codigo de seguimiento es ${order.id}`,
        'success',
        'info',
      )
    } catch (error) {
      console.log(error)
    }
  }

  const setUpdate = () => {
    try {
      cartList.forEach(item => {
      const docRef = doc(db, 'Books', item.id)
      const newStock = item.book.stock - item.amount
      updateDoc(docRef, {
        stock: newStock
      })
    })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='checkout-container'>
      <h1 className='checkout__title'>Finalizar compra</h1>
      <h3 className='checkout__subtitle'>Completa los campos:</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='checkout__input-container'>
          <label className='checkout__label'>Nombre</label>
          <input className='checkout__input' type="text" autoComplete="off" {...register('name', {
            required: true
          })} />
          {errors.name?.type === 'required' && <h3>El campo de Nombre es obligatorio</h3>}
        </div>
        <div className='checkout__input-container'>
          <label className='checkout__label'>Telefono</label>
          <input className='checkout__input' type="tel" autoComplete="off" {...register('tel', {
            required: true
          })} />
          {errors.tel?.type === 'required' && <h3>El campo de Telefono es obligatorio</h3>}
        </div>
        <div className='checkout__input-container'>
          <label className='checkout__label'>Email</label>
          <input className='checkout__input' type="email" autoComplete="off" {...register('email', {
            required: true
          })} />
          {errors.email?.type === 'required' && <h3>El campo de Email es obligatorio</h3>}
          <input className='checkout__btn' type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  )
}
