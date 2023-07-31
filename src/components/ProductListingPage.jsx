import { useContext, useEffect, useRef, useState } from 'react'
import ProductCard from './ProductCard'
// import PulseLoader from "react-spinners/PulseLoader";
import { AppContext } from '../context/Context';
import { product } from '../data/products';
import { categories } from '../data/categories';
import { brands } from '../data/brands';
import { FaStar, FaAngleDown, FaAngleUp } from 'react-icons/fa'

const ProjectListingPage = () => {
    const { products, setProducts } = useContext(AppContext);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [allBrands, setAllBrands] = useState([]);
    const [allCategories, setAllCategories] = useState([]);
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const [checkboxShowHide, setCheckboxShowHide] = useState({ categoryCheckbox: false, brandsCheckbox: false });
    const stars = Array(5).fill(0)
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

    const handleSort = (e) => {
        let value = e.target.value;
        if (value === 'low-high') {
            let sorted = products.sort((a, b) => {
                return Math.floor(a.price - b.price);
            })
            setProducts([...sorted]);
        }
        else {
            let sorted = products.sort((a, b) => {
                return Math.floor(b.price - a.price);
            })
            setProducts([...sorted]);
        }
    }

    const handleFilterOpen = () => {
        setIsFilterOpen(!isFilterOpen);
    }

    const handleClick = value => {
        setCurrentValue(value)
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    const handleCategoryCheckboxShowHide = () => {
        setCheckboxShowHide({ ...checkboxShowHide, categoryCheckbox: !checkboxShowHide.categoryCheckbox })
    }

    const handleBrandsCheckboxShowHide = () => {
        setCheckboxShowHide({ ...checkboxShowHide, brandsCheckbox: !checkboxShowHide.brandsCheckbox })
    }

    const handleFiltersReset = () => {
        setProducts(product);
        setCurrentValue(0);
        setAllBrands([])
        setAllCategories([])
    }


    useEffect(() => {
        let filteredCategoriesCards = [];
        if (allCategories.length !== 0) {
            if (currentValue > 0) {
                for (const selectedOption of allCategories) {
                    let Cards = products.filter((item) => {
                        return item.category === selectedOption
                    });
                    filteredCategoriesCards = [...filteredCategoriesCards, ...Cards];
                }

                setProducts(filteredCategoriesCards);
            }
            else {
                for (const selectedOption of allCategories) {
                    let Cards = product.filter((item) => {
                        return item.category === selectedOption
                    });
                    filteredCategoriesCards = [...filteredCategoriesCards, ...Cards];
                }

                setProducts(filteredCategoriesCards);
            }

        }
        else {
            setProducts(product);
            //   setIsLoading(false)
        }
    }, [allCategories, allBrands])


    useEffect(() => {
        let filteredBrandsCards = [];
        if (allBrands.length !== 0) {
            if (allCategories.length !== 0) {

                for (const selectedOption of allCategories) {
                    for (const singleBrand of allBrands) {
                        let Cards = product.filter((item) => {
                            return item.category === selectedOption && item.brand === singleBrand
                        });
                        filteredBrandsCards = [...filteredBrandsCards, ...Cards];
                    }
                }
            }
            else {
                if (currentValue > 0) {

                    for (const singleBrand of allBrands) {
                        let Cards = products.filter((item) => {
                            return item.brand === singleBrand
                        });
                        filteredBrandsCards = [...filteredBrandsCards, ...Cards];
                    }
                }
                else {
                    for (const singleBrand of allBrands) {
                        let Cards = product.filter((item) => {
                            return item.brand === singleBrand
                        });
                        filteredBrandsCards = [...filteredBrandsCards, ...Cards];
                    }

                }
            }
            setProducts(filteredBrandsCards);
        }
    }, [allBrands])


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

    useEffect(() => {
        if (currentValue > 0) {

            const filteredProduct = products.filter((item) => {
                return item.rating <= currentValue;
            })

            setProducts(filteredProduct);
        }

    }, [currentValue])



    return (
        <>
            <div className='flex'>
                <div ref={filterRef} className={`min-w-[20%] pl-10 max-[980px]:pl-2 max-[980px]:w-40 min-[980px]:block ${isFilterOpen ? 'block' : 'hidden'} py-10 max-[980px]:absolute max-[980px]:top-[145px] max-[980px]:h-96 max-[980px]:left-8 z-50 bg-white overflow-auto max-[980px]:shadow-lg max-[980px]:border-0 h-full`}>
                    <h2 className='text-2xl font-semibold mb-3 border-b-2 py-2'>Filter</h2>
                    <h3 className='text-lg -mb-4 font-mono'>Rating</h3>
                    <div className='flex gap-3 mt-1 py-5 border-b-2'>

                        {stars.map((_, index) => {
                            return (
                                <FaStar
                                    key={index}
                                    size={20}
                                    onClick={() => handleClick(index + 1)}
                                    onMouseOver={() => handleMouseOver(index + 1)}
                                    onMouseLeave={handleMouseLeave}
                                    color={(hoverValue || currentValue) > index ? 'green' : 'gray'}
                                    style={{
                                        cursor: "pointer"
                                    }}
                                />
                            )
                        })}
                    </div>
                    <div className='flex flex-col gap-1 border-b-2 py-2 ' >
                        <h3 onClick={handleCategoryCheckboxShowHide} className='text-lg flex items-center cursor-pointer font-mono'>Category <FaAngleDown /> </h3>

                        {
                            checkboxShowHide.categoryCheckbox &&
                            <div className='mb-6 flex flex-col gap-1'>

                                {
                                    categories.map((category) => (
                                        <label key={category.label}>
                                            <input onChange={handleMultiSelectCategories} type="checkbox" checked={allCategories.includes(category.value)} value={category.value} />
                                            <span style={{ marginLeft: '10px', cursor: 'pointer' }}>{category.label}</span>
                                        </label>
                                    ))
                                }
                            </div>
                        }

                        <h3 onClick={handleBrandsCheckboxShowHide} className='text-lg flex items-center cursor-pointer font-mono'>Brands <FaAngleDown /> </h3>
                        {checkboxShowHide.brandsCheckbox &&
                            <div className='flex flex-col gap-1'>

                                {
                                    brands.map((brand) => (
                                        <label key={brand.label}>
                                            <input onChange={handleMultiSelectBrands} type="checkbox" checked={allBrands.includes(brand.label)} value={brand.label} />
                                            <span style={{ marginLeft: '10px', cursor: 'pointer' }}>{brand.label}</span>
                                        </label>
                                    ))
                                }
                            </div>
                        }
                    </div>
                    <button onClick={handleFiltersReset} className='font-mono border border-black rounded px-2 mt-5'>Reset</button>
                </div>
                <div className='w-[85%] px-4 max-[1080px]:w-full h-full border-l-2 border-[#ccc] overflow-y-auto'>
                    <div className='flex justify-end max-[980px]:justify-between sticky top-0 bg-white z-10 px-[36px] py-7'>

                        <div onClick={handleFilterOpen} className='min-[980px]:hidden' ref={filterBtnRef}>
                            <button className='bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded text-white'>Filter</button>
                        </div>
                        <div>
                            <select onChange={handleSort} defaultValue={'select'} className='ml-3 border-2 border-black'>
                                <option value="select">Price</option>
                                <option value="low-high">lowest to highest</option>
                                <option value="high-low">highest to lowest</option>
                            </select>
                        </div>
                    </div>

                    <div className='pb-24 pt-5 grid justify-items-center gap-5 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]'>
                        {
                            products.length > 0 ?
                                products.map((product) => (
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
                                )) :
                                (
                                    <div>
                                        Nothing to show
                                    </div>
                                )

                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default ProjectListingPage