import { useContext, useEffect } from 'react';
import { AppContext } from '../context/Context';
import { FaArrowRight } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cart, setCart, subTotal, setSubTotal, isLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const decrement = ( index) => {
    const product = cart[index];
    if (product.quantity === 1) {
      return;
    }
    const productQty = { ...product, quantity: product.quantity - 1, itemTotal: product.price * (product.quantity - 1) };
    let newArray = [...cart];
    newArray[index] = productQty;
    setCart(newArray);
  }
  const increment = (index) => {
    const product = cart[index];
    const productQty = { ...product, quantity: product.quantity + 1, itemTotal: product.price * (product.quantity + 1) };
    let newArray = [...cart];
    newArray[index] = productQty;
    setCart(newArray);
    setSubTotal(productQty.itemTotal);
  }



  useEffect(() => {
    let allTotal = 0;
    for (const product of cart) {
      allTotal += Number(product.itemTotal);
    }
    setSubTotal(allTotal);
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
  const checkOutHandler = () => {
    toast.success("Successfull Checkout done.", {
      position: "top-center",
      autoClose: 15000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      theme: "light",
    });
    setCart([]);
  }

  useEffect(() => {
    if(!isLogin){
      navigate('/signin');
    }
  }, [])
  


  return (
    <>
      {isLogin &&
        (cart.length !== 0 ?
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
                <button className='w-28 h-8 bg-black text-white rounded-md hover:bg-gray-600 text-lg' onClick={checkOutHandler}>Checkout</button>

              </div>
            </div>
          </div>
          :
          <div className=' h-[78vh] flex flex-col items-center justify-center'>
            <h1 className='font-semibold text-2xl'>Cart is empty</h1>
            <Link to='/products' className='text-sky-500 flex gap-3'>Go to Shop <FaArrowRight className='mt-[5px]' /></Link>
          </div>
        )
      }
    </>
  )

}

export default Cart