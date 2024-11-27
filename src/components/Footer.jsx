import { Facebook, Instagram, Send, Twitch, Twitter, Youtube } from "lucide-react"
import { Link } from "react-router-dom"


function Footer() {
  return (
    <>
        <footer className="bg-black text-white">
            <div className="border-b-2 p-2 border-gray-900">
                <div className="flex items-center justify-between max-w-6xl mx-auto p-6 my-5">
                    <div className="flex items-center gap-2">
                        <Send className="size-8" />
                        <Link className="text-xl" to="#">Sign Up For Newsletter</Link>
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            className="py-2 pl-4 rounded-md text-sm"
                            style={{ width: '600px', height: '40px' }}
                            placeholder="Your Email"
                        ></input>
                        <button className="absolute px-4 py-2 rounded-md right-1 top-1/2 -translate-y-1/2 bg-black text-xs hover:text-orange-400">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div className="border-b-2 border-gray-900">
                <div className="flex gap-14 px-4 py-2 w-11/12 mx-auto my-4">
                    <div className="flex flex-col text-left px-4 py-2">
                        <Link className="text-lg">Contact Us</Link>
                        <span className="text-gray-400 text-sm mt-4">Demo Store</span>
                        <span className="text-gray-400 text-sm">No. 1259 Freedom, New York, 11111</span>
                        <span className="text-gray-400 text-sm">United States</span>
                        <span className="text-gray-400 text-sm mt-3">+91-987654321</span>
                        <span className="text-gray-400 text-sm mt-3">nguynkng2109@gmail.com</span>
                        <div className="flex mt-3 gap-1">
                            <Youtube className="p-1 bg-gray-500 rounded-full" />
                            <Facebook className="p-1 bg-gray-500 rounded-full" />
                            <Twitter className="p-1 bg-gray-500 rounded-full" />
                            <Instagram className="p-1 bg-gray-500 rounded-full" />
                            <Twitch className="p-1 bg-gray-500 rounded-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-14 text-left w-3/4 px-4 py-2">
                        <div className="flex flex-col gap-4">
                            <Link className="text-lg">Information</Link>
                            <span className="text-gray-400 text-sm">Privacy Policy</span>
                            <span className="text-gray-400 text-sm">Refund Policy</span>
                            <span className="text-gray-400 text-sm">Shipping Policy</span>
                            <span className="text-gray-400 text-sm">Terms Of Service</span>
                            <span className="text-gray-400 text-sm">Blogs</span>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Link className="text-lg">Account</Link>
                            <span className="text-gray-400 text-sm">Search</span>
                            <span className="text-gray-400 text-sm">About Us</span>
                            <span className="text-gray-400 text-sm">Faq</span>
                            <span className="text-gray-400 text-sm">Contact</span>
                            <span className="text-gray-400 text-sm">Size Chart</span>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Link className="text-lg">Quick Links</Link>
                            <span className="text-gray-400 text-sm">Accessories</span>
                            <span className="text-gray-400 text-sm">Laptops</span>
                            <span className="text-gray-400 text-sm">Headphones</span>
                            <span className="text-gray-400 text-sm">Smart Watches</span>
                            <span className="text-gray-400 text-sm">Tablets</span>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Link className="text-lg">Our App</Link>
                            <span className="text-gray-400 text-sm">Download our App and get extra 15% Discount on your first Order..!</span>
                            <img src="/images/ggplay.png" className="border-2 border-white rounded-lg" />
                            <img src="/images/appstore.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="flex items-center justify-between mx-auto" style={{maxWidth: "90%"}}>
                    <span className="text-sm text-gray-400">@2022. Digtic Powered By Shopify</span>
                    <div className="flex items-center gap-2">
                        <img src="/images/visa.png" className="size-8" />
                        <img src="/images/visa.png" className="size-8" />
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