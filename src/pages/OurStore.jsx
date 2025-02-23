import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function OurStore(){

    return (
        <>
            <Meta title="Our Store" />
            <BreadCrumb />
            <div className="py-6 px-4 bg-gray-200">
                <div className="max-w-[86rem] mx-auto flex gap-4">
                    <div className="flex flex-col gap-4 w-[16rem]">
                        <div className="py-2 px-4 bg-white rounded-md w-full">
                            <h3 className="font-medium mb-4 text-lg">Shop By Categories</h3>
                            <div>
                                <Link to="#" className="block text-gray-400 text-sm leading-8 hover:text-black">Watch</Link>
                                <Link to="#" className="block text-gray-400 text-sm leading-8 hover:text-black">TV</Link>
                                <Link to="#" className="block text-gray-400 text-sm leading-8 hover:text-black">Camera</Link>
                                <Link to="#" className="block text-gray-400 text-sm leading-8 hover:text-black">Laptop</Link>
                            </div>
                        </div>
                        <div className="py-2 px-4 bg-white rounded-md w-full">
                            <h3 className="font-medium mb-4 text-lg">Filter By</h3>
                            <div className="mb-4">
                                <h3 className="font-medium text-base mb-2">Availability</h3>
                                <div className="flex gap-1 items-center mb-2 group">
                                    <input type="checkbox" className="size-4 cursor-pointer" />
                                    <label className="text-gray-400 text-sm group-hover:text-black cursor-pointer">In Stock</label>
                                </div>
                                <div className="flex gap-1 items-center mb-2 group">
                                    <input type="checkbox" className="size-4 cursor-pointer" />
                                    <label className="text-gray-400 text-sm group-hover:text-black cursor-pointer">Out of stock</label>
                                </div>
                            </div>
                            <div className="mb-4">
                                <h3 className="font-medium text-base mb-2">Price</h3>
                                <div className="flex gap-1 items-center mb-2 group">
                                    <input type="checkbox" className="size-4 cursor-pointer" />
                                    <label className="text-gray-400 text-sm group-hover:text-black cursor-pointer">$0 - $500</label>
                                </div>
                                <div className="flex gap-1 items-center mb-2 group">
                                    <input type="checkbox" className="size-4 cursor-pointer" />
                                    <label className="text-gray-400 text-sm group-hover:text-black cursor-pointer">$500 - $1000</label>
                                </div>
                                <div className="flex gap-1 items-center mb-2 group">
                                    <input type="checkbox" className="size-4 cursor-pointer" />
                                    <label className="text-gray-400 text-sm group-hover:text-black cursor-pointer">$1000 - $1500</label>
                                </div>
                                <div className="flex gap-1 items-center mb-2 group">
                                    <input type="checkbox" className="size-4 cursor-pointer" />
                                    <label className="text-gray-400 text-sm group-hover:text-black cursor-pointer">Over $1500</label>
                                </div>
                            </div>
                            <div className="mb-4">
                                <h3 className="font-medium text-base mb-2">Color</h3>
                                <div className="grid grid-cols-3 gap-2 items-center">
                                    <div className="p-1 group">
                                        <div className="bg-black w-6 h-6 rounded-full mx-auto cursor-pointer"></div>
                                        <h4 className="text-center group-hover:text-gray-500 cursor-pointer text-sm">Black</h4>
                                    </div>
                                    <div className="p-1 group">
                                        <div className="bg-white w-6 h-6 rounded-full border-gray-400 border-[1px] mx-auto cursor-pointer"></div>
                                        <h4 className="text-center group-hover:text-gray-500 cursor-pointer text-sm">White</h4>
                                    </div>
                                    <div className="p-1 group">
                                        <div className="bg-red-500 w-6 h-6 rounded-full mx-auto cursor-pointer"></div>
                                        <h4 className="text-center group-hover:text-gray-500 cursor-pointer text-sm">Red</h4>
                                    </div>
                                    <div className="p-1 group">
                                        <div className="bg-blue-500 w-6 h-6 rounded-full mx-auto cursor-pointer"></div>
                                        <h4 className="text-center group-hover:text-gray-500 cursor-pointer text-sm">Blue</h4>
                                    </div>
                                    <div className="p-1 group">
                                        <div className="bg-amber-800 w-6 h-6 rounded-full mx-auto cursor-pointer"></div>
                                        <h4 className="text-center group-hover:text-gray-500 cursor-pointer text-sm">Brown</h4>
                                    </div>
                                    <div className="p-1 group">
                                        <div className="bg-green-500 w-6 h-6 rounded-full mx-auto cursor-pointer"></div>
                                        <h4 className="text-center group-hover:text-gray-500 cursor-pointer text-sm">Green</h4>
                                    </div>
                                    <div className="p-1 group">
                                        <div className="bg-gray-500 w-6 h-6 rounded-full mx-auto cursor-pointer"></div>
                                        <h4 className="text-center group-hover:text-gray-500 cursor-pointer text-sm">Grey</h4>
                                    </div>
                                    <div className="p-1 group">
                                        <div className="bg-orange-500 w-6 h-6 rounded-full mx-auto cursor-pointer"></div>
                                        <h4 className="text-center group-hover:text-gray-500 cursor-pointer text-sm">Orange</h4>
                                    </div>
                                    <div className="p-1 group">
                                        <div className="bg-pink-500 w-6 h-6 rounded-full mx-auto cursor-pointer"></div>
                                        <h4 className="text-center group-hover:text-gray-500 cursor-pointer text-sm">Pink</h4>
                                    </div>
                                    <div className="p-1 group">
                                        <div className="bg-purple-500 w-6 h-6 rounded-full mx-auto cursor-pointer"></div>
                                        <h4 className="text-center group-hover:text-gray-500 cursor-pointer text-sm">Purple</h4>
                                    </div>
                                    <div className="p-1 group">
                                        <div className="bg-yellow-500 w-6 h-6 rounded-full mx-auto cursor-pointer"></div>
                                        <h4 className="text-center group-hover:text-gray-500 cursor-pointer text-sm">Yellow</h4>
                                    </div>
                                    <div className="p-1 group">
                                        <div className="w-6 h-6 rounded-full mx-auto cursor-pointer">
                                            <img src="/images/7colors.jpg" className="size-full rounded-full" />
                                        </div>
                                        <h4 className="text-center group-hover:text-gray-500 cursor-pointer text-sm">Multi</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <h3 className="font-medium text-base mb-2">Size</h3>
                                <div className="flex flex-wrap gap-4 items-center">
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
                                    <div className="w-10 h-10 rounded-md border-2 border-gray-200 hover:border-black p-2 text-center cursor-pointer">
                                        <h4 className="text-sm">XXL</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 bg-white rounded-md w-full">
                            <h3 className="font-medium mb-4 text-lg">Product Tag</h3>
                            <div className="flex flex-wrap gap-3 items-center">
                                <div className="py-2 px-4 bg-gray-200 text-center rounded-md">
                                    <h4 className="text-xs text-gray-500">Headphones</h4>
                                </div>
                                <div className="py-2 px-4 bg-gray-200 text-center rounded-md">
                                    <h4 className="text-xs text-gray-500">Laptop</h4>
                                </div>
                                <div className="py-2 px-4 bg-gray-200 text-center rounded-md">
                                    <h4 className="text-xs text-gray-500">Mobile</h4>
                                </div>
                                <div className="py-2 px-4 bg-gray-200 text-center rounded-md">
                                    <h4 className="text-xs text-gray-500">Oppo</h4>
                                </div>
                                <div className="py-2 px-4 bg-gray-200 text-center rounded-md">
                                    <h4 className="text-xs text-gray-500">Speaker</h4>
                                </div>
                                <div className="py-2 px-4 bg-gray-200 text-center rounded-md">
                                    <h4 className="text-xs text-gray-500">Tablet</h4>
                                </div>
                                <div className="py-2 px-4 bg-gray-200 text-center rounded-md">
                                    <h4 className="text-xs text-gray-500">Vivo</h4>
                                </div>
                                <div className="py-2 px-4 bg-gray-200 text-center rounded-md">
                                    <h4 className="text-xs text-gray-500">Wire</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[70rem]">
                        <div className="flex flex-wrap gap-4">
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
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
            </div>
        </>
    )
}

export default OurStore;