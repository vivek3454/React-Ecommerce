import React from 'react'
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from './ProductCard';
import { categories } from '../data/categories';
import { product } from '../data/products';

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

const CategoryCarousel = ({ products, label, value }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 610,
        settings: {
          centerMode: true,
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 450,
        settings: {
          centerMode: false,
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <>
      <h2 className='mt-12 ml-5 text-4xl font-semibold'>{label}</h2>

      <Slider {...settings} >
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
      </Slider>
    </>
  )
}