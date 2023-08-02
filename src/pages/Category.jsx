import React from 'react';
import "react-multi-carousel/lib/styles.css";
import { categories } from '../data/categories';
import { product } from '../data/products';
import CategoryCarousel from '../components/CategoryCarousel';

const Category = () => {

  return (
    <>
      <div className='bg-white min-[375px]:px-10 max-[375px]:px-5'>
        {
          categories.map((category) => {
            return (
              <CategoryCarousel
                key={category.label}
                products={product}
                label={category.label}
                value={category.value}
              />
            )
          })
        }

      </div>
    </>
  )
}

export default Category