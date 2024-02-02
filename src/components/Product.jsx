import React from 'react'
import { useDispatch } from 'react-redux'
import { increaseAmount ,decreaseAmount, removeItem } from '../features/basketSlice'

const Product = ({name, price, image, amount}) => {

  const dispatch = useDispatch()

  return (
    <div className='flex flex-row items-center gap-8 px-10'>
     <img src={image} alt={name + "glasses"} className='w-40' />
      <div className='w-1/2 px-10'>
        <p className='text-xl font-medium'>{name}</p>
        <p className='text-lg tracking-wide'>kr {price.toFixed(2)}</p>
        <button
            onClick={()=>{dispatch(removeItem({name}) )}}
         className='text-red-500 tracking-wide pt-1 pb-3'>Remove</button>
      </div>
     <div className='flex flex-col'>
      <p className='flex flex-col items-center'>Amount</p>
      <div className='flex flex-row items-center gap-4 text-gray-600 font-medium'>
      <button 
      onClick={() => {
        if (amount === 1) {
          dispatch(removeItem({name}))
          return;
        }
        dispatch(decreaseAmount({name}))}
      }
      className='text-xl'>-</button>
      <p>{amount}</p>
      <button
      onClick={()=>{ dispatch(increaseAmount({name}) )}}
       className='text-xl'>+</button>
      </div>
     </div>
    </div>
  )
}

export default Product