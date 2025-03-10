import { ChevronDown, Heart, RefreshCw, Search, ShoppingCart, UserRound, X } from "lucide-react"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import ListCart from "./ListCart";
import axios from "axios"
import Config from "../envVars"
import toast from "react-hot-toast"
import { productCategories } from "../utils/Data"
import useAuthStore from "../store/authUser";

function Navbar() {
    const [categories, setCategories] = useState([])
    const [isOpen, setIsOpen] = useState()
    const [isOpenCart, setIsOpenCart] = useState(false)
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();
    const { user, logout } = useAuthStore();

    const handleLogout = async () => {
        await logout();
    }

    const handleSearch = () => {
        if (searchQuery.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
        }
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleCart = () => {
        setIsOpenCart(!isOpenCart)
    }

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${Config.BACKEND_URL}/api/v1/product-category`, {
                    withCredentials: true
                })
                setCategories(response.data.categories)
            } catch (error) {
                console.error("Error fetching brands:", error)
                toast.error("Failed to load brands. Please try again later.")
            }
        }
        fetchCategories()
    }, [])

    return (
        <header className="max-w-full">
            <div className={`fixed inset-0 bg-black opacity-70 z-10 transition-opacity duration-300 ${isOpenCart ? 'visible opacity-70' : 'invisible opacity-0'}`} onClick={toggleCart}></div>
            <ListCart isOpenCart={isOpenCart} />
            <X className={`fixed text-red-500 top-0 right-72 md:right-96 z-20   cursor-pointer 
            transition-opacity duration-1000 ${isOpenCart ? 'visible opacity-100' : 'invisible opacity-0'}`} onClick={toggleCart} />

            <div className="border-b-2 border-gray-700 bg-black">
                <div className="flex items-center justify-between lg:px-20 px-2 py-3 text-gray-300">
                    <h3 className="text-xs">
                        Free Shipping Over $100 & Free Returns
                    </h3>
                    <div className="flex items-center justify-between">
                        <div className="border-r-2 border-gray-600 px-4">
                            <h3 className="text-xs">Hotline:(888) 4344 6000-(888) 1338 8193</h3>
                        </div>
                        <div className="flex items-center justify-between gap-4 pl-4">
                            <div className="flex sm:flex-row flex-col items-center gap-2">
                                <div className="flex items-center justify-center">
                                    <h3 className="text-xs">English</h3>
                                    <ChevronDown className="size-4" />
                                </div>
                                <div className="flex items-center justify-center">
                                    <h3 className="text-xs text-gray-300">USD $</h3>
                                    <ChevronDown className="size-4" />
                                </div>
                            </div>
                            {user && (
                                <div className="relative group">
                                    {/* Avatar and Chevron */}
                                    <div className="flex items-center justify-center gap-1 cursor-pointer">
                                        <img src="/images/avatar-admin.jpg" className="size-6 rounded-full" />
                                        <ChevronDown className="size-4" />
                                    </div>
                            
                                    {/* Dropdown Menu */}
                                    <div className="absolute top-8 right-0 bg-black rounded-md opacity-0 invisible scale-95 transform transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:scale-100 z-50">
                                        <ul className="flex flex-col py-2 text-white">
                                            <li className="px-4 py-2 hover:text-gray-500 cursor-pointer">Profile</li>
                                            <li className="px-4 py-2 hover:text-gray-500 cursor-pointer">Settings</li>
                                            <li className="px-4 py-2 hover:text-red-800 text-red-500 cursor-pointer" onClick={handleLogout}>Logout</li>
                                        </ul>
                                    </div>
                                </div>
                            )}
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
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            ></input>
                            <Search className="absolute right-0 h-full top-1/2 transform -translate-y-1/2 bg-orange-400 rounded-r-md size-8 p-2 cursor-pointer" onClick={handleSearch}/>
                        </div>
                    </div>
                    <div className="flex items-center justify-end text-gray-300 gap-2">
                        <Link to="/compare-products" className=" flex gap-1 hover:text-orange-400 cursor-pointer">
                            <RefreshCw className="text-white sm:size-10 size-6"/>
                            <h4 className="text-sm sm:block hidden">Compare Products</h4>
                        </Link>
                        <Link to="/wishlist" className="flex items-center gap-1 hover:text-orange-400 cursor-pointer">
                            <Heart className="text-white sm:size-10 size-6" />
                            <h4 className="text-sm sm:block hidden">Favorite Wishlist</h4>
                        </Link>
                        {!user && (
                            <Link to="/account/login" className="flex items-center hover:text-orange-400 cursor-pointer">
                                <UserRound className="text-white sm:size-8 size-6" />
                                <h4 className="text-sm sm:block hidden">Login</h4>
                            </Link>
                        )}
                        <Link className="relative" onClick={toggleCart}>
                            <ShoppingCart className="sm:size-8 size-6 text-yellow-600" />
                            <div className="absolute top-0 right-0 -translate-y-1 translate-x-2 flex items-center justify-center p-2 bg-orange-500 size-4 rounded-full text-xs">{user?.cart?.items?.length}</div>
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
                            <div className="absolute bg-blue-950 z-40 text-white w-full transform sm:translate-y-12 translate-y-10 -translate-x-4 top-0">
                                <ul className="block">
                                {categories.map((category, index) => {
                                    const matchedCategory = productCategories.find(cat => cat.name === category.name);
                                    const IconComponent = matchedCategory ? matchedCategory.icon : null;
                                    return (
                                        <li key={index} className="py-3 px-2 text-center">
                                            <Link to={`/` + category.name.toLowerCase()} className="hover:text-orange-400 flex items-center justify-center gap-2">
                                                {IconComponent && <IconComponent className="size-5" />} 
                                                <span className="text-base">{category.name}</span>
                                            </Link>
                                        </li>
                                    )
                                })}
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
