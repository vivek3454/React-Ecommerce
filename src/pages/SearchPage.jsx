import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/Context';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const SearchPage = () => {
    const { products } = useContext(AppContext);
    const { query } = useParams();
    const [productsArr, setProductsArr] = useState([]);

    useEffect(() => {
        const temp = products.filter((item) => item.title.toLowerCase().includes(query.toLowerCase())
            || item.description.toLowerCase().includes(query.toLowerCase())
            || item.brand.toLowerCase().includes(query.toLowerCase())
            || item.category.toLowerCase().includes(query.toLowerCase())
        )
        setProductsArr(temp);

    }, [query])



    return (
        <section>
            <div className='min-[1000px]:container mx-auto max-[980px]:gap-10 max-[1280px]:gap-20 px-4 pt-8 grid place-items-center max-[550px]:grid-cols-1 max-[780px]:grid-cols-2 max-[1050px]:grid-cols-3 grid-cols-4 shrink-0 flex-wrap'>
                {
                    productsArr.length !== 0 &&
                    productsArr.map((product) => {
                        return (
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
                        )
                    })

                }
            </div>
            {
                productsArr.length === 0 &&
                <p className='h-[70vh] flex px-5 justify-center items-center text-xl font-semibold'>Nothing to show here for your search result</p>
            }
        </section>
    )
}

export default SearchPage