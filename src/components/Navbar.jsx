import {ChevronDown, Heart, RefreshCw, Search, ShoppingCart, UserRound} from "lucide-react"
import { useState } from "react";
import { Link } from "react-router-dom"

function Navbar() {
    const [isOpen, setIsOpen] = useState()

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="max-w-full">
            <div className="border-b-2 border-gray-700 bg-black">
                <div className="flex items-center justify-between px-20 py-3 text-gray-300">
                    <h3 className="text-xs">
                        Free Shipping Over $100 & Free Returns
                    </h3>
                    <div className="flex items-center justify-between">
                        <div className="border-r-2 border-gray-600 px-4">
                            <h3 className="text-xs">Hotline:(888) 4344 6000-(888) 1338 8193</h3>
                        </div>
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
            <div className="border-b-2 border-gray-700 bg-black">
                <div className="flex items-center justify-between px-20 py-4">
                    <div>
                        <Link to="/" className="text-3xl text-white">
                            NguynKng
                        </Link>
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            className="py-2 pl-4 rounded-md text-xs"
                            style={{ width: '600px'}}
                            placeholder="Search Product Here..."
                        ></input>
                        <Search className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-400 rounded-r-md size-8 p-2 cursor-pointer"/>
                    </div>
                    <div className="flex items-center justify-between text-gray-300">
                        <div className="px-4 py-2 flex items-center gap-2 hover:text-orange-400 cursor-pointer">
                            <RefreshCw className="text-white size-8"/>
                            <div className="max-w-14">
                                <Link className="text-xs">Compare Products</Link>
                            </div>
                        </div>
                        <div className="px-4 py-2 flex items-center gap-2 hover:text-orange-400 cursor-pointer">
                            <Heart className="text-white size-8" />
                            <div className="max-w-14">
                                <Link className="text-xs">Favourite Wishlist</Link>
                            </div>
                        </div>
                        <div className="px-4 py-2 flex items-center gap-2 hover:text-orange-400 cursor-pointer">
                            <UserRound className="text-white size-8" />
                            <div className="max-w-14">
                                <Link className="text-xs">Login</Link>
                            </div>
                        </div>
                        <div className="px-4 py-2 flex items-center gap-2">
                            <ShoppingCart className="size-8 text-yellow-600" />
                            <div className="max-w-14">
                                <h3 className="bg-white text-center max-w-6 mx-auto text-black rounded-md text-xs">0</h3>
                                <Link className="text-xs mt-1 hover:text-orange-400">$0.00</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-b-2 border-gray-700 bg-blue-950">
                <div className="flex items-center px-20 py-2 text-white text-sm">
                    <div className="relative flex items-center justify-between w-48 py-2 px-4 border-r-2 border-gray-700 cursor-pointer" onClick={toggleDropdown}>
                        <img src="/images/menu.svg" alt="Menu" className="size-4" />
                        <h3 className="text-white">Shop Categories</h3>
                        <ChevronDown className="size-4" />
                        {isOpen && (
                            <div className="absolute bg-gray-800 text-white py-2 w-48 transform translate-y-11 -translate-x-4 top-0">
                                <ul>
                                    <li className="py-2 px-4">
                                        <Link to="#" className="hover:text-orange-400">Electronics</Link>
                                    </li>
                                    <li className="py-2 px-4">
                                        <Link to="#" className="hover:text-orange-400">Electronics</Link>
                                    </li>
                                    <li className="py-2 px-4">
                                        <Link to="#" className="hover:text-orange-400">Electronics</Link>
                                    </li>
                                    <li className="py-2 px-4">
                                        <Link to="#" className="hover:text-orange-400">Electronics</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <Link to="#" className="py-2 px-6 hover:text-orange-400">Home</Link>
                    <Link to="#" className="py-2 px-6 hover:text-orange-400">Our Store</Link>
                    <Link to="#" className="py-2 px-6 hover:text-orange-400">Blogs</Link>
                    <Link to="#" className="py-2 px-6 hover:text-orange-400">Contact</Link>
                </div>
            </div>
        </header>
    );
    }

    export default Navbar;
