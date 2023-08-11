import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const AppContext = createContext();
const Context = (props) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [isLogin, setIsLogin] = useState(false);

  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id)
    if (exist) {
      toast.success("Already added to Cart.", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        theme: "light",
      });
      return;
    }
    let Cart = [...cart, { ...product, quantity: 1, itemTotal: product.price }];
    setCart(Cart);
    sessionStorage.setItem('cart', JSON.stringify(Cart));
    toast.success("Successfull added to Cart.", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      theme: "light",
    });

  }

  const deleteHandler = (id) => {
    const products = cart.filter((product) => product.id !== id);
    setCart(products);
    sessionStorage.setItem('cart', JSON.stringify(products));
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


  useEffect(() => {
    let value = sessionStorage.getItem('isLogin');
    setIsLogin(value);
    if (!value) {
      navigate('/signin');
    }
  }, [])

  useEffect(() => {
    let value = JSON.parse(sessionStorage.getItem('cart'));
    if (value) {
      setCart(value);
    }
    else{
      setCart([])
    }
  }, [])


  return (
    <AppContext.Provider value={{ cart, setCart, subTotal, setSubTotal, addToCart, isLogin, setIsLogin, deleteHandler }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default Context