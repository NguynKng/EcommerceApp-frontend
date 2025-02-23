import { ChevronDown, Heart, RefreshCw, Search, ShoppingCart, UserRound, X} from "lucide-react"
import { useState } from "react";
import { Link } from "react-router-dom"
import ListCart from "./ListCart";

function Navbar() {
    const [isOpen, setIsOpen] = useState()
    const [isOpenCart, setIsOpenCart] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleCart = () => {
        setIsOpenCart(!isOpenCart)
    }

    return (
        <header className="max-w-full">
            <div className={`fixed inset-0 bg-black opacity-70 z-10 transition-opacity duration-300 ${isOpenCart ? 'visible opacity-70' : 'invisible opacity-0'}`} onClick={toggleCart}></div>
            <ListCart isOpenCart={isOpenCart} />
            <X className={`fixed text-red-500 top-0 right-72 md:right-96 z-20   cursor-pointer 
            transition-opacity duration-500 ${isOpenCart ? 'visible opacity-100' : 'invisible opacity-0'}`} onClick={toggleCart} />

            <div className="border-b-2 border-gray-700 bg-black">
                <div className="flex items-center justify-between lg:px-20 px-2 py-3 text-gray-300">
                    <h3 className="text-xs">
                        Free Shipping Over $100 & Free Returns
                    </h3>
                    <div className="flex items-center justify-between">
                        <div className="border-r-2 border-gray-600 px-4">
                            <h3 className="text-xs">Hotline:(888) 4344 6000-(888) 1338 8193</h3>
                        </div>
                        <div className="flex sm:flex-row flex-col items-center justify-between gap-2">
                            <div className="px-4 flex items-center justify-center">
                                <h3 className="text-xs">English</h3>
                                <ChevronDown className="size-4" />
                            </div>
                            <div className="px-4 flex items-center justify-center">
                                <h3 className="text-xs text-gray-300">USD $</h3>
                                <ChevronDown className="size-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-b-2 border-gray-700 bg-black">
                <div className="flex items-center justify-between lg:px-20 px-2 py-4 gap-4">
                    <div className="flex items-center gap-2 w-full">
                        <Link to="/" className="lg:text-4xl md:text-2xl sm:text-lg text-xs text-white">NguynKng</Link>
                        <div className="relative w-full lg:w-[60%]">
                            <input
                                type="text"
                                className="py-2 pl-4 rounded-md text-xs w-full"
                                placeholder="Search"
                            ></input>
                            <Search className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-400 rounded-r-md size-8 p-2 cursor-pointer"/>
                        </div>
                    </div>
                    <div className="flex items-center justify-end text-gray-300 gap-2">
                        <Link to="/compare-products" className="flex items-center gap-2 hover:text-orange-400 cursor-pointer">
                            <RefreshCw className="text-white sm:size-10 size-6"/>
                            <h4 className="text-sm sm:block hidden">Compare Products</h4>
                        </Link>
                        <Link to="/wishlist" className="flex items-center gap-2 hover:text-orange-400 cursor-pointer">
                            <Heart className="text-white sm:size-10 size-6" />
                            <h4 className="text-sm sm:block hidden">Favorite Wishlist</h4>
                        </Link>
                        <Link to="/account/login" className="flex items-center gap-2 hover:text-orange-400 cursor-pointer">
                            <UserRound className="text-white sm:size-8 size-6" />
                            <h4 className="text-sm sm:block hidden">Login</h4>
                        </Link>
                        <Link className="flex items-center gap-2" onClick={toggleCart}>
                            <ShoppingCart className="sm:size-8 size-6 text-yellow-600" />
                            <div className="max-w-14">
                                <h3 className="bg-white text-center max-w-6 mx-auto text-black rounded-md text-xs">0</h3>
                                <span className="text-xs mt-1 hover:text-orange-400">$0.00</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="border-b-2 border-gray-700 bg-blue-950">
                <div className="flex items-center lg:px-20 py-2 text-white text-sm">
                    <div className="relative flex items-center gap-2 p-2 border-r-2 border-gray-700 cursor-pointer" onClick={toggleDropdown}>
                        <img src="/images/menu.svg" alt="Menu" className="size-4" />
                        <h3 className="text-white sm:text-base text-xs">Shop Categories</h3>
                        <ChevronDown className="size-4" />
                        {isOpen && (
                            <div className="absolute bg-blue-950 z-40 text-white w-full transform translate-y-10 -translate-x-4 top-0">
                                <ul>
                                    <li className="py-3 px-2 text-center">
                                        <Link to="#" className="hover:text-orange-400">Electronics</Link>
                                    </li>
                                    <li className="py-3 px-2 text-center">
                                        <Link to="#" className="hover:text-orange-400">Electronics</Link>
                                    </li>
                                    <li className="py-3 px-2 text-center">
                                        <Link to="#" className="hover:text-orange-400">Electronics</Link>
                                    </li>
                                    <li className="py-3 px-2 text-center">
                                        <Link to="#" className="hover:text-orange-400">Electronics</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <Link to="/" className="sm:px-6 sm:text-base text-xs py-2 px-2 hover:text-orange-400">Home</Link>
                    <Link to="/store" className="sm:px-6 sm:text-base text-xs py-2 px-2 hover:text-orange-400">Our Store</Link>
                    <Link to="/blogs" className="sm:px-6 sm:text-base text-xs py-2 px-2 hover:text-orange-400">Blogs</Link>
                    <Link to="/contact" className="sm:px-6 sm:text-base text-xs py-2 px-2 hover:text-orange-400">Contact</Link>
                </div>
            </div>
        </header>
    );
}

    export default Navbar;
