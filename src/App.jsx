//Import Module
import { Route, Routes, useLocation, Navigate } from "react-router-dom"
import { useEffect } from "react"
import useAuthStore from "./store/authUser"
//Import Pages
import HomePage from "./pages/HomePage"
import ContactPage from "./pages/ContactPage"
import AboutPage from "./pages/AboutPage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import Wishlist from "./pages/Wishlist"
import Blog from "./pages/Blog"
import ResetPasswordPage from "./pages/ResetPasswordPage"
import CompareProduct from "./pages/CompareProduct"
import OurStore from "./pages/OurStore"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermOfServices from "./pages/TermOfServices"
import ShippingPolicy from "./pages/ShippingPolicy"
import RefundPolicy from "./pages/RefundPolicy"
import DetailProductPage from "./pages/DetailProductPage"
import DetailBlog from "./pages/DetailBlog"
import NotFound404 from "./pages/NotFound404"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
//Import AdminPage
import Dashboard from "./pages/admin/Dashboard"
import MainLayout from "./components/MainLayout"
import Customers from "./pages/admin/Customers"
import CalendarPage from "./pages/admin/Calendar"
import ManageBlog from "./pages/admin/ManageBlog"
import AddBlog from "./pages/admin/AddBlog"
import AddBlog_Category from "./pages/admin/AddBlog_Category"
import Blog_Category from "./pages/admin/Blog_Category"
import AddEditBrand from "./pages/admin/AddEditBrand"
import ManageBrand from "./pages/admin/ManageBrand"
import LoginAdmin from "./pages/admin/LoginAdmin"
import Profile from "./pages/admin/Profile"
import ManageCoupon from "./pages/admin/ManageCoupon"
import AddEditCategory from "./pages/admin/AddEditCategory"
import Product_Category from "./pages/admin/Product_Category"
import ManageProduct from "./pages/admin/ManageProduct"
import AddEditProduct from "./pages/admin/AddEditProduct"
//Import Components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import "./App.css"
import { Toaster } from "react-hot-toast"
import AddEditCoupon from "./pages/admin/AddEditCoupon"

function App() {
    const { user, isCheckingAuth, authCheck } = useAuthStore()
    const location = useLocation()
    const isAdminRoute = location.pathname.startsWith("/admin");
    const isAdmin = user?.role === "admin";

    useEffect(() => {
        authCheck(isAdminRoute ? "admin" : "user");
    }, [isAdminRoute, authCheck]);

    if (isCheckingAuth) {
		return (
			<div className='flex items-center justify-center h-screen bg-white'>
                <div>
                    <h1 className="text-black text-3xl">Loading...</h1>
                </div>
			</div>
		);
	}
    
    return (
        <>  
            {!isAdminRoute && <Navbar />}
            <Routes>
                <Route path="/*" element={<NotFound404 />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/compare-products" element={<CompareProduct />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/term-of-services" element={<TermOfServices />} />
                <Route path="/shipping-policy" element={<ShippingPolicy />} />
                <Route path="/refund-policy" element={<RefundPolicy />} />
                <Route path="/product" element={<Navigate to="/store" replace />} />
                <Route path="/store" element={<OurStore />} />
                <Route path="/search" element={<OurStore />} />
                <Route path="/:category" element={<OurStore />} />
                <Route path="/blogs" element={<Blog />} />
                <Route path="/account/login" element={<LoginPage />} />
                <Route path="/account/signup" element={<SignupPage />} />
                <Route path="/account/reset-password" element={<ResetPasswordPage />} />
                <Route path="/product/:slug" element={<DetailProductPage />} />
                <Route path="/blog/1" element={<DetailBlog />} />

                {/* Admin Routes */}
                {/* Dashboard */}
                <Route path="/admin" element={!isAdmin ? <Navigate to="/admin/login" /> : <MainLayout Element={ Dashboard } />} />
                {/* Profile */}
                <Route path="/admin/profile" element={!isAdmin ? <Navigate to="/admin/login" /> : <MainLayout Element={ Profile } />} />
                {/* Login */}
                <Route path="/admin/login" element={isAdmin ? <Navigate to="/admin" /> : <LoginAdmin />} />
                {/* Customer */}
                <Route path="/admin/customers" element={!isAdmin ? <Navigate to="/admin/login" /> : <MainLayout Element={ Customers } />} />
                {/* Calendar */}
                <Route path="/admin/calendar" element={!isAdmin ? <Navigate to="/admin/login" /> : <MainLayout Element={ CalendarPage } />} />
                {/* Blog */}
                <Route path="/admin/blogs" element={!isAdmin ? <Navigate to="/admin/login" /> : <MainLayout Element={ ManageBlog } />} />
                <Route path="/admin/blogs/add" element={!isAdmin ? <Navigate to="/admin/login" /> : <MainLayout Element={ AddBlog } />} />
                {/* Blog Category */}
                <Route path="/admin/blogs-category/add" element={!isAdmin ? <Navigate to="/admin/login" /> : <MainLayout Element={ AddBlog_Category } />} />
                <Route path="/admin/blogs-category" element={!isAdmin ? <Navigate to="/admin/login" /> : <MainLayout Element={ Blog_Category } />} />
                {/* Brand */}
                <Route path="/admin/brand/add" element={!isAdmin ? <Navigate to="/admin/login" /> : <MainLayout Element={ AddEditBrand } />} />
                <Route path="/admin/brand/edit/:id" element={!isAdmin ? <Navigate to="/admin/login" /> : <MainLayout Element={ AddEditBrand } />} />
                <Route path="/admin/brand" element={!isAdmin ? <Navigate to="/admin/login" /> : <MainLayout Element={ ManageBrand } />} />
                {/* Coupon */}
                <Route path="/admin/coupon" element={!isAdmin ? <Navigate to="/admin/login" /> : <MainLayout Element={ ManageCoupon } />} />
                <Route path="/admin/coupon/add" element={!isAdmin ? <Navigate to="/admin/login" /> : <MainLayout Element={ AddEditCoupon } />} />
                <Route path="/admin/coupon/edit/:id" element={!isAdmin ? <Navigate to="/admin/login" /> : <MainLayout Element={ AddEditCoupon } />} />
                {/* Product Category */}
                <Route path="/admin/product-category/add" element={!isAdmin ? <Navigate to="/admin/login" /> : <MainLayout Element={ AddEditCategory } />} />
                <Route path="/admin/product-category/edit/:id" element={!isAdmin ? <Navigate to="/admin/login" /> : <MainLayout Element={ AddEditCategory } />} />
                <Route path="/admin/product-category" element={!isAdmin ? <Navigate to="/admin/login" /> : <MainLayout Element={ Product_Category } />} />
                {/* Product */}
                <Route path="/admin/product/add" element={!isAdmin ? <Navigate to="/admin/login" /> : <MainLayout Element={ AddEditProduct } />} />
                <Route path="/admin/product/edit/:id" element={!isAdmin ? <Navigate to="/admin/login" /> : <MainLayout Element={ AddEditProduct } />} />
                <Route path="/admin/product" element={!isAdmin ? <Navigate to="/admin/login" /> : <MainLayout Element={ ManageProduct } />} />
            </Routes>
            {!isAdminRoute && <Footer />}
            <Toaster />
        </>
    )
};  

export default App