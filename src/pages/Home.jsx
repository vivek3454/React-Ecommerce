import React from 'react'
import img from '../assets/woman.png'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='pt-1 container mx-auto'>
            <div className="lg:grid lg:grid-cols-2 lg:h-[calc(100vh-90px)] items-center justify-between home flex flex-col-reverse mt-5 lg:mt-0 gap-4 lg:gap-0">
                <div className="flex flex-col gap-4 md:gap-8 items-center lg:items-start md:ms-7">
                    <h1 className="text-black text-4xl md:text-7xl font-bold text-center lg:text-left ">
                    Get the Best Products!
                    </h1>
                    <p className="text-lg md:text-3xl font-medium text-center lg:text-left w-[80%]">
                    FROM OUR STORE
                    </p>
                    <Link to="/products">
                        <button className="hover:shadow-xl transition-all p-2 px-4 bg-blue-500 rounded w-[fit-content] text-white text-sm md:text-base font-bold">
                            Shop Now
                        </button>
                    </Link>
                </div>

                <div className="flex lg:justify-end items-center justify-center">
                    <img src={img} className="lg:w-[85%] w-[90%]" />
                </div>
            </div>
        </div>
    )
}

export default Home