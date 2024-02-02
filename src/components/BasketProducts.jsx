import React from 'react'
import { useSelector } from 'react-redux' //hämtar produkterna
import Product from './Product'

const BasketProducts = () => {
const {products, total, amount} = useSelector((store)=> store.basket)

  return (
    <div className='py-4'>
      {amount > 1 ? (<><div>
      {products.map((item, i)=>
        <Product
         key={new Date().getTime + Math.random()}
         name={item.name}
         price={item.price}
         image={item.image}
         amount={item.amount}
        />
      )}
    </div>
  </>): (
      <>
      <p>Your basket is empty</p></>
    )}
       <div className='flex flex-row items-center justify-evenly py-8'>
      <p className='text-2xl font-medium'>Total</p>
      <p className='text-2xl font-medium'>kr {total.toFixed(2)}</p>
    </div>
    
    </div>
  )
}

export default BasketProducts