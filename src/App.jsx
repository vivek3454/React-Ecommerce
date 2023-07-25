// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProjectListingPage from "./components/ProductListingPage"
import Navbar from "./components/Navbar"
import Category from "./components/Category"
import Cart from "./components/Cart"
import ProductDetail from "./components/ProductDetail"
import Context from "./context/Context"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Context>
          <Navbar />
          <div>
            <Routes>
              <Route exact path="/" element={<ProjectListingPage />} />
              <Route exact path="/category" element={<Category />} />
              <Route exact path="/detail/:id" element={<ProductDetail />} />
              <Route exact path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </Context >
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
