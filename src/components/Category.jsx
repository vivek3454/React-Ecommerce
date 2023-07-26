import React, { useContext } from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { AppContext } from '../context/context';
import ProductCard from './ProductCard';
import { categories } from '../data/categories';

const Category = () => {
  const { products } = useContext(AppContext);

  return (
    <>
      <div className='container mx-auto'>
        {
          categories.map((category) => {
            if (category.value === 'all') {
              return
            }
            return (
              <CategoryCarousel
                key={category.label}
                products={products}
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

const CategoryCarousel = ({ products, label, value }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
      <h2 className='mt-12 ml-5 text-4xl font-semibold'>{label}</h2>
      <Carousel
        responsive={responsive}
        arrows
        renderArrowsWhenDisabled={false}
        className="ml-4"
        focusOnSelect={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="dotList"
      >
        {
          products.filter((item) => item.category === value)
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
      </Carousel>
    </>
  )
}