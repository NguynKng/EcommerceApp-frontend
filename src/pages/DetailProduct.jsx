import { Anvil, ChevronLeft, ChevronRight, Heart, Link2, Ruler, Star, TrendingUpDown, Truck } from "lucide-react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import { useRef } from "react";

function DetailProduct(){
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
            <Meta title="Kids Headphones Bulk 10 Pack Multi Colored For Students" />
            <BreadCrumb />
            <div className="sm:py-12 py-6 px-2 bg-gray-200">
                <div className="max-w-[86rem] bg-white mx-auto flex lg:flex-row flex-col gap-4 p-4">
                    <div className="flex flex-col lg:w-[40rem] w-full gap-2">
                        <div className="w-full">
                            <img src="/images/tab.jpg" className="object-cover size-full border-2 border-gray-200" />
                        </div>
                        <div className="grid grid-cols-2 w-full gap-2">
                            <img src="/images/tab1.jpg" className="w-full h-[16rem] object-cover border-2 border-gray-200" />
                            <img src="/images/tab2.jpg" className="w-full h-[16rem] object-cover border-2 border-gray-200" />
                            <img src="/images/tab3.jpg" className="w-full h-[16rem] object-cover border-2 border-gray-200" />
                            <img src="/images/tab1.jpg" className="w-full h-[16rem] object-cover border-2 border-gray-200" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-xl font-medium">Kids Headphones Bulk 10 Pack Multi Colored For Students</h1>
                        <span className="text-orange-500 font-medium">$1000.00</span>
                        <div className="flex my-2 items-center">
                            <Star className="size-4 fill-yellow-500 stroke-none" />
                            <Star className="size-4 fill-yellow-500 stroke-none" />
                            <Star className="size-4 fill-yellow-500 stroke-none" />
                            <Star className="size-4 fill-yellow-500 stroke-none" />
                            <Star className="size-4 fill-yellow-500 stroke-none" />
                            <span className="text-sm text-gray-500 ml-2">(2 reviews)</span>
                        </div>
                        <span className="font-medium">Type : <span className="text-gray-400 text-sm">Phone</span></span>
                        <span className="font-medium">Brand : <span className="text-gray-400 text-sm">Havells</span></span>
                        <span className="font-medium">Categories : <span className="text-gray-400 text-sm">Airpod, Camera, Computer & Laptop, Headphones, Mini Speakers, Portable Speakers, Smartphone, Smart Television, Smartwatch</span></span>
                        <div className="flex items-center gap-2">
                            <span className="font-medium">Tags :</span>
                            <div className="flex flex-wrap gap-2">
                                <div className="p-2 text-gray-400 text-sm">Headphones</div>
                                <div className="p-2 text-gray-400 text-sm">Laptop</div>
                                <div className="p-2 text-gray-400 text-sm">Mobile</div>
                                <div className="p-2 text-gray-400 text-sm">Oppo</div>
                            </div>
                        </div>
                        <span className="font-medium">SKU : <span className="text-gray-400 text-sm">SKU027</span></span>
                        <h1 className="font-medium">Size</h1>
                        <div className="flex flex-wrap gap-2 items-center">
                            <div className="w-10 h-10 rounded-md border-2 border-gray-200 hover:border-black p-2 text-center cursor-pointer">
                                <h4 className="text-sm">S</h4>
                            </div>
                            <div className="w-10 h-10 rounded-md border-2 border-gray-200 hover:border-black p-2 text-center cursor-pointer">
                                <h4 className="text-sm">M</h4>
                            </div>
                            <div className="w-10 h-10 rounded-md border-2 border-gray-200 hover:border-black p-2 text-center cursor-pointer">
                                <h4 className="text-sm">L</h4>
                            </div>
                            <div className="w-10 h-10 rounded-md border-2 border-gray-200 hover:border-black p-2 text-center cursor-pointer">
                                <h4 className="text-sm">XL</h4>
                            </div>
                        </div>
                        <h1 className="font-medium">Color</h1>
                        <div className="flex items-center gap-1">
                            <div className="bg-amber-800 w-6 h-6 rounded-full cursor-pointer"></div>
                            <div className="bg-blue-800 w-6 h-6 rounded-full cursor-pointer"></div>
                            <div className="bg-green-800 w-6 h-6 rounded-full cursor-pointer"></div>
                        </div>
                        <div className="flex items-center gap-2">
                            <h1 className="font-medium">Quantity</h1>
                            <input type="number" className="border-2 border-gray-200 rounded-md p-2 w-16" />
                            <button className="text-white bg-blue-900 rounded-md py-2 px-4 hover:opacity-90 sm:text-base text-xs">Add to Cart</button>
                            <button className="text-black bg-orange-400 rounded-md py-2 px-4 hover:opacity-90 sm:text-base text-xs">Buy it now</button>
                        </div>
                        <div className="flex items-center gap-4 p-4">
                            <div className="flex items-center gap-1 cursor-pointer group">
                                <Heart className="group-hover:fill-red-500" />
                                <span className="text-sm text-gray-500 group-hover:text-black">Add to wishlist</span>
                            </div>
                            <div className="flex items-center gap-1 cursor-pointer group">
                                <TrendingUpDown />
                                <span className="text-sm text-gray-500 group-hover:text-black">Add to compare</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2 py-2 border-b-2 border-gray-200">
                                <Truck />
                                <span>Shipping & Returns</span>
                            </div>
                            <div className="flex items-center gap-2 py-2 border-b-2 border-gray-200">
                                <Anvil />
                                <span>Materials</span>
                            </div>
                            <div className="flex items-center gap-2 py-2 border-b-2 border-gray-200">
                                <Ruler />
                                <span>Dimensions</span>
                            </div>
                            <div className="flex items-center gap-2 py-2 border-b-2 border-gray-200">
                                <Heart />
                                <span>Care Instructions</span>
                            </div>
                            <div className="flex items-center gap-2 py-2 border-b-2 border-gray-200">
                                <Link2 />
                                <span>Share</span>
                            </div>
                        </div>
                        <div className="bg-gray-100 flex flex-col items-center p-4 gap-2">
                            <h2>Payment Methods</h2>
                            <div className="flex gap-2 items-center">
                                <img src="/images/visa.png" className="w-8 h-8" />
                                <img src="/images/visa.png" className="w-8 h-8" />
                                <img src="/images/visa.png" className="w-8 h-8" />
                                <img src="/images/visa.png" className="w-8 h-8" />
                                <img src="/images/visa.png" className="w-8 h-8" />
                                <img src="/images/visa.png" className="w-8 h-8" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-[86rem] mx-auto mt-4 py-4">
                    <h1 className="text-xl font-medium">Description</h1>
                    <div className="bg-white p-4 mt-2">
                        <p className="text-gray-400 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur nisi similique illum aut perferendis voluptas, quisquam obcaecati qui nobis officia. Voluptatibus in harum deleniti labore maxime officia esse eos? Repellat?</p>
                    </div>
                </div>
                <div className="max-w-[86rem] mx-auto mt-4 py-4">
                    <h1 className="text-xl font-medium">Reviews</h1>
                    <div className="bg-white p-4 mt-2">
                        <div className="p-4 border-gray-200 border-b-2">
                            <h1 className="font-medium text-lg">Customer Reviews</h1>
                            <div className="flex items-center gap-2 mt-2">
                                <div className="flex gap-1">
                                    <Star className="size-5 fill-yellow-500 stroke-none" />
                                    <Star className="size-5 fill-yellow-500 stroke-none" />
                                    <Star className="size-5 fill-yellow-500 stroke-none" />
                                    <Star className="size-5 fill-yellow-500 stroke-none" />
                                    <Star className="size-5 fill-yellow-500 stroke-none" />
                                </div>
                                <span className="text-gray-400 text-sm">2 Reviews</span>
                            </div>
                        </div>
                        <div className="p-4 border-gray-200 border-b-2 flex flex-col gap-4">
                            <h1 className="text-gray-400">Write a Review</h1>
                            <div className="flex gap-1">
                                <Star className="size-5 fill-yellow-500 stroke-none" />
                                <Star className="size-5 fill-yellow-500 stroke-none" />
                                <Star className="size-5 fill-yellow-500 stroke-none" />
                                <Star className="size-5 fill-yellow-500 stroke-none" />
                                <Star className="size-5 fill-yellow-500 stroke-none" />
                            </div>
                            <textarea className="border-2 border-gray-200 rounded-md p-2 w-full h-28" placeholder="Comments"></textarea>
                            <button className="self-end w-40 text-white bg-blue-950 rounded-full py-2 px-4 hover:opacity-90 text-sm">Submit</button>
                        </div>
                        <div className="p-4 flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <h1 className="font-medium text-lg">Nguyen Khang</h1>
                                <div className="flex gap-1">
                                    <Star className="size-5 fill-yellow-500 stroke-none" />
                                    <Star className="size-5 fill-yellow-500 stroke-none" />
                                    <Star className="size-5 fill-yellow-500 stroke-none" />
                                    <Star className="size-5 fill-yellow-500 stroke-none" />
                                    <Star className="size-5 fill-yellow-500 stroke-none" />
                                </div>
                            </div>
                            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-[86rem] mx-auto mt-4 py-4">
                    <div className="flex justify-between items-center">
                        <h2 className="font-medium text-xl">You May Like</h2>
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

export default DetailProduct;