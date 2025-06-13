import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import useAuthStore from "../store/authUser";
import Config from "../envVars";
import { formatPriceWithDollar } from "../utils/formattedFunction";

function Checkout(){
    const [address, setAddress] = useState()
    const [country, setCountry] = useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [apartment, setApartment] = useState()
    const [city, setCity] = useState()
    const [state, setState] = useState()
    const [zip, setZip] = useState()
    const {user} = useAuthStore()
    console.log(user)

    return(
        <div className="flex lg:flex-row flex-col-reverse">
            <div className="lg:w-[60vw] w-full bg-white flex justify-center lg:justify-end">
                <div className="w-[40rem] border-b-2 border-gray-200 lg:px-10 px-4 pt-4 pb-10 mt-10 flex flex-col gap-4">
                    <Link to="/" className="text-3xl">NguynKng</Link>
                    <div className="flex flex-wrap items-center gap-2">
                        <Link to="/cart">Cart</Link>
                        <ChevronRight />
                        <Link>Information</Link>
                        <ChevronRight />
                        <Link>Shipping</Link>
                        <ChevronRight />
                        <Link>Payment</Link>
                    </div>
                    <h1 className="text-xl">Contact information</h1>
                    <div className="leading-8">
                        <h1>{user?.fullName} ({user?.email})</h1>
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" className="size-4 cursor-pointer" />
                            <label>Email me with news and offers</label>
                        </div>
                    </div>
                    <div className="flex flex-col mt-4 gap-2">
                        <h1 className="text-xl">Shipping address</h1>
                        <div className="relative">
                            <input type="text" className="peer p-4 w-full border-2 border-gray-200 rounded-md" 
                                id="address"
                                name="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required/>
                            <label htmlFor="address" className={`absolute left-4 transition-all duration-300  text-gray-400  ${address ? 'text-xs top-0.5' : 'top-4 peer-focus:text-xs peer-focus:top-0.5'}`}>Address</label>
                        </div>
                        <div className="relative">
                            <select className="peer p-4 w-full border-2 border-gray-200 rounded-md appearance-none bg-white" 
                                id="country"
                                name="country"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                required>
                                <option value="" disabled selected hidden></option>
                                <option value="usa">United States</option>
                                <option value="canada">Canada</option>
                                <option value="uk">United Kingdom</option>
                                <option value="australia">Australia</option>
                            </select>
                            <label htmlFor="country" className={`absolute left-4 transition-all duration-300  text-gray-400  ${country ? 'text-xs top-0.5' : 'top-4 peer-focus:text-xs peer-focus:top-0.5'}`}>Country/Region</label>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="relative w-1/2">
                                <input type="text" className="peer p-4 w-full border-2 border-gray-200 rounded-md" 
                                    id="firstName"
                                    name="firstName"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required/>
                                <label htmlFor="firstName" className={`absolute left-4 transition-all duration-300  text-gray-400  ${firstName ? 'text-xs top-0.5' : 'top-4 peer-focus:text-xs peer-focus:top-0.5'}`}>First name (optional)</label>
                            </div>
                            <div className="relative w-1/2">
                                <input type="text" className="peer p-4 w-full border-2 border-gray-200 rounded-md" 
                                    id="lastName"
                                    name="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required/>
                                <label htmlFor="lastName" className={`absolute left-4 transition-all duration-300  text-gray-400  ${lastName ? 'text-xs top-0.5' : 'top-4 peer-focus:text-xs peer-focus:top-0.5'}`}>Last name</label>
                            </div>
                        </div>
                        <div className="relative">
                            <input type="text" className="peer p-4 w-full border-2 border-gray-200 rounded-md" 
                                id="apartment"
                                name="apartment"
                                value={apartment}
                                onChange={(e) => setApartment(e.target.value)}
                                required/>
                            <label htmlFor="apartment" className={`absolute left-4 transition-all duration-300  text-gray-400  ${apartment ? 'text-xs top-0.5' : 'top-4 peer-focus:text-xs peer-focus:top-0.5'}`}>Apartment, suite, etc, (optional)</label>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="relative w-1/3">
                                <select className="peer p-4 w-full border-2 border-gray-200 rounded-md appearance-none bg-white" 
                                    id="city"
                                    name="city"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    required>
                                    <option value="" disabled selected hidden></option>
                                    <option value="usa">United States</option>
                                    <option value="canada">Canada</option>
                                    <option value="uk">United Kingdom</option>
                                    <option value="australia">Australia</option>
                                </select>
                                <label htmlFor="city" className={`absolute left-4 transition-all duration-300  text-gray-400  ${city ? 'text-xs top-0.5' : 'top-4 peer-focus:text-xs peer-focus:top-0.5'}`}>City</label>
                            </div>
                            <div className="relative w-1/3">
                                <select className="peer p-4 w-full border-2 border-gray-200 rounded-md appearance-none bg-white" 
                                    id="state"
                                    name="state"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    required>
                                    <option value="" disabled selected hidden></option>
                                    <option value="usa">United States</option>
                                    <option value="canada">Canada</option>
                                    <option value="uk">United Kingdom</option>
                                    <option value="australia">Australia</option>
                                </select>
                                <label htmlFor="state" className={`absolute left-4 transition-all duration-300  text-gray-400  ${state ? 'text-xs top-0.5' : 'top-4 peer-focus:text-xs peer-focus:top-0.5'}`}>State</label>
                            </div>
                            <div className="relative w-1/3">
                                <input type="text" className="peer p-4 w-full border-2 border-gray-200 rounded-md" 
                                    id="zip"
                                    name="zip"
                                    value={zip}
                                    onChange={(e) => setZip(e.target.value)}
                                    required/>
                                <label htmlFor="zip" className={`absolute left-4 transition-all duration-300  text-gray-400  ${zip ? 'text-xs top-0.5' : 'top-4 peer-focus:text-xs peer-focus:top-0.5'}`}>ZIP Code</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                        <Link to="/cart" className="flex items-center gap-2">
                            <ChevronLeft />
                            <span>Return to cart</span>
                        </Link>
                        <button type="submit" className="p-4 text-white bg-red-700 hover:opacity-90 rounded-md">Place Order</button>
                    </div>
                </div>
            </div>
            <div className="lg:w-[40vw] w-full bg-gray-100 flex justify-center lg:justify-start">
                <div className="w-[32rem] lg:ml-10 p-4 pb-10 mt-10 flex flex-col">
                    <div className="flex flex-col gap-4 py-6 border-b-2 border-gray-300 overflow-y-auto h-[24rem] scrollbar-hide">
                        {user?.cart.items.map((item, index) => (
                        <div key={index} className="flex items-center gap-4">
                            <Link to={`/product/` + item.product.slug} className="min-w-16 h-16 relative">
                                <img src={`${Config.BACKEND_URL}/images/` + item?.product.images.find(img => img.type=="thumbnail").path} className="size-full object-cover" />
                                <div className="flex items-center justify-center absolute translate-x-1/3 -translate-y-1/2 text-white w-6 h-6 top-0 right-0 bg-black opacity-50 text-xs rounded-full">{item.quantity}
                                </div>
                            </Link>
                            <div className="flex items-center w-full justify-between gap-2">
                                <div className="flex flex-col gap-1">
                                    <Link className="text-lg" to={`/product/` + item.product.slug}>{item.product.name}</Link>
                                    <span>{formatPriceWithDollar(item.product.price)}</span>
                                    <span className="text-gray-400">S / Black</span>
                                </div>
                                <span className="text-xl text-orange-500">{formatPriceWithDollar(item.price)}</span>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className="py-6 border-b-2 border-gray-300">
                        <div className="flex justify-between items-center">
                            <h3 className="text-gray-400">Subtotal</h3>
                            <span className="font-medium">{formatPriceWithDollar(user?.cart.total)}</span>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <h3 className="text-gray-400">Shipping</h3>
                            <span className="font-medium">Free</span>
                        </div>
                    </div>
                    <div className=" flex justify-between items-center py-6">
                        <h3 className="font-medium text-lg">Total</h3>
                        <span className="text-green-500 text-xl font-medium">{formatPriceWithDollar(user?.cart.total)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;