import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectListingPage from "./pages/ProductListingPage";
import Navbar from "./components/Navbar";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Context from "./context/Context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import SearchPage from "./pages/SearchPage";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Context>
          <Navbar />
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/signin" element={<SignIn />} />
              <Route exact path="/products" element={<ProjectListingPage />} />
              <Route exact path="/category" element={<Category />} />
              <Route exact path="/detail/:id" element={<ProductDetail />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/search/:query" element={<SearchPage />} />
            </Routes>
          </div>
          <Footer />
        </Context >
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
