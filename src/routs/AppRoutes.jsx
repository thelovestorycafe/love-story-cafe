import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import MenuListing from "../pages/menu-listing/MenuListing";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import ProductDetail from "../pages/product-detail/ProductDetail";
import BookTable from "../pages/book-table/BookTable";
import BookingSuccess from "../pages/booking-success/BookingSuccess";
import Cart from "../pages/cart/Cart";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuListing />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/book-table" element={<BookTable />} />
            <Route path="/booking-success" element={<BookingSuccess />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>
    )
}

export default AppRoutes
