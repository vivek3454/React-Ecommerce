import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/Context';

const ProductCard = ({ category, discount, id, image, price, rating, title }) => {
    const {addToCart, isLogin} = useContext(AppContext);
    const navigate = useNavigate();
    const handleAddToCart = ()=>{
        if (!isLogin) {
            navigate('/signin');
        }
        else{
            addToCart({ category, discount, id, image, price, rating, title });
        }
    }

    return (
        <>
        <div className="flex flex-col m-4 border-2 w-64 p-4 relative hover:shadow-lg transition-all">
            {discount && <span className='text-black text-sm bg-yellow-400 rounded px-1 absolute top-1 right-1'>{discount}% off</span>}
            <Link to={`/detail/${id}`}>
                <div className="flex justify-center rounded">
                    <img alt="ecommerce" className="object-contain w-60 h-40" src={image} />
                </div>
            </Link>
            <div className="mt-4">
                <p className="text-gray-500 flex justify-between text-xs tracking-widest title-font mb-1">
                    <span>{category}</span>
                    <span className='flex gap-1'>
                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-green-700" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        {rating}
                    </span>
                </p>
                <h2 className="text-gray-900 title-font text-lg line-clamp-1 font-medium">{title}</h2>
                <div className="mt-4 flex justify-between items-center">
                    <p>${price}</p>
                    <button onClick={handleAddToCart} className='bg-blue-500 hover:shadow-xl px-2 py-1 rounded text-white'>Add to Cart</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductCard