import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useNavigation } from 'react-router-dom'
import { FaBars, FaSearch } from 'react-icons/fa';

const Navbar = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const handleNavbarShowHide = () => {
        setIsOpen(!isOpen);
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
        else{
            alert('Please enter a search query')
        }
    }
    
    return (
        <nav className="bg-blue-500 p-4 sticky top-0 z-[9999]">
            <div className="container mx-auto flex items-center justify-between">
                <Link to={'/'} className="text-white font-semibold text-2xl">
                    React Ecommerce
                </Link>
                <div className="flex items-center border-2 rounded-3xl">
                    <input
                        type="text"
                        value={searchValue}
                        onChange={handleOnChange}
                        placeholder="Search..."
                        className="px-4 py-2 rounded-l-3xl outline-none"
                    />
                    {/* <Link to={`/search/${searchValue}`}> */}
                    <button onClick={handleSearch} className="px-4 py-3 text-white rounded-r-md ">
                        <FaSearch />
                    </button>
                    {/* </Link> */}
                </div>
                <FaBars onClick={handleNavbarShowHide} className='min-[789px]:hidden' color='#fff' size={20} />
                <ul className={`max-[789px]:w-full gap-5 max-[789px]:gap-2 max-[789px]:bg-blue-500 max-[789px]:px-10 max-[789px]:absolute top-16 left-0 right-0 min-[789px]:static ${isOpen ? 'flex' : 'hidden'} min-[789px]:flex max-[789px]:flex-col max-[789px]:justify-center text-lg`}>
                    <Link to={'/'}>
                        <li className={`text-${pathname === '/' ? 'white' : 'gray-300'}`}>Home</li>
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