import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../context/context';
import { toast } from 'react-toastify';

const ProductCard = (props) => {
    const {cart, setCart, addToCart} = useContext(AppContext);
    const { category, description, id, image, price, rating, title } = props;
    // const addToCart = (product)=>{
    //     setCart([...cart, {...product,quantity: 1}]);
    //     toast.success("Successfull added to Cart.", {
    //         position: "top-center",
    //         autoClose: 1500,
    //         hideProgressBar: true,
    //         closeOnClick: false,
    //         pauseOnHover: false,
    //         draggable: false,
    //         theme: "light",
    //       });

    // }
    return (
        <>
        <div className="flex flex-col m-4 border-2 w-64 p-4 relative">
            <Link to={`/detail/${id}`}>
                <div className="flex justify-center rounded">
                    <img alt="ecommerce" className="object-contain w-40 h-40" src={image} />
                </div>
            </Link>
            <div className="mt-4">
                <h3 className="text-gray-500 flex justify-between text-xs tracking-widest title-font mb-1">
                    {category}
                    <p className='flex gap-1'>
                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-green-700" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        {rating}
                    </p>
                </h3>
                <h2 className="text-gray-900 title-font text-lg line-clamp-1 font-medium">{title}</h2>
                <p className="mt-4 flex justify-between items-center">
                    ${price}
                    <button onClick={()=> addToCart(props)} className='bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded text-white'>Add to Cart</button>
                </p>
            </div>
        </div>
        </>
    )
}

export default ProductCard