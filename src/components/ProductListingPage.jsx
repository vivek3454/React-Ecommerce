import { useContext, useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import PulseLoader from "react-spinners/PulseLoader";
import { AppContext } from '../context/Context';
import { product } from '../data/products';
import { categories } from '../data/categories';

const ProjectListingPage = () => {
    // const [products, setProducts] = useState([]);
    const { products, setProducts } = useContext(AppContext);

    const handleSort = (e) => {
        const value = e.target.value;
        if (value === 'all') {
            setProducts(product);
        }
        else if (value === 'smartphones') {
            const filteredProduct = product.filter((item) => {
                return item.category === "smartphones";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'laptops') {
            const filteredProduct = product.filter((item) => {
                return item.category === "laptops";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'fragrances') {
            const filteredProduct = product.filter((item) => {
                return item.category === "fragrances";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'skincare') {
            const filteredProduct = product.filter((item) => {
                return item.category === "skincare";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'groceries') {
            const filteredProduct = product.filter((item) => {
                return item.category === "groceries";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'home-decoration') {
            const filteredProduct = product.filter((item) => {
                return item.category === "home-decoration";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'furniture') {
            const filteredProduct = product.filter((item) => {
                return item.category === "furniture";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'tops') {
            const filteredProduct = product.filter((item) => {
                return item.category === "tops";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'lighting') {
            const filteredProduct = product.filter((item) => {
                return item.category === "lighting";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'sunglasses') {
            const filteredProduct = product.filter((item) => {
                return item.category === "sunglasses";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'automotive') {
            const filteredProduct = product.filter((item) => {
                return item.category === "automotive";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'motorcycle') {
            const filteredProduct = product.filter((item) => {
                return item.category === "motorcycle";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'womens-dresses') {
            const filteredProduct = product.filter((item) => {
                return item.category === "womens-dresses";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'womens-shoes') {
            const filteredProduct = product.filter((item) => {
                return item.category === "womens-shoes";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'mens-shirts') {
            const filteredProduct = product.filter((item) => {
                return item.category === "mens-shirts";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'mens-shoes') {
            const filteredProduct = product.filter((item) => {
                return item.category === "mens-shoes";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'mens-watches') {
            const filteredProduct = product.filter((item) => {
                return item.category === "mens-watches";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'womens-watches') {
            const filteredProduct = product.filter((item) => {
                return item.category === "womens-watches";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'womens-bags') {
            const filteredProduct = product.filter((item) => {
                return item.category === "womens-bags";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'womens-jewellery') {
            const filteredProduct = product.filter((item) => {
                return item.category === "womens-jewellery";
            })
            setProducts(filteredProduct);
        }
        else {
            console.log('no');
        }
    }
    // const getAllProducts = async () => {
    //     const res = await fetch('https://fakestoreapi.com/products')
    //     const allProducts = await res.json();
    // }

    const handleChange = (e) => {
        let value = e.target.value;
        console.log(value);
        if (value === 'low-high') {
            let sorted = products.sort((a, b) => {
                return Math.floor(a.price - b.price);
            })
            setProducts([...sorted]);
        }
        // else if (value === 'all') {
        //     setProducts(product);
        // }
        else {
            let sorted = products.sort((a, b) => {
                return Math.floor(b.price - a.price);
            })
            setProducts([...sorted]);
        }
    }


    return (
        <><div className='h-[91vh] flex'>
            <div className='w-[20%] py-10 border-[#ccc] overflow-auto border-r-2 h-full sticky top-9'>
                <h2 className='text-center text-xl font-semibold mb-3'>Filter</h2>
                <div className='flex flex-col pl-24 gap-1 border-b-2 pb-2 ' onClick={handleSort}>
                    {
                        categories.map((categorie) => (
                            <button key={categorie.label} value={categorie.value} className='border-white transition-colors w-max hover:border-black border-b-2'>{categorie.label}</button>
                        ))
                    }

                </div>
            </div>
            <div className='w-[80%] h-full overflow-auto scrollbar'>
                <div className='text-right sticky top-0 bg-white z-10 px-[36px] py-7'>
                    {/* <button onClick={handleSort} className='bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded text-white'>Filter</button> */}

                    <div>
                        <span className='font-semibold'>Price :</span>
                        <select onChange={handleChange} defaultValue={'all'} className='ml-3 border-2 border-black'>
                            {/* <option value="all">all</option> */}
                            <option value="low-high">lowest to highest</option>
                            <option value="high-low">highest to lowest</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div className='pb-24 pt-5 flex shrink-0 flex-wrap'>
                        {
                            products.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    category={product.category}
                                    id={product.id}
                                    title={product.title}
                                    price={product.price}
                                    description={product.description}
                                    image={product.images[0]}
                                    rating={product.rating}
                                />
                            ))

                        }
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default ProjectListingPage