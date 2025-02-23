import { Facebook, Github, Instagram, Twitch, Twitter, Youtube } from "lucide-react"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <>
        <footer className="bg-black text-white">
            <div className="border-b-2 p-2 border-gray-900">
                <div className="flex md:flex-row flex-col items-center justify-between max-w-6xl mx-auto p-6 my-5 gap-4">
                    <div className="flex items-center gap-3">
                        <img src="/images/newsletter.png" alt="Newsletter"/>
                        <Link className="text-xl" to="/account/signup">Sign Up For Newsletter</Link>
                    </div>
                    <div className="relative w-[70%] h-[40px]">
                        <input
                            type="text"
                            className="py-2 pl-4 rounded-md text-sm w-full"
                            placeholder="Your Email"
                        ></input>
                        <button className="absolute px-4 py-2 rounded-md right-1 top-1/2 -translate-y-[55%] bg-black text-xs hover:text-orange-400">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div className="border-b-2 border-gray-900">
                <div className="flex gap-14 px-4 py-2 max-w-7xl mx-auto my-4">
                    <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 text-left p-4 gap-10">
                        <div className="flex flex-col text-left">
                            <Link to="/contact" className="text-lg hover:text-orange-400">Contact Us</Link>
                            <span className="text-gray-400 text-sm mt-4">Demo Store</span>
                            <span className="text-gray-400 text-sm">No. 1259 Freedom, New York, 11111</span>
                            <span className="text-gray-400 text-sm">United States</span>
                            <span className="text-gray-400 text-sm mt-3">+91-987654321</span>
                            <span className="text-gray-400 text-sm mt-3">nguynkng2109@gmail.com</span>
                            <div className="flex mt-3 gap-1">
                                <Link to="#">
                                    <Youtube className="p-1 bg-gray-500 rounded-full" />
                                </Link>
                                <Link to="#">
                                    <Facebook className="p-1 bg-gray-500 rounded-full" />
                                </Link>
                                <Link to="#">
                                    <Twitter className="p-1 bg-gray-500 rounded-full" />
                                </Link>
                                <Link to="#">
                                    <Instagram className="p-1 bg-gray-500 rounded-full" />
                                </Link>
                                <Link to="#">
                                    <Twitch className="p-1 bg-gray-500 rounded-full" />
                                </Link>
                                <Link to="https://github.com/NguynKng/EcommerceApp-frontend">
                                    <Github className="p-1 bg-gray-500 rounded-full" />
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Link className="text-lg hover:text-orange-400">Information</Link>
                            <Link to="/privacy-policy" className="text-gray-400 text-sm hover:underline underline-offset-2">Privacy Policy</Link>
                            <Link to="/refund-policy" className="text-gray-400 text-sm hover:underline underline-offset-2">Refund Policy</Link>
                            <Link to="/shipping-policy" className="text-gray-400 text-sm hover:underline underline-offset-2">Shipping Policy</Link>
                            <Link to="/term-of-services" className="text-gray-400 text-sm hover:underline underline-offset-2">Terms Of Service</Link>
                            <Link to="/blogs" className="text-gray-400 text-sm hover:underline underline-offset-2">Blogs</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Link className="text-lg hover:text-orange-400">Account</Link>
                            <Link className="text-gray-400 text-sm hover:underline underline-offset-2">Search</Link>
                            <Link className="text-gray-400 text-sm hover:underline underline-offset-2">About Us</Link>
                            <Link className="text-gray-400 text-sm hover:underline underline-offset-2">Faq</Link>
                            <Link to="/contact" className="text-gray-400 text-sm hover:underline underline-offset-2">Contact</Link>
                            <Link className="text-gray-400 text-sm hover:underline underline-offset-2">Size Chart</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Link className="text-lg hover:text-orange-400">Quick Links</Link>
                            <Link className="text-gray-400 text-sm hover:underline underline-offset-2">Accessories</Link>
                            <Link className="text-gray-400 text-sm hover:underline underline-offset-2">Laptops</Link>
                            <Link className="text-gray-400 text-sm hover:underline underline-offset-2">Headphones</Link>
                            <Link className="text-gray-400 text-sm hover:underline underline-offset-2">Smart Watches</Link>
                            <Link className="text-gray-400 text-sm hover:underline underline-offset-2">Tablets</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Link className="text-lg hover:text-orange-400">Our App</Link>
                            <span className="text-gray-400 text-sm">Download our App and get extra 15% Discount on your first Order..!</span>
                            <Link to="#">
                                <img src="/images/ggplay.png" className="border-2 border-white rounded-lg" />
                            </Link>
                            <Link to="#">
                                <img src="/images/appstore.png" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="flex flex-col md:flex-row items-center justify-between mx-auto gap-4 max-w-8xl">
                    <span className="text-sm text-gray-400">&copy;2024. Powered By NguynKng,{" "}
                        <Link to="https://github.com/NguynKng/EcommerceApp-frontend" className="hover:underline hover:text-white underline-offset-2">Github</Link>
                    </span>
                    <div className="flex items-center gap-2">
                        <img src="/images/visa.png" className="size-8" />
                        <img src="/images/mastercard.svg" className="size-10" />
                        <img src="/images/visa.png" className="size-8" />
                        <img src="/images/visa.png" className="size-8" />
                        <img src="/images/visa.png" className="size-8" />
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer