import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa';
import { AppContext } from '../context/Context';

const Navbar = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { isLogin, setIsLogin } = useContext(AppContext);
    const searchInputBoxRef = useRef();
    const navRef = useRef();
    const barRef = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenSearch, setIsOpenSearch] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const handleNavbarShowHide = () => {
        setIsOpen(!isOpen);
        setIsOpenSearch(false);
    }
    const handleSearchShowHide = () => {
        setIsOpenSearch(!isOpenSearch);
        setIsOpen(false);
    }
    const handleOnChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
    }
    const handleLogout = () => {
        let userinput = prompt('Are you sure to logout y/n');
        if (userinput === 'y') {
            sessionStorage.clear();
            setIsLogin(false);
            navigate('/signin');
        }
    }
    const handleSearch = () => {
        if (searchValue !== '') {
            navigate(`/search/${searchValue}`);
            // setSearchValue('')
        }
    }

    useEffect(() => {
        const closeSearchBar = (e) => {
            if (!searchInputBoxRef.current.contains(e.target)) {
                setIsOpenSearch(false);
            }
        }
        const closeNav = (e) => {
            if (!navRef.current.contains(e.target) && !barRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', closeSearchBar);
        document.addEventListener('mousedown', closeNav);
        return () => {
            document.removeEventListener('mousedown', closeSearchBar);
            document.removeEventListener('mousedown', closeNav);
        }
    })

    return (
        <nav className="bg-blue-500 p-4 sticky top-0 z-[9999]">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <Link to={'/'} className="text-white font-semibold text-2xl">
                    Zone<span className='text-orange-400'>kart</span>
                </Link>
                <div className={`absolute top-20 left-0 min-[900px]:static min-[900px]:flex ${isOpenSearch ? 'flex' : 'hidden'} justify-center w-full`}>
                    <div ref={searchInputBoxRef} className="flex items-center border-2 rounded-md">
                        <input
                            type="text"
                            id='search'
                            value={searchValue}
                            onChange={handleOnChange}
                            placeholder="Search..."
                            className="px-4 py-2 rounded-l outline-none w-96"
                        />
                        <button onClick={handleSearch} className="px-4 py-3 border-blue-500 bg-blue-500 text-white rounded-r ">
                            <FaSearch />
                        </button>
                    </div>
                </div>
                <div className='flex gap-8 min-[900px]:hidden'>
                    <div>
                        {isOpenSearch ?
                            <FaTimes onClick={handleSearchShowHide} color='#fff' size={25} />
                            :
                            <FaSearch onClick={handleSearchShowHide} color='#fff' size={20} />
                        }
                    </div>
                    <div ref={barRef}>
                        <FaBars onClick={handleNavbarShowHide} color='#fff' size={20} />
                    </div>
                </div>
                <ul ref={navRef} className={`max-[900px]:w-full max-[900px]:pb-4 gap-5 max-[900px]:gap-2 max-[900px]:bg-blue-500 max-[900px]:px-10 max-[900px]:absolute top-16 left-0 right-0 min-[900px]:static ${isOpen ? 'flex' : 'hidden'} min-[900px]:flex max-[900px]:flex-col items-center max-[900px]:justify-center text-lg`}>
                    <Link to={'/'}>
                        <li className={`${pathname === '/' ? 'text-white' : 'text-gray-300'}`}>Home</li>
                    </Link>
                    <Link to={'/products'}>
                        <li className={`${pathname === '/products' ? 'text-white' : 'text-gray-300'}`}>Products</li>
                    </Link>
                    <Link to={'/category'}>
                        <li className={`${pathname === '/category' ? 'text-white' : 'text-gray-300'}`}>Category</li>
                    </Link>
                    <Link to={'/cart'}>
                        <li className={`${pathname === '/cart' ? 'text-white' : 'text-gray-300'}`}>Cart</li>
                    </Link>
                    {isLogin && <button onClick={handleLogout} className='bg-white text-blue-500 w-24 px-2 py-1 rounded max-[900px]:mb-6' >logout</button>}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar