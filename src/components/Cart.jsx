import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/Context'
import { AiFillDelete } from 'react-icons/ai'
import { FaArrowRight, FaTrash } from 'react-icons/fa'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, setCart, subTotal, setSubTotal } = useContext(AppContext);

  const decrement = (id, index) => {
    const product = cart[index];
    if (product.quantity === 1) {
      return
    }
    const productQty = { ...product, quantity: product.quantity - 1, itemTotal: product.price * (product.quantity - 1) }
    let newArray = [...cart];
    newArray[index] = productQty;
    setCart(newArray)
  }
  const increment = (id, index) => {
    const product = cart[index];
    const productQty = { ...product, quantity: product.quantity + 1, itemTotal: product.price * (product.quantity + 1) }
    let newArray = [...cart];
    newArray[index] = productQty;
    setCart(newArray);
    setSubTotal(productQty.itemTotal)
  }
  useEffect(() => {
    let all = 0;
    for (const product of cart) {
      all += Number(product.itemTotal);
    }
    console.log(all);
    setSubTotal(all);
  }, [cart])

  const deleteHandler = (id) => {
    const product = cart.filter((product) => product.id !== id);
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
    <>
      {cart.length !== 0 ?
        <div className='pb-24 pl-5 h-[75vh] container mx-auto '>

          <div className='flex flex-col h-[60vh] overflow-auto'>
            {
              cart.length !== 0 && cart.map((product, index) => (
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
          </div>
          <div className='w-full flex justify-end'>
            <div className='w-60 p-5'>
              <p className='font-semibold text-lg'>SubTotal : {subTotal}$</p>
              <p className='font-semibold text-lg'>Tax : 20$</p>
              <p className='font-semibold text-lg'>Total : {subTotal === 0 ? 0 : subTotal + 20}$</p>
            </div>
          </div>
          {/* {cart.length === 0 && <h1>Cart is empty</h1>} */}
        </div>
        :
        <div className=' h-[78vh] flex flex-col items-center justify-center'>
          <h1 className='font-semibold text-2xl'>Cart is empty</h1>
          <Link to='/' className='text-sky-500 flex gap-3'>Go to Shop <FaArrowRight className='mt-[5px]' /></Link>
        </div>
      }
    </>
  )

}

const CartItem = ({ category, itemTotal, description, id, image, price, rating, title, quantity, decrement, increment, index, deleteHandler }) => (
  <div className='bg-white border-b-2 border-black rounded-[4px] my-8 px-4 grid grid-cols-[2fr_1fr_1fr_2fr] max-[820px]:grid-cols-[2fr_1fr_1fr_1fr] max-[420px]:grid-cols-2 items-center'>
    <div className='flex items-center gap-3 max-[600px]:flex-col max-[450px]:gap-0'>
      <img className='w-[100px] h-[100px] object-contain' src={image} alt="Item" />
      <article className='flex flex-col items-start'>
        <h3 className='font-semibold text-center max-[380px]:text-xs'>{title}</h3>
        <p className='text-center'>${price}</p>
      </article>
    </div>
    <div className='flex items-center h-full'>
      <button className='w-8 h-8 bg-black text-white rounded-md hover:bg-gray-600 text-lg' onClick={() => decrement(id, index)}>-</button>
      <p className='w-8 h-8 grid place-content-center font-medium'>{quantity}</p>
      <button className='w-8 h-8 bg-black text-white rounded-md hover:bg-gray-600 text-lg' onClick={() => increment(id, index)}>+</button>
    </div>
    {/* <AiFillDelete className='cursor-pointer text-2xl inline-block m-auto hover:text-red-500' onClick={() => deleteHandler(id)} /> */}
    <FaTrash className='cursor-pointer text-xl inline-block m-auto hover:text-red-500' onClick={() => deleteHandler(id)} />
    <div className='font-semibold text-lg'>
      {`Item Total : ${itemTotal}$`}
    </div>
  </div>
)

export default Cart