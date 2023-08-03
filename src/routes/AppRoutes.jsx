import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import ProductListingPage from "../pages/ProductListingPage";
import Category from "../pages/Category";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import SearchPage from "../pages/SearchPage";
import Footer from "../components/Footer";

const AppRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/signin" element={<SignIn />} />
                <Route exact path="/products" element={<ProductListingPage />} />
                <Route exact path="/category" element={<Category />} />
                <Route exact path="/detail/:id" element={<ProductDetail />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/search/:query" element={<SearchPage />} />
            </Routes>
            <Footer />
        </>
    )
}

export default AppRoutes