import { useContext, useEffect, useRef, useState } from 'react'
import ProductCard from './ProductCard'
import PulseLoader from "react-spinners/PulseLoader";
import { AppContext } from '../context/Context';
import { product } from '../data/products';
import { categories } from '../data/categories';

const ProjectListingPage = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isChecked, setIsChecked] = useState({ 'Apple': true, 'Samsung': true, 'OPPO': true, 'Huawei': true, 'Infinix': true, 'Impression of Acqua Di Gio': true, 'Royal_Mirage': true, 'Fog Scent Xpressio': true, 'Al Munakh': true, 'Lord - Al-Rehab': true, 'L\'Oreal Paris': true, 'Hemani Tea': true, 'Dermive': true, 'ROREC White Rice': true, 'Fair & Clear': true,'Saaf & Khaas': true, 'Bake Parlor Big': true, 'Baking Food Items': true, 'fauji': true, 'Dry Rose': true,'Furniture Bed Set':true });

    const [afterFilterSelected, setAfterFilterSelected] = useState({ 'Smartphones': false, 'Laptops': false, 'Fragrances': false, 'Skincare': false, 'Groceries': false, 'HomeDecoration': false, 'Furniture': false, 'Tops': false, 'Lighting': false, 'Sunglasses': false, 'Automotive': false, 'Motorcycle': false });
    const filterRef = useRef();
    const filterBtnRef = useRef();
    const { products, setProducts } = useContext(AppContext);


    const handleMultiSelectResult = ()=> {
        if (afterFilterSelected.Smartphones) {
            let allProducts = [];
            if (isChecked.Apple) {
                const filteredProduct = product.filter((item) => {
                    return item.category === "smartphones" && item.brand === 'Apple';
                })
                allProducts = [...allProducts, ...filteredProduct]
            }
            if (isChecked.Samsung) {
                const filteredProduct = product.filter((item) => {
                    return item.category === "smartphones" && item.brand === 'Samsung';
                })
                allProducts = [...allProducts, ...filteredProduct]
            }
            if (isChecked.OPPO) {
                const filteredProduct = product.filter((item) => {
                    return item.category === "smartphones" && item.brand === 'OPPO';
                })
                allProducts = [...allProducts, ...filteredProduct]
            }

            setProducts(allProducts);
        }

        if (afterFilterSelected.Laptops) {
            let allProducts = [];
            if (isChecked.Apple) {
                const filteredProduct = product.filter((item) => {
                    return item.category === "laptops" && item.brand === 'Apple';
                })
                allProducts = [...allProducts, ...filteredProduct]
            }
            if (isChecked.Samsung) {
                const filteredProduct = product.filter((item) => {
                    return item.category === "laptops" && item.brand === 'Samsung';
                })
                allProducts = [...allProducts, ...filteredProduct]
            }
            if (isChecked.OPPO) {
                const filteredProduct = product.filter((item) => {
                    return item.category === "laptops" && item.brand === 'OPPO';
                })
                allProducts = [...allProducts, ...filteredProduct]
            }
            if (isChecked.Infinix) {
                const filteredProduct = product.filter((item) => {
                    return item.category === "laptops" && item.brand === 'Infinix';
                })
                allProducts = [...allProducts, ...filteredProduct]
            }

            setProducts(allProducts);
        }

        if (afterFilterSelected.Fragrances) {
            let allProducts = [];
            if (isChecked.Royal_Mirage) {
                const filteredProduct = product.filter((item) => {
                    return item.category === "fragrances" && item.brand === 'Royal_Mirage';
                })
                allProducts = [...allProducts, ...filteredProduct]
            }
            if (isChecked['Al Munakh']) {
                const filteredProduct = product.filter((item) => {
                    return item.category === "fragrances" && item.brand === 'Al Munakh';
                })
                allProducts = [...allProducts, ...filteredProduct]
            }
            if (isChecked['Impression of Acqua Di Gio']) {
                const filteredProduct = product.filter((item) => {
                    return item.category === "fragrances" && item.brand === 'Impression of Acqua Di Gio';
                })
                allProducts = [...allProducts, ...filteredProduct]
            }
            if (isChecked['Fog Scent Xpressio']) {
                const filteredProduct = product.filter((item) => {
                    return item.category === "fragrances" && item.brand === 'Fog Scent Xpressio';
                })
                allProducts = [...allProducts, ...filteredProduct]
            }
            if (isChecked['Lord - Al-Rehab']) {
                const filteredProduct = product.filter((item) => {
                    return item.category === "fragrances" && item.brand === 'Lord - Al-Rehab';
                })
                allProducts = [...allProducts, ...filteredProduct]
            }

            setProducts(allProducts);
        }

        if (afterFilterSelected.Skincare) {
            let allProducts = [];
            if (isChecked['L\'Oreal Paris']) {
                const filteredProduct = product.filter((item) => {
                    return item.category === "skincare" && item.brand === 'L\'Oreal Paris';
                })
                allProducts = [...allProducts, ...filteredProduct]
            }
            if (isChecked['Hemani Tea']) {
                const filteredProduct = product.filter((item) => {
                    return item.category === "skincare" && item.brand === 'Hemani Tea';
                })
                allProducts = [...allProducts, ...filteredProduct]
            }
            if (isChecked['Dermive']) {
                const filteredProduct = product.filter((item) => {
                    return item.category === "skincare" && item.brand === 'Dermive';
                })
                allProducts = [...allProducts, ...filteredProduct]
            }
            if (isChecked['ROREC White Rice']) {
                const filteredProduct = product.filter((item) => {
                    return item.category === "skincare" && item.brand === 'ROREC White Rice';
                })
                allProducts = [...allProducts, ...filteredProduct]
            }
            if (isChecked['Fair & Clear']) {
                const filteredProduct = product.filter((item) => {
                    return item.category === "skincare" && item.brand === 'Fair & Clear';
                })
                allProducts = [...allProducts, ...filteredProduct]
            }
            setProducts(allProducts);
        }
        if (afterFilterSelected.Groceries) {
            let allProducts = [];
            if (isChecked['Saaf & Khaas']) {
                const filteredProduct = product.filter((item) => {
                    return item.category === "groceries" && item.brand === 'Saaf & Khaas';
                })
                allProducts = [...allProducts, ...filteredProduct]
            }
            if (isChecked['Bake Parlor Big']) {
                const filteredProduct = product.filter((item) => {
                    return item.category === "groceries" && item.brand === 'Bake Parlor Big';
                })
                allProducts = [...allProducts, ...filteredProduct]
            }
            if (isChecked['Baking Food Items']) {
                const filteredProduct = product.filter((item) => {
                    return item.category === "groceries" && item.brand === 'Baking Food Items';
                })
                allProducts = [...allProducts, ...filteredProduct]
            }
            if (isChecked['fauji']) {
                const filteredProduct = product.filter((item) => {
                    return item.category === "groceries" && item.brand === 'fauji';
                })
                allProducts = [...allProducts, ...filteredProduct]
            }
            if (isChecked['Dry Rose']) {
                const filteredProduct = product.filter((item) => {
                    return item.category === "groceries" && item.brand === 'Dry Rose';
                })
                allProducts = [...allProducts, ...filteredProduct]
            }
            setProducts(allProducts);
        }
        if (afterFilterSelected.Furniture) {
            let allProducts = [];
            if (isChecked['Furniture Bed Set']) {
                const filteredProduct = product.filter((item) => {
                    return item.category === "furniture" && item.brand === 'Furniture Bed Set';
                })
                allProducts = [...allProducts, ...filteredProduct]
            }
            if (isChecked['Bake Parlor Big']) {
                const filteredProduct = product.filter((item) => {
                    return item.category === "groceries" && item.brand === 'Bake Parlor Big';
                })
                allProducts = [...allProducts, ...filteredProduct]
            }
            if (isChecked['Baking Food Items']) {
                const filteredProduct = product.filter((item) => {
                    return item.category === "groceries" && item.brand === 'Baking Food Items';
                })
                allProducts = [...allProducts, ...filteredProduct]
            }
            if (isChecked['fauji']) {
                const filteredProduct = product.filter((item) => {
                    return item.category === "groceries" && item.brand === 'fauji';
                })
                allProducts = [...allProducts, ...filteredProduct]
            }
            if (isChecked['Dry Rose']) {
                const filteredProduct = product.filter((item) => {
                    return item.category === "groceries" && item.brand === 'Dry Rose';
                })
                allProducts = [...allProducts, ...filteredProduct]
            }
            setProducts(allProducts);
        }
    }

    const handleMultiSelect = (e) => {
        if (e.target.value === 'Apple') {
            setIsChecked({ ...isChecked, 'Apple': !isChecked.Apple });
        }
        if (e.target.value === 'Samsung') {
            setIsChecked({ ...isChecked, 'Samsung': !isChecked.Samsung });
        }
        if (e.target.value === 'OPPO') {
            setIsChecked({ ...isChecked, 'OPPO': !isChecked.OPPO });
        }
        if (e.target.value === 'Huawei') {
            setIsChecked({ ...isChecked, 'Huawei': !isChecked.Huawei });
        }
        if (e.target.value === 'Infinix') {
            setIsChecked({ ...isChecked, 'Infinix': !isChecked.Infinix });
        }
        if (e.target.value === 'Royal_Mirage') {
            setIsChecked({ ...isChecked, 'Royal_Mirage': !isChecked.Royal_Mirage });
        }
        if (e.target.value === 'Al Munakh') {
            setIsChecked({ ...isChecked, 'Al Munakh': !isChecked['Al Munakh'] });
        }
        if (e.target.value === 'Impression of Acqua Di Gio') {
            setIsChecked({ ...isChecked, 'Impression of Acqua Di Gio': !isChecked['Impression of Acqua Di Gio'] });
        }
        if (e.target.value === 'Fog Scent Xpressio') {
            setIsChecked({ ...isChecked, 'Fog Scent Xpressio': !isChecked['Fog Scent Xpressio'] });
        }
        if (e.target.value === 'Lord - Al-Rehab') {
            setIsChecked({ ...isChecked, 'Lord - Al-Rehab': !isChecked['Lord - Al-Rehab'] });
        }
        if (e.target.value === 'Hemani Tea') {
            setIsChecked({ ...isChecked, 'Hemani Tea': !isChecked['Hemani Tea'] });
        }
        if (e.target.value === 'L\'Oreal Paris') {
            setIsChecked({ ...isChecked, "L'Oreal Paris": !isChecked['L\'Oreal Paris'] });
        }
        if (e.target.value === 'Dermive') {
            setIsChecked({ ...isChecked, 'Dermive': !isChecked['Dermive'] });
        }
        if (e.target.value === 'ROREC White Rice') {
            setIsChecked({ ...isChecked, 'ROREC White Rice': !isChecked['ROREC White Rice'] });
        }
        if (e.target.value === 'Fair & Clear') {
            setIsChecked({ ...isChecked, 'Fair & Clear': !isChecked['Fair & Clear'] });
        }
        if (e.target.value === 'Saaf & Khaas') {
            setIsChecked({ ...isChecked, 'Saaf & Khaas': !isChecked['Saaf & Khaas'] });
        }
        if (e.target.value === 'Bake Parlor Big') {
            setIsChecked({ ...isChecked, 'Bake Parlor Big': !isChecked['Bake Parlor Big'] });
        }
        if (e.target.value === 'Baking Food Items') {
            setIsChecked({ ...isChecked, 'Baking Food Items': !isChecked['Baking Food Items'] });
        }
        if (e.target.value === 'fauji') {
            setIsChecked({ ...isChecked, 'fauji': !isChecked['fauji'] });
        }
        if (e.target.value === 'Dry Rose') {
            setIsChecked({ ...isChecked, 'Dry Rose': !isChecked['Dry Rose'] });
        }
        if (e.target.value === 'Furniture Bed Set') {
            setIsChecked({ ...isChecked, 'Furniture Bed Set': !isChecked['Furniture Bed Set'] });
        }


    
    }
    useEffect(() => {
        handleMultiSelectResult();
    }, [isChecked])

    const handleFilter = (e) => {
        const value = e.target.value;
        let pd = products.map((item) => item.brand)
        console.log(pd);
        if (value === 'all') {
            setProducts(product);
        }
        else if (value === 'smartphones') {
            setAfterFilterSelected({ 'Smartphones': !afterFilterSelected.Smartphones });
            const filteredProduct = product.filter((item) => {
                return item.category === "smartphones";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'laptops') {
            setAfterFilterSelected({ 'Laptops': !afterFilterSelected.Laptops });
            const filteredProduct = product.filter((item) => {
                return item.category === "laptops";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'fragrances') {
            setAfterFilterSelected({ 'Fragrances': !afterFilterSelected.Fragrances });
            const filteredProduct = product.filter((item) => {
                return item.category === "fragrances";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'skincare') {
            setAfterFilterSelected({ 'Skincare': !afterFilterSelected.Skincare });
            const filteredProduct = product.filter((item) => {
                return item.category === "skincare";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'groceries') {
            setAfterFilterSelected({ 'Groceries': !afterFilterSelected.Groceries });
            const filteredProduct = product.filter((item) => {
                return item.category === "groceries";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'home-decoration') {
            setAfterFilterSelected({ 'HomeDecoration': !afterFilterSelected.HomeDecoration });
            const filteredProduct = product.filter((item) => {
                return item.category === "home-decoration";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'furniture') {
            setAfterFilterSelected({ 'Furniture': !afterFilterSelected.Furniture });
            const filteredProduct = product.filter((item) => {
                return item.category === "furniture";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'tops') {
            setAfterFilterSelected({ 'Tops': !afterFilterSelected.Tops });
            const filteredProduct = product.filter((item) => {
                return item.category === "tops";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'lighting') {
            setAfterFilterSelected({ 'Lighting': !afterFilterSelected.Lighting });
            const filteredProduct = product.filter((item) => {
                return item.category === "lighting";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'sunglasses') {
            setAfterFilterSelected({ 'Sunglasses': !afterFilterSelected.Sunglasses });
            const filteredProduct = product.filter((item) => {
                return item.category === "sunglasses";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'automotive') {
            setAfterFilterSelected({ 'Automotive': !afterFilterSelected.Automotive });
            const filteredProduct = product.filter((item) => {
                return item.category === "automotive";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'motorcycle') {
            setAfterFilterSelected({ 'Motorcycle': !afterFilterSelected.Motorcycle });
            const filteredProduct = product.filter((item) => {
                return item.category === "motorcycle";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'womens-dresses') {
            const filteredProduct = product.filter((item) => {
                return item.category === "womens-dresses";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'womens-shoes') {
            const filteredProduct = product.filter((item) => {
                return item.category === "womens-shoes";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'mens-shirts') {
            const filteredProduct = product.filter((item) => {
                return item.category === "mens-shirts";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'mens-shoes') {
            const filteredProduct = product.filter((item) => {
                return item.category === "mens-shoes";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'mens-watches') {
            const filteredProduct = product.filter((item) => {
                return item.category === "mens-watches";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'womens-watches') {
            const filteredProduct = product.filter((item) => {
                return item.category === "womens-watches";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'womens-bags') {
            const filteredProduct = product.filter((item) => {
                return item.category === "womens-bags";
            })
            setProducts(filteredProduct);
        }
        else if (value === 'womens-jewellery') {
            const filteredProduct = product.filter((item) => {
                return item.category === "womens-jewellery";
            })
            setProducts(filteredProduct);
        }
    }
    // const getAllProducts = async () => {
    //     const res = await fetch('https://fakestoreapi.com/products')
    //     const allProducts = await res.json();
    // }

    const handleSort = (e) => {
        let value = e.target.value;
        if (value === 'low-high') {
            let sorted = products.sort((a, b) => {
                return Math.floor(a.price - b.price);
            })
            setProducts([...sorted]);
        }
        // else if (value === 'all') {
        //     setProducts(product);
        // }
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
        <>
            <div className='h-[91vh] flex'>
                <div ref={filterRef} className={`w-[15%] max-[1280px]:w-40 min-[1280px]:block ${isFilterOpen ? 'block' : 'hidden'} py-10 max-[1280px]:absolute max-[1280px]:top-32 max-[1280px]:h-96 max-[1280px]:left-8 z-50 bg-white border-[#ccc] overflow-auto max-[1280px]:shadow-lg max-[1280px]:border-0 border-r-2 h-full sticky top-9`}>
                    <h2 className='text-center text-xl font-semibold mb-3'>Filter</h2>
                    <div className='flex flex-col pl-10 max-[1280px]:pl-4 gap-1 border-b-2 pb-2 ' >
                        {
                            categories.map((category) => (
                                <div key={category.label}>

                                    <button onClick={handleFilter} value={category.value} className='border-white transition-colors w-max hover:border-black border-b-2'>{category.label}</button>
                                    {afterFilterSelected[category.label] &&
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            {
                                                category.brands.map((brand) => (
                                                    <label key={brand}>
                                                        <input onChange={handleMultiSelect} type="checkbox" checked={isChecked[brand]} value={brand} />
                                                        <span style={{ marginLeft: '10px', cursor: 'pointer' }}>{category.brands && brand}</span>
                                                    </label>

                                                ))
                                            }

                                        </div>}
                                </div>
                            ))
                        }

                    </div>
                </div>
                <div className='w-[85%] max-[1280px]:w-full h-full overflow-y-auto'>
                    <div className='flex justify-end max-[1280px]:justify-between sticky top-0 bg-white z-10 px-[36px] py-7'>
                        {/* <button onClick={handleSort} className='bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded text-white'>Filter</button> */}

                        <div onClick={handleFilterOpen} className='min-[1280px]:hidden' ref={filterBtnRef}>
                            <button className='bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded text-white'>Filter</button>
                        </div>
                        <div>
                            {/* <span className='font-semibold block bg-red-400'>Price :</span> */}
                            <select onChange={handleSort} defaultValue={'select'} className='ml-3 border-2 border-black'>
                                {/* <option value="all">all</option> */}
                                <option value="select">Price</option>
                                <option value="low-high">lowest to highest</option>
                                <option value="high-low">highest to lowest</option>
                            </select>
                        </div>
                    </div>
                    {/* <div> */}
                    <div className='pb-24 pt-5 grid justify-items-center gap-5 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]'>
                        {
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
                            ))

                        }
                    </div>
                    {/* </div> */}

                </div>
            </div>
        </>
    )
}

export default ProjectListingPage