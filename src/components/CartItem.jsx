import React from 'react';
import { FaTrash } from 'react-icons/fa';

const CartItem = ({ itemTotal, id, image, price, title, quantity, decrement, increment, index, deleteHandler }) => {
  return (
    <div className='bg-white border-b-2 border-black rounded-[4px] my-8 px-4 grid grid-cols-[2fr_1fr_1fr_2fr] max-[820px]:grid-cols-[2fr_1fr_1fr_1fr] max-[420px]:grid-cols-2 items-center'>
    <div className='flex items-center justify-center gap-3 max-[600px]:flex-col max-[450px]:gap-0'>
      <img className='w-[100px] h-[100px] object-contain' src={image} alt="Item" />
      <article className='flex flex-col items-start max-[600px]:-mt-5'>
        <h3 className='font-semibold text-center max-[380px]:text-xs'>{title}</h3>
        <p className='text-center'>${price}</p>
      </article>
    </div>
    <div className='flex items-center h-full'>
      <button className='w-8 h-8 bg-black text-white rounded-md hover:bg-gray-600 text-lg' onClick={() => decrement(index)}>-</button>
      <p className='w-8 h-8 grid place-content-center font-medium'>{quantity}</p>
      <button className='w-8 h-8 bg-black text-white rounded-md hover:bg-gray-600 text-lg' onClick={() => increment(index)}>+</button>
    </div>
    <FaTrash className='cursor-pointer text-xl inline-block m-auto hover:text-red-500' onClick={() => deleteHandler(id)} />
    <div className='font-semibold text-lg'>
      {`Item Total : ${itemTotal}$`}
    </div>
  </div>
  )
}

export default CartItem