import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate, useNavigation } from 'react-router-dom'
import { FaBars, FaPhone, FaSearch, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
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
    const handleSearch = () => {
        if (searchValue !== '') {
            navigate(`/search/${searchValue}`)
            setSearchValue('')
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
            <div className="container mx-auto flex items-center justify-between">
                <Link to={'/'} className="text-white font-semibold text-2xl">
                    Zone<span className='text-orange-400'>kart</span>
                </Link>
                <div className={`absolute top-20 left-0 min-[789px]:static min-[789px]:flex ${isOpenSearch ? 'flex' : 'hidden'} justify-center w-full`}>
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
                <div className='flex gap-8 min-[789px]:hidden'>
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
                <ul ref={navRef} className={`max-[789px]:w-full gap-5 max-[789px]:gap-2 max-[789px]:bg-blue-500 max-[789px]:px-10 max-[789px]:absolute top-16 left-0 right-0 min-[789px]:static ${isOpen ? 'flex' : 'hidden'} min-[789px]:flex max-[789px]:flex-col max-[789px]:justify-center text-lg`}>
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
                </ul>
            </div>
        </nav>
    )
}

export default Navbar