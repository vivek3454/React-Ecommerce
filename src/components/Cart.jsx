import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/Context'
import {AiFillDelete} from 'react-icons/ai'
import { toast } from 'react-toastify';

const Cart = () => {
  const { cart, setCart, subTotal, setSubTotal } = useContext(AppContext);
 
  const decrement = (id, index)=>{
    const product = cart[index];
    if (product.quantity === 1) {
      return
    }
    const productQty = {...product, quantity: product.quantity - 1, itemTotal: product.price * (product.quantity - 1)}
    let newArray= [...cart];
    newArray[index] = productQty;
    setCart(newArray)
  }
  const increment = (id,index)=>{
    const product = cart[index];
    const productQty = {...product, quantity: product.quantity + 1,itemTotal: product.price * (product.quantity + 1)}
    let newArray= [...cart];
    newArray[index] = productQty;
    setCart(newArray);
    setSubTotal( productQty.itemTotal)
  }
  useEffect(() => {
    let all = 0;
    for (const product of cart) {
      all += Number(product.itemTotal);
    }
    console.log(all);
    setSubTotal(all);
  }, [cart])
  
  const deleteHandler = (id)=>{
    const product = cart.filter((product)=>  product.id !== id);
    setCart(product);
    toast.success("Successfull removed from Cart.", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      theme: "light",
    });
  }
  return (
    <div className='pb-24 pt-5 flex flex-col shrink-0 flex-wrap gap-4 justify-center'>
      <div className='w-60 h-52 bg-white fixed right-5 bottom-8'>
        <p className='font-semibold text-lg'>SubTotal : {subTotal}$</p>
        <p className='font-semibold text-lg'>Tax : 20$</p>
        <p className='font-semibold text-lg'>Total : {subTotal === 0? 0 : subTotal + 20}$</p>
      </div>
      {
        cart && cart.map((product, index) => (
          <CartItem
            key={index}
            index={index}
            category={product.category}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            image={product.image}
            rating={product.rating}
            quantity={product.quantity}
            itemTotal={product.itemTotal}
            decrement={decrement}
            increment={increment}
            deleteHandler={deleteHandler}
          />
        ))
      }
      {cart.length === 0 && <h1>Cart is empty</h1> }
    </div>
  )
  
}

const CartItem = ({ category, itemTotal, description, id, image, price, rating, title, quantity, decrement, increment, index, deleteHandler })=>(
  <div className='bg-white max-w-[900px] rounded-[10px] my-8 px-4 grid grid-cols-[1fr_3fr_1fr_1fr_2fr] max-[820px]:grid-cols-[2fr_2fr_1fr_1fr] items-center'>
    <img className='w-[100px] h-[100px] object-contain' src={image} alt="Item"/>
    <article>
      <h3 className='font-semibold text-center max-[380px]:text-xs'>{title}</h3>
      <p className='text-center'>${price}</p>
    </article>
    <div className='flex items-center h-full'>
      <button className='w-8 h-8 bg-black text-white rounded-md hover:bg-gray-600 text-lg' onClick={()=>decrement(id, index)}>-</button>
      <p className='w-8 h-8 grid place-content-center font-medium'>{quantity}</p>
      <button className='w-8 h-8 bg-black text-white rounded-md hover:bg-gray-600 text-lg' onClick={()=>increment(id,index)}>+</button>
    </div>
    <AiFillDelete className='cursor-pointer text-2xl inline-block m-auto hover:text-red-500' onClick={()=>deleteHandler(id)} />
    <div className='font-semibold text-lg'>
      {`Item Total : ${itemTotal}$`}
    </div>
  </div>
)

export default Cart