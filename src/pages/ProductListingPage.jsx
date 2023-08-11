import { useEffect, useRef, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { product } from '../data/Products';
import { categories } from '../data/categories';
import { brands } from '../data/brands';
import { FaStar, FaAngleDown } from 'react-icons/fa';
const ProjectListingPage = () => {
    const [allProducts, setAllProducts] = useState(product);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [allBrands, setAllBrands] = useState([]);
    const [allCategories, setAllCategories] = useState([]);
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const [checkboxShowHide, setCheckboxShowHide] = useState({ categoryCheckbox: false, brandsCheckbox: false });
    const [value, setValue] = useState('');
    const stars = Array(5).fill(0);
    const filterRef = useRef();
    const filterBtnRef = useRef();


    const handleMultiSelectCategories = (e) => {
        const option = e.target.value;
        const isChecked = e.target.checked;

        if (isChecked) {
            setAllCategories([...allCategories, option]);
        } else {
            setAllCategories(allCategories.filter((label) => label !== option));
        }
    }

    const handleMultiSelectBrands = (e) => {
        const option = e.target.value;
        const isChecked = e.target.checked;

        if (isChecked) {
            setAllBrands([...allBrands, option]);
        } else {
            setAllBrands(allBrands.filter((label) => label !== option));
        }
    }

    const handleSortOption = (e) => {
        setValue(e.target.value);
    }

    const handleSort = (arr) => {
        let sorted = [];
        if (value === 'low-high') {
            sorted = [...arr].sort((a, b) => {
                return Math.floor(a.price - b.price);
            })
            setAllProducts(sorted);
        }
        else if (value === 'high-low') {
            sorted = [...arr].sort((a, b) => {
                return Math.floor(b.price - a.price);
            })
            setAllProducts(sorted);
        }
    }

    useEffect(() => {
        handleSort(allProducts);
    }, [value])


    const handleFilterOpen = () => {
        setIsFilterOpen(!isFilterOpen);
    }

    const handleClick = value => {
        setCurrentValue(value);
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue);
    }

    const handleMouseLeave = () => {
        setHoverValue(undefined);
    }

    const handleCategoryCheckboxShowHide = () => {
        setCheckboxShowHide({ ...checkboxShowHide, categoryCheckbox: !checkboxShowHide.categoryCheckbox });
    }

    const handleBrandsCheckboxShowHide = () => {
        setCheckboxShowHide({ ...checkboxShowHide, brandsCheckbox: !checkboxShowHide.brandsCheckbox });
    }

    const handleFiltersReset = () => {
        setCurrentValue(0);
        setValue('select')
        setAllBrands([]);
        setAllCategories([]);
        setAllProducts(product);
    }


    useEffect(() => {
        let filteredCards = [];

        if (allBrands.length !== 0) { // if brand is selected
            if (allCategories.length !== 0) { // if brand , category is selected
                if (currentValue > 0) { // if brand , category , rating is selected
                    
                    for (const selectedOption of allCategories) {
                        for (const singleBrand of allBrands) {
                            let Cards = product.filter((item) => {
                                return item.category === selectedOption && item.brand === singleBrand && item.rating <= currentValue;
                            });
                            filteredCards = [...filteredCards, ...Cards];
                        }
                    }
                }
                else { // if brand , category is selected and rating is not selected
                    for (const selectedOption of allCategories) {
                        for (const singleBrand of allBrands) {
                            let Cards = product.filter((item) => {
                                return item.category === selectedOption && item.brand === singleBrand;
                            });
                            filteredCards = [...filteredCards, ...Cards];
                        }
                    }
                }
            }
            else { // if brand is selected and category is not selected
                if (currentValue > 0) { // if brand , rating is selected and category is not selected
                    
                    for (const singleBrand of allBrands) {
                        let Cards = product.filter((item) => {
                            return item.brand === singleBrand && item.rating <= currentValue;
                        });
                        filteredCards = [...filteredCards, ...Cards];
                    }
                }
                else { // if brand is selected and category , rating is not selected
                    for (const singleBrand of allBrands) {
                        let Cards = product.filter((item) => {
                            return item.brand === singleBrand;
                        });
                        filteredCards = [...filteredCards, ...Cards];
                    }
                    
                }
            }
            setAllProducts(filteredCards);
        }
        else { // if brand is not selected
            if (allCategories.length !== 0) { // if category is selected and brand is not selected
                if (currentValue > 0) { // if category , rating is selected and brand is not selected
                    
                    for (const selectedOption of allCategories) {
                        let Cards = product.filter((item) => {
                            return item.category === selectedOption && item.rating <= currentValue;
                        });
                        filteredCards = [...filteredCards, ...Cards];
                    }
                }
                else { // if category is selected and brand , rating is not selected
                    for (const selectedOption of allCategories) {
                        let Cards = product.filter((item) => {
                            return item.category === selectedOption;
                        });
                        filteredCards = [...filteredCards, ...Cards];
                    }
                }
                setAllProducts(filteredCards);
            }
            else { // if rating is selected and brand, category is not selected
                if (currentValue > 0) {
                    const filteredProduct = product.filter((item) => {
                        return item.rating <= currentValue;
                    })
                    setAllProducts(filteredProduct);
                }
                else { // if nothing is selected
                    setAllProducts(product);
                }
            }
        }
        handleSort(filteredCards);
    }, [allBrands, allCategories, currentValue])
    
    useEffect(() => {
        
    }, [allBrands, allCategories, currentValue])
    


    useEffect(() => {
        const closeFilter = (e) => {
            if (filterRef.current && !filterRef.current.contains(e.target) && !filterBtnRef.current.contains(e.target)) {
                setIsFilterOpen(false);
            }
        }
        document.addEventListener('mousedown', closeFilter);
        return () => {
            document.removeEventListener('mousedown', closeFilter);
        }
    })


    return (
        <main className='flex border-b-2 border-[#ccc]'>
            <aside ref={filterRef} className={`min-w-[20%] pl-10 max-[980px]:pl-2 max-[980px]:w-40 min-[980px]:block ${isFilterOpen ? 'block' : 'hidden'} py-10 max-[980px]:absolute max-[980px]:top-[145px] max-[980px]:h-96 max-[980px]:left-8 z-50 bg-white overflow-auto max-[980px]:shadow-lg max-[980px]:border-0 h-[90vh] border-r-2 border-[#ccc] sticky top-[75px] `}>
                <h2 className='text-2xl font-semibold mb-3 border-b-2 py-2'>Filter</h2>
                <h3 className='text-lg -mb-4 font-mono'>Rating</h3>
                <ul className='flex gap-3 mt-1 py-5 border-b-2'>

                    {stars.map((_, index) => {
                        return (
                            <li key={index}>
                                <FaStar
                                    size={20}
                                    onClick={() => handleClick(index + 1)}
                                    onMouseOver={() => handleMouseOver(index + 1)}
                                    onMouseLeave={handleMouseLeave}
                                    color={(hoverValue || currentValue) > index ? 'green' : 'gray'}
                                    className='cursor-pointer'
                                />
                            </li>
                        )
                    })}
                </ul>
                <div className='flex flex-col gap-1 border-b-2 py-2 ' >
                    <h3 onClick={handleCategoryCheckboxShowHide} className='text-lg flex items-center cursor-pointer font-mono'>Category <FaAngleDown /> </h3>

                    {
                        checkboxShowHide.categoryCheckbox &&
                        <ul className='mb-6 flex flex-col gap-1'>

                            {
                                categories.map((category) => (
                                    <label key={category.label}>
                                        <li>
                                            <input onChange={handleMultiSelectCategories} type="checkbox" checked={allCategories.includes(category.value)} value={category.value} />
                                            <span style={{ marginLeft: '10px', cursor: 'pointer' }}>{category.label}</span>
                                        </li>
                                    </label>
                                ))
                            }
                        </ul>
                    }

                    <h3 onClick={handleBrandsCheckboxShowHide} className='text-lg flex items-center cursor-pointer font-mono'>Brands <FaAngleDown /> </h3>
                    {checkboxShowHide.brandsCheckbox &&
                        <ul className='flex flex-col gap-1'>
                            {
                                brands.map((brand) => (
                                    <label key={brand.label}>
                                        <li>
                                            <input onChange={handleMultiSelectBrands} type="checkbox" checked={allBrands.includes(brand.label)} value={brand.label} />
                                            <span style={{ marginLeft: '10px', cursor: 'pointer' }}>{brand.label}</span>
                                        </li>
                                    </label>
                                ))
                            }
                        </ul>
                    }
                </div>
                <button onClick={handleFiltersReset} className='font-mono border border-black rounded px-2 mt-5'>Reset</button>
            </aside>
            <section className='w-[85%] px-4 max-[1080px]:w-full h-full overflow-y-auto'>
                <div className='flex justify-end max-[980px]:justify-between sticky top-0 bg-white z-10 px-[36px] py-7'>

                    <div onClick={handleFilterOpen} className='min-[980px]:hidden' ref={filterBtnRef}>
                        <button className='bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded text-white'>Filter</button>
                    </div>
                    <div className="flex items-center">
                        price :
                        <select onChange={handleSortOption} value={value} className='ml-1 border-2 border-black'>
                            <option value="select">default</option>
                            <option value="low-high">lowest to highest</option>
                            <option value="high-low">highest to lowest</option>
                        </select>
                    </div>
                </div>

                <div className='pb-24 pt-5 grid justify-items-center gap-5 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]'>
                    {
                        allProducts.length > 0 ?
                            allProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    category={product.category}
                                    id={product.id}
                                    title={product.title}
                                    price={product.price}
                                    description={product.description}
                                    image={product.thumbnail}
                                    rating={product.rating}
                                    discount={product.discountPercentage}
                                />
                            )) :
                            (
                                <p>
                                    Nothing to show
                                </p>
                            )

                    }
                </div>

            </section>
        </main>
    )
}

export default ProjectListingPage