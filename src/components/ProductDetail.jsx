import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/Context';
import { product } from '../data/products';
import ProductCard from './ProductCard';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const { addToCart } = useContext(AppContext);
    const [singlProduct, setSingleProduct] = useState({});
    useEffect(() => {
        const filteredProduct = product[id - 1];
        console.log(filteredProduct);
        setSingleProduct(filteredProduct);
    }, [id])

    return (
        <>
            {
                <section className="text-gray-600 h-[91vh] px-10 flex justify-center items-center">
                    <div className="container mx-auto">
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img alt="ecommerce" className=" w-[360px] object-center rounded" src={singlProduct?.thumbnail} />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{singlProduct?.title} </h1>
                                <div className="flex mb-4">
                                    <span className="flex gap-1 items-center">
                                        <svg fill="currentColor" stroke="currentColor" className="w-4 h-4 text-green-700" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        {singlProduct?.rating}
                                        <span className="text-gray-600 ml-3"> Reviews</span>
                                    </span>

                                </div>
                                <p className="leading-relaxed mb-10">
                                    {singlProduct?.description}
                                </p>
                                <div className="flex">
                                    <span className="title-font font-medium text-2xl text-gray-900">${singlProduct?.price}</span>
                                    <button onClick={() => {
                                        addToCart(singlProduct)
                                        navigate('/cart')
                                    }} className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Add to Cart</button>
                                    {/* <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                        <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                        </svg>
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>}
        </>
    )
}

export default ProductDetail