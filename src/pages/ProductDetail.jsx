import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/Context';
import { product } from '../data/products';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useContext(AppContext);
    const [singlProduct, setSingleProduct] = useState({});
    const [image, setImage] = useState('');
    useEffect(() => {
        const filteredProduct = product[id - 1];
        setImage(filteredProduct.images[0]);
        setSingleProduct(filteredProduct);
    }, [id])


    const handleImg = (src) => {
        setImage(src);
    }

    return (
        <>
            {
                <section className="text-gray-600 min-h-[91vh] px-10 pt-10 flex container mx-auto justify-center flex-wrap gap-10 items-center">
                    <div className="flex max-[550px]:flex-col-reverse gap-7 rounded">
                        <div className="small-images  max-[550px]:flex gap-5">
                            {singlProduct?.images?.map((src, i) => (
                                <img key={i} alt="ecommerce" className="h-16 w-16 max-[440px]:h-10 max-[440px]:w-10 rounded cursor-pointer mb-3" onClick={() => handleImg(src)} src={src} />
                            ))}
                        </div>

                        <div className="ml-3 h-72 w-[350px] max-[440px]:h-64 max-[440px]:w-[280px]">
                            <img className="w-full h-full" src={image} alt="ecommerce" />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-gray-900 text-3xl title-font font-medium mb-1">{singlProduct?.title} </h2>
                        <div className="flex mb-4 gap-1 items-center">
                            <svg fill="currentColor" stroke="currentColor" className="w-4 h-4 text-green-700" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            {singlProduct?.rating}
                            <span className="text-gray-600 ml-3"> stock : {singlProduct.stock}</span>
                        </div>
                        <p className="leading-relaxed w-96 max-[440px]:w-full mb-10">
                            {singlProduct?.description}
                        </p>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">${singlProduct?.price}</span>
                            <button onClick={() => {
                                addToCart(singlProduct)
                                navigate('/cart')
                            }} className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:shadow-xl rounded">Add to Cart</button>

                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default ProductDetail