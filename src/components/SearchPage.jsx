import React, { useContext } from 'react'
import { AppContext } from '../context/context';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';

const SearchPage = () => {
    const { products } = useContext(AppContext);
    const { query } = useParams();

    return (
        <div className='min-[1000px]:container mx-auto max-[980px]:gap-10 max-[1280px]:gap-20 px-4 pt-8 grid place-items-center max-[550px]:grid-cols-1 max-[780px]:grid-cols-2 max-[1050px]:grid-cols-3 grid-cols-4 shrink-0 flex-wrap'>
            {
                products.filter((item) => item.title.toLowerCase().includes(query.toLowerCase())
                 || item.description.toLowerCase().includes(query.toLowerCase())
                 || item.brand.toLowerCase().includes(query.toLowerCase())
                 || item.category.toLowerCase().includes(query.toLowerCase())
                 )
                    .map((product) => (
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
    )
}

export default SearchPage