import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const {pathname} = useLocation();
    console.log(pathname);
    return (
        <nav className="bg-blue-500 p-4 sticky top-0 z-10">
                <div className="container mx-auto flex items-center justify-between">
                    <Link to={'/'} className="text-white font-semibold text-2xl">
                       React Ecommerce
                    </Link>
                    <ul className="flex space-x-4 text-lg">
                        <Link to={'/'}>
                            <li className={`text-${pathname === '/'? 'white' : 'gray-300'}`}>Home</li>
                        </Link>
                        <Link to={'/category'}>
                            <li className={`text-${pathname === '/category' ? 'white' : 'gray-300'}`}>Category</li>
                        </Link>
                        <Link to={'/cart'}>
                            <li className={`text-${pathname === '/cart' ? 'white' : 'gray-300'}`}>Cart</li>
                        </Link>
                    </ul>
                </div>
        </nav>
    )
}

export default Navbar