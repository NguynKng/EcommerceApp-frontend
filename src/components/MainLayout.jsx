import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import { useState } from "react";
import { Bell, ChevronDown, ChevronLeft, CircleHelp, LogOut, Mail, Menu, Settings, UserRoundPen } from "lucide-react";
import Meta from "./Meta";
import useAuthStore from "../store/authUser";

function MainLayout({ Element }) {
    const [tab, setTab] = useState("Dashboard");
    const [isOpenNavbar, setNavbarIsOpen] = useState(true);
    const [isOpenAdminDropdown, setAdminDropdownIsOpen] = useState(false);
    const [openDropdowns, setOpenDropdowns] = useState({});
    const { user, logout } = useAuthStore();

    const handleLogout = async () => {
        await logout();
    }

    const toggleTab = (name) => {
        setTab(name)
    }

    const OpenNavbar = () => {
        setNavbarIsOpen(!isOpenNavbar)
    }

    const toggleAdminDropdown = () => {
        setAdminDropdownIsOpen(!isOpenAdminDropdown)
    }

    const toggleDropdown = (tabName) => {
        setOpenDropdowns((prev) => ({
            ...prev,
            [tabName]: !prev[tabName], // Toggle only the clicked dropdown
        }));
    };

    return (
        <>
            <Meta title={`ADMIN - ${tab}`} />
            <nav className={`fixed left-0 min-h-screen z-50 ${isOpenNavbar ? 'lg:w-[15%] w-[50%]' : 'lg:w-[7%] hidden lg:block'}`} style={{backgroundColor:"rgb(21, 40, 60)"}}>
                <div className={`relative h-28 flex items-center justify-center gap-2 p-4 ${!isOpenNavbar && 'flex-col'}`} style={{ backgroundColor: "rgb(33, 65, 98)" }}>
                    <img src="/images/avatar-2.jpg" className="size-16 rounded-full" />
                    {isOpenNavbar &&
                        <div>
                            <h2 className="text-white text-center">{user.fullName}</h2>
                            <div className="flex items-center gap-2">
                                <div className="rounded-full size-4 bg-green-500"></div>
                                <span className="text-green-500">Online</span>
                            </div>
                        </div>
                    }
                </div>
                <h1 className={`${isOpenNavbar ? 'pl-4' : 'text-center'} px-2 py-4 text-xl border-b-2 text-white border-orange-500`}>General</h1>
                <div className={`flex flex-col h-[75vh] scrollbar-hide overflow-y-auto text-gray-400 py-4 ${!isOpenNavbar && 'items-center'}`}>
                    <Link to="/admin" className={`py-4 px-6 rounded-md ${tab === 'Dashboard' ? 'text-white' : 'text-gray-400'}`} onClick={() => toggleTab("Dashboard")}>
                        <div className={`flex ${!isOpenNavbar && 'justify-center flex-col'} items-center gap-2 hover:text-white`}>
                            <img src="/images/layout.png" className="size-6" />
                            <h1>Dashboard</h1>
                        </div>
                    </Link>
                    <Link to="/admin/customers" className={`py-4 px-6 rounded-md ${tab === 'Customers' ? 'text-white' : 'text-gray-400'}`}>
                        <div className={`flex ${!isOpenNavbar && 'justify-center flex-col'} items-center gap-2 hover:text-white`} onClick={() => toggleTab("Customers")}>
                            <img src="/images/man.png" className="size-6" />
                            <h1>Customers</h1>
                        </div>
                    </Link>
                    <div className={`py-4 px-6 rounded-md`}>
                        <div className={`flex ${!isOpenNavbar ? 'flex-col justify-center' : 'justify-between'} items-center gap-2 hover:text-white cursor-pointer ${tab === 'Catalogue' ? 'text-white' : 'text-gray-400'}`}  onClick={() => toggleDropdown("Catalogue")}>
                            <div className={`flex ${!isOpenNavbar && 'flex-col justify-center'} items-center gap-2`}>
                                <img src="/images/catalogue.png" className="size-6" />
                                <h1>Catalogue</h1>
                            </div>
                            <ChevronLeft className={`transition-transform duration-300 ${openDropdowns["Catalogue"] && "-rotate-90"} size-5`} />
                        </div>
                        <div className={`flex flex-col sm:items-start items-center mt-2 sm:text-base text-xs sm:ml-4 transition-all duration-300 ease-in-out origin-top ${openDropdowns["Catalogue"] ? "opacity-100 scale-y-100 h-auto" : "opacity-0 scale-y-0 h-0"} overflow-hidden`}>   
                            <Link to="/admin/product" className="sm:px-4 py-2 hover:text-white sm:text-left text-center" onClick={() => toggleTab("Catalogue")}>Product</Link>
                            <Link to="/admin/product-category" className="sm:px-4 py-2 hover:text-white sm:text-left text-center" onClick={() => toggleTab("Catalogue")}>Category</Link>
                            <Link to="/admin/brand" className="sm:px-4 py-2 hover:text-white sm:text-left text-center" onClick={() => toggleTab("Catalogue")}>Brand</Link>
                            <Link to="/admin/coupon" className="sm:px-4 py-2 hover:text-white sm:text-left text-center" onClick={() => toggleTab("Catalogue")}>Coupon</Link>
                        </div>
                    </div>
                    <div className={`cursor-pointer py-4 px-6 rounded-md ${tab === 'Orders' ? 'text-white' : 'text-gray-400'}`}>
                        <div className={`flex ${!isOpenNavbar ? 'flex-col justify-center' : 'justify-between'} hover:text-white items-center gap-2`}>
                            <div className={`flex ${!isOpenNavbar && 'flex-col justify-center'} items-center gap-2`} onClick={() => toggleTab("Orders")}>  
                                <img src="/images/carts.png" className="size-6" />
                                <h1>Orders</h1>
                            </div>
                        </div>
                    </div>
                    <div className={`cursor-pointer py-4 px-6 rounded-md ${tab === 'Marketing' ? 'text-white' : 'text-gray-400'}`} onClick={() => toggleTab("Marketing")}>
                        <div className={`flex ${!isOpenNavbar ? 'flex-col justify-center' : 'justify-between'} hover:text-white items-center gap-2`}>
                            <div className={`flex ${!isOpenNavbar && 'flex-col justify-center'} items-center gap-2`}>
                                <img src="/images/market-analysis.png" className="size-6" />
                                <h1>Marketing</h1>
                            </div>
                        </div>
                    </div>
                    <div className={`py-4 px-6 rounded-md`}>
                        <div className={`flex ${!isOpenNavbar ? 'flex-col justify-center' : 'justify-between'} hover:text-white cursor-pointer  items-center gap-2 ${tab === 'Blogs' ? 'text-white' : 'text-gray-400'}`} onClick={() => toggleDropdown("Blogs")}>
                            <div className={`flex ${!isOpenNavbar && 'flex-col justify-center'} items-center gap-2`}>
                                <img src="/images/blogger.png" className="size-6" />
                                <h1>Blogs</h1>
                            </div>
                            <ChevronLeft className={`transition-transform duration-300 ${openDropdowns["Blogs"] && "-rotate-90"} size-5`} />
                        </div>
                        <div className={`flex flex-col sm:items-start items-center mt-2 sm:text-base text-xs sm:ml-4 transition-all duration-300 ease-in-out origin-top ${openDropdowns["Blogs"] ? "opacity-100 scale-y-100 h-auto" : "opacity-0 scale-y-0 h-0"} overflow-hidden`}>
                            <Link to="/admin/blogs" className="sm:px-4 py-2 hover:text-white sm:text-left text-center" onClick={() => toggleTab("Blogs")}>Blogs</Link>
                            <Link to="/admin/blogs-category" className="sm:px-4 py-2 hover:text-white sm:text-left text-center" onClick={() => toggleTab("Blogs")}>Category</Link>
                        </div>
                    </div>
                    <Link className={`py-4 px-6 rounded-md ${tab === 'Chat' ? 'text-white' : 'text-gray-400'}`} onClick={() => toggleTab("Chat")}>
                        <div className={`flex ${!isOpenNavbar && 'flex-col justify-center'} items-center gap-2 hover:text-white`}>
                            <img src="/images/chat.png" className="size-6" />
                            <h1>Chat</h1>
                        </div>
                    </Link>
                    <Link className={`py-4 px-6 rounded-md ${tab === 'Enquiries' ? 'text-white' : 'text-gray-400'}`} onClick={() => toggleTab("Enquiries")}>
                        <div className={`flex ${!isOpenNavbar && 'flex-col justify-center'} items-center gap-2 hover:text-white`}>
                            <img src="/images/questions.png" className="size-6" />
                            <h1>Enquiries</h1>
                        </div>
                    </Link>
                    <Link to="/admin/calendar" className={`py-4 px-6 rounded-md ${tab === 'Calendar' ? 'text-white' : 'text-gray-400'}`} onClick={() => toggleTab("Calendar")}>
                        <div className={`flex ${!isOpenNavbar && 'flex-col justify-center'} items-center gap-2 hover:text-white`}>
                            <img src="/images/calendar.png" className="size-6" />
                            <h1>Calendar</h1>
                        </div>
                    </Link>
                    <div className={`cursor-pointer py-4 px-6 rounded-md ${tab === 'Analytics' ? 'text-white' : 'text-gray-400'}`}>
                        <div className={`flex ${!isOpenNavbar ? 'flex-col justify-center' : 'justify-between'} items-center gap-2 hover:text-white`} onClick={() => toggleDropdown("Analytics")}>
                            <div className={`flex ${!isOpenNavbar && 'flex-col justify-center'} items-center gap-2`} onClick={() => toggleTab("Analytics")}>
                                <img src="/images/bar-graph.png" className="size-6" />
                                <h1>Analytics</h1>
                            </div>
                            <ChevronLeft className={`transition-transform duration-300 ${openDropdowns["Analytics"] && "-rotate-90"} size-5`} />
                        </div>
                    </div>
                    <div className={`cursor-pointer py-4 px-6 rounded-md ${tab === 'Settings' ? 'text-white' : 'text-gray-400'}`}>
                        <div className={`flex ${!isOpenNavbar ? 'flex-col justify-center' : 'justify-between'} items-center gap-2 hover:text-white`} onClick={() => toggleDropdown("Settings")}>
                            <div className={`flex ${!isOpenNavbar && 'flex-col justify-center'} items-center gap-2`} onClick={() => toggleTab("Settings")}>
                                <img src="/images/cogwheel.png" className="size-6" />
                                <h1>Settings</h1>
                            </div>
                            <ChevronLeft className={`transition ease-in-out duration-500 ${openDropdowns["Settings"] && "-rotate-90"} size-5`} />
                        </div>
                    </div>
                </div>
                <div className={`block lg:hidden rounded-r-md absolute top-1/2 right-0 translate-x-10 text-white px-1 py-4 cursor-pointer`} style={{backgroundColor:"rgb(21, 40, 60)"}} onClick={OpenNavbar} >
                    <ChevronLeft className="size-8" />
                </div>
            </nav>
            <div className={`relative z-10`}>
                <header className={`fixed w-full min-h-12 right-0 flex text-white z-10 ${isOpenNavbar ? 'lg:w-[85%]' : 'lg:w-[93%]'}`} style={{ backgroundColor: "rgb(21, 40, 60)" }}>
                    <div className="bg-orange-600 cursor-pointer flex items-center justify-center min-w-14" onClick={OpenNavbar}>
                        <Menu className="size-8" />
                    </div>
                    <div className="flex gap-2 items-center justify-between w-[83%] py-2 px-4">
                        <h1 className="text-xl sm:text-3xl">NguynKng</h1>
                        <div className="flex items-center">
                            <div className="relative px-2 cursor-pointer">
                                <Bell className="size-5" />
                                <div className="absolute top-0 right-0 -translate-y-3 -translate-x-1 flex items-center justify-center p-2 bg-orange-500 size-4 rounded-full text-xs">1</div>
                            </div>
                            <div className="relative px-2 cursor-pointer">
                                <CircleHelp className="size-5 fill-white text-black" />
                            </div>
                            <div className="relative px-2 cursor-pointer">
                                <Mail className="size-5" />
                                <div className="absolute top-0 right-0 -translate-y-3 -translate-x-1 flex items-center justify-center p-2 bg-orange-500 size-4 rounded-full text-xs">1</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative cursor-pointer bg-orange-600 min-w-[15%] hidden md:flex items-center justify-center gap-2 p-2" onClick={toggleAdminDropdown}>
                        <img src="/images/avatar-2.jpg" className="size-8 rounded-full" />
                        <h1 className="text-white text-sm">{user.fullName}</h1>
                        <ChevronDown className="size-5" />
                        {isOpenAdminDropdown && (
                            <div className="absolute border-2 p-2 border-top-none bg-white text-black z-50 w-full transform translate-y-[3.25rem] top-0">
                                <ul>
                                    <li className="flex items-center gap-2 p-2 text-center hover:bg-slate-900 hover:text-white transform transition-all duration-500 ease-in-out" onClick={() => toggleTab("Profile")}>
                                        <Link to="/admin/profile" className="flex items-center gap-2 w-full h-full">
                                            <UserRoundPen className="size-5" />
                                            My Profile
                                        </Link> 
                                    </li>
                                    <li className="flex items-center gap-2 p-2 text-center hover:bg-slate-900 hover:text-white transform transition-all duration-500 ease-in-out">
                                        <Link to="/admin/profile" className="flex items-center gap-2 w-full h-full">
                                            <Settings className="size-5" />
                                            Settings
                                        </Link> 
                                    </li>
                                    <li className="flex items-center gap-2 p-2 text-center hover:bg-slate-900 hover:text-white transform transition-all duration-500 ease-in-out">
                                        <Link to="/admin/profile" className="flex items-center gap-2 w-full h-full">
                                            <CircleHelp className="size-5" />
                                            Help
                                        </Link> 
                                    </li>   
                                    <li className="flex items-center gap-2 p-2 text-center text-red-500 hover:bg-slate-900 hover:text-white transform transition-all duration-500 ease-in-out" onClick={handleLogout}>
                                        <LogOut className="size-5 text-red-500"/>
                                        Logout
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </header>
                <div className={`absolute w-full top-12 right-0 ${isOpenNavbar ? 'lg:w-[85%]' : 'lg:w-[93%]'}`}>
                    <div className="py-4 px-8 bg-gray-200 border-b-[1px] border-black">
                        <h1 className="text-2xl">{tab}</h1>
                    </div>
                    <Element />
                </div>
            </div>
        </>
    )
}

MainLayout.propTypes = {
    Element: PropTypes.elementType.isRequired,
};

export default MainLayout