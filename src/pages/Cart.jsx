import { ChevronLeft, ChevronRight, Heart, Trash2 } from "lucide-react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useRef } from "react";

function Cart(){
    const productSliderRef = useRef(null)

    const scrollLeft = (sliderRef) => {
		if (sliderRef.current) 
            sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: "smooth" });
	};
	const scrollRight = (sliderRef) => {
		if (sliderRef.current) 
            sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: "smooth" });
	};

    return(
        <>
            <Meta title="Shopping Cart" />
            <BreadCrumb />
            <div className="pt-6 pb-20 px-2 bg-gray-200">
                <div className="max-w-[70rem] mx-auto flex md:flex-row flex-col gap-10 p-4">
                    <div className="md:w-[65%] w-full">
                        <h1 className="text-gray-500 text-2xl">Cart</h1>
                        <div className="flex flex-col mt-4 overflow-y-auto h-[50rem] scrollbar-hide">
                            <div className="py-6 border-b-2 border-gray-300">
                                <div className="flex gap-6">
                                    <Link className="min-w-[10.5rem] w-[10.5rem] h-40">
                                        <img src="/images/iphone.jpg" className="size-full" />
                                    </Link>
                                    <div className="flex justify-between sm:flex-row flex-col gap-4">
                                        <div className="flex flex-col gap-1">
                                            <Link className="text-lg font-medium">Kids headphones bulk 10 pack multi colored for students</Link>
                                            <span className="text-gray-500 text-lg">Size: S</span>
                                            <span className="text-gray-500 text-lg">Color: Black</span>
                                        </div>
                                        <span className="text-orange-500 font-medium text-lg">$100.00</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 mt-4">
                                    <div className="rounded-full flex items-center justify-center border-2 border-gray-300">
                                        <div className="p-3 hover:bg-gray-300 rounded-full cursor-pointer">
                                            <Trash2 className="size-4" />
                                        </div>
                                        <div className="p-2">
                                            <span className="">1</span>
                                        </div>
                                        <button className="text-xl py-2 px-4 hover:bg-gray-300 rounded-full">+</button>
                                    </div>
                                    <div className="rounded-full border-2 border-gray-300 p-3 hover:bg-gray-300  cursor-pointer">
                                        <Heart className="size-4" />
                                    </div>
                                </div>
                            </div>
                            <div className="py-6 border-b-2 border-gray-300">
                                <div className="flex gap-6">
                                    <Link className="min-w-[10.5rem] w-[10.5rem] h-40">
                                        <img src="/images/iphone.jpg" className="size-full" />
                                    </Link>
                                    <div className="flex justify-between sm:flex-row flex-col gap-4">
                                        <div className="flex flex-col gap-1">
                                            <Link className="text-lg font-medium">Kids headphones bulk 10 pack multi colored for students</Link>
                                            <span className="text-gray-500 text-lg">Size: S</span>
                                            <span className="text-gray-500 text-lg">Color: Black</span>
                                        </div>
                                        <span className="text-orange-500 font-medium text-lg">$100.00</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 mt-4">
                                    <div className="rounded-full flex items-center justify-center border-2 border-gray-300">
                                        <div className="p-3 hover:bg-gray-300 rounded-full cursor-pointer">
                                            <Trash2 className="size-4" />
                                        </div>
                                        <div className="p-2">
                                            <span className="">1</span>
                                        </div>
                                        <button className="text-xl py-2 px-4 hover:bg-gray-300 rounded-full">+</button>
                                    </div>
                                    <div className="rounded-full border-2 border-gray-300 p-3 hover:bg-gray-300  cursor-pointer">
                                        <Heart className="size-4" />
                                    </div>
                                </div>
                            </div>
                            <div className="py-6 border-b-2 border-gray-300">
                                <div className="flex gap-6">
                                    <Link className="min-w-[10.5rem] w-[10.5rem] h-40">
                                        <img src="/images/iphone.jpg" className="size-full" />
                                    </Link>
                                    <div className="flex justify-between sm:flex-row flex-col gap-4">
                                        <div className="flex flex-col gap-1">
                                            <Link className="text-lg font-medium">Kids headphones bulk 10 pack multi colored for students</Link>
                                            <span className="text-gray-500 text-lg">Size: S</span>
                                            <span className="text-gray-500 text-lg">Color: Black</span>
                                        </div>
                                        <span className="text-orange-500 font-medium text-lg">$100.00</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 mt-4">
                                    <div className="rounded-full flex items-center justify-center border-2 border-gray-300">
                                        <div className="p-3 hover:bg-gray-300 rounded-full cursor-pointer">
                                            <Trash2 className="size-4" />
                                        </div>
                                        <div className="p-2">
                                            <span className="">1</span>
                                        </div>
                                        <button className="text-xl py-2 px-4 hover:bg-gray-300 rounded-full">+</button>
                                    </div>
                                    <div className="rounded-full border-2 border-gray-300 p-3 hover:bg-gray-300  cursor-pointer">
                                        <Heart className="size-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-6">
                            <h1 className="text-2xl">Favourites</h1>
                            <span>Want to view your favourites?&nbsp;
                                <Link to="/account/login" className="text-gray-500 underline underline-offset-4">Join us</Link>
                                &nbsp;or&nbsp;
                                <Link to="/account/login" className="text-gray-500 underline underline-offset-4">Sign in</Link>
                            </span>
                        </div>
                    </div>
                    <div className="md:w-[35%] w-full">
                        <h1 className="text-gray-500 text-2xl">Summary</h1>
                        <div className="py-6 border-b-2 border-gray-300">
                            <div className="flex items-center justify-between">
                                <span className="text-lg">Subtotal</span>
                                <span className="text-lg font-medium">$200.00</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-lg">Estimated Delivery & Handling</span>
                                <span className="text-lg font-medium">Free</span>
                            </div>
                            <div></div>
                        </div>
                        <div className="flex items-center justify-between py-4 border-b-2 border-gray-300">
                            <span className="text-lg font-medium">Total</span>
                            <span className="text-lg font-medium">$200.00</span>
                        </div>
                        <div className="py-4">
                            <Link to="/checkout">
                                <button className="text-white text-lg bg-orange-400 w-full rounded-full p-4 hover:opacity-90">Guest Checkout</button>
                            </Link>
                            <Link to="/checkout">
                                <button className="text-white text-lg bg-orange-400 mt-4 w-full rounded-full p-4 hover:opacity-90">Member Checkout</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="max-w-[86rem] mx-auto p-4 mt-10">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl">You Might Also Like</h2>
                        <div className="flex">
                            <ChevronLeft className="hover:text-red-500 cursor-pointer" onClick={() => scrollLeft(productSliderRef)}/>
                            <ChevronRight className="hover:text-red-500 cursor-pointer" onClick={() => scrollRight(productSliderRef)}/>
                        </div>
                    </div>
                    <div className="flex overflow-x-scroll scrollbar-hide gap-4 items-center mt-6" ref={productSliderRef}>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart