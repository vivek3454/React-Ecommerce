import { createContext, useState, useEffect } from 'react'
import { product } from '../data/products';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext();
const Context = (props) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

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

  useEffect(() => {
    setProducts([...product]);
  }, [])



  useEffect(() => {
    let value = sessionStorage.getItem('isLogin');
    setIsLogin(value);
    if (!value) {
      navigate('/signin');
    }
  }, [])

  return (
    <AppContext.Provider value={{ cart, setCart, products, setProducts, subTotal, setSubTotal, addToCart, isLogin, setIsLogin }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default Context