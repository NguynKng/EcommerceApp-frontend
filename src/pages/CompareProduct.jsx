import { X } from "lucide-react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

function CompareProduct() {
    return (
        <>
            <Meta title="Compare Product" />
            <BreadCrumb />
            <div className="py-6 px-4 bg-gray-200 min-h-screen">
                <div className="max-w-[86rem] mx-auto flex flex-wrap gap-2">
                    <div className="flex flex-col gap-1 p-2 w-[16rem]">
                        <Link className="w-full h-[16rem] relative hover:opacity-90">
                            <img src="/images/watch.jpg" className="size-full object-cover" />
                            <X className="absolute top-2 right-2 hover:text-red-500 text-gray-500" />
                        </Link>
                        <Link className="font-medium hover:underline underline-offset-2">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wifi+3G Tablet</Link>
                        <span className="text-orange-500">$100.00</span>
                        <div className="flex flex-col">
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">Brand</h4>
                                <span className="text-gray-500 text-sm">Havells</span>
                            </div>
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">Type</h4>
                                <span className="text-gray-500 text-sm">Tablet Computers</span>
                            </div>
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">SKU</h4>
                                <span className="text-gray-500 text-sm">SKU055</span>
                            </div>
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">Availability</h4>
                                <span className="text-gray-500 text-sm">In stock</span>
                            </div>
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">Color</h4>
                                <div className="flex gap-1">
                                    <div className="w-4 h-4 bg-red-500 rounded-full inline-block"></div>
                                    <div className="w-4 h-4 bg-blue-500 rounded-full inline-block"></div>
                                    <div className="w-4 h-4 bg-yellow-500 rounded-full inline-block"></div>
                                </div>
                            </div>
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">Size</h4>
                                <div className="flex gap-1">
                                    <span className="text-gray-500 text-sm">S</span>
                                    <span className="text-gray-500 text-sm">M</span>
                                    <span className="text-gray-500 text-sm">L</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 p-2 w-[16rem]">
                        <Link className="w-full h-[16rem] relative hover:opacity-90">
                            <img src="/images/watch.jpg" className="size-full object-cover" />
                            <X className="absolute top-2 right-2 hover:text-red-500 text-gray-500" />
                        </Link>
                        <Link className="font-medium hover:underline underline-offset-2">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wifi+3G Tablet</Link>
                        <span className="text-orange-500">$100.00</span>
                        <div className="flex flex-col">
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">Brand</h4>
                                <span className="text-gray-500 text-sm">Havells</span>
                            </div>
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">Type</h4>
                                <span className="text-gray-500 text-sm">Tablet Computers</span>
                            </div>
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">SKU</h4>
                                <span className="text-gray-500 text-sm">SKU055</span>
                            </div>
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">Availability</h4>
                                <span className="text-gray-500 text-sm">In stock</span>
                            </div>
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">Color</h4>
                                <div className="flex gap-1">
                                    <div className="w-4 h-4 bg-red-500 rounded-full inline-block"></div>
                                    <div className="w-4 h-4 bg-blue-500 rounded-full inline-block"></div>
                                    <div className="w-4 h-4 bg-yellow-500 rounded-full inline-block"></div>
                                </div>
                            </div>
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">Size</h4>
                                <div className="flex gap-1">
                                    <span className="text-gray-500 text-sm">S</span>
                                    <span className="text-gray-500 text-sm">M</span>
                                    <span className="text-gray-500 text-sm">L</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 p-2 w-[16rem]">
                        <Link className="w-full h-[16rem] relative hover:opacity-90">
                            <img src="/images/watch.jpg" className="size-full object-cover" />
                            <X className="absolute top-2 right-2 hover:text-red-500 text-gray-500" />
                        </Link>
                        <Link className="font-medium hover:underline underline-offset-2">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wifi+3G Tablet</Link>
                        <span className="text-orange-500">$100.00</span>
                        <div className="flex flex-col">
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">Brand</h4>
                                <span className="text-gray-500 text-sm">Havells</span>
                            </div>
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">Type</h4>
                                <span className="text-gray-500 text-sm">Tablet Computers</span>
                            </div>
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">SKU</h4>
                                <span className="text-gray-500 text-sm">SKU055</span>
                            </div>
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">Availability</h4>
                                <span className="text-gray-500 text-sm">In stock</span>
                            </div>
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">Color</h4>
                                <div className="flex gap-1">
                                    <div className="w-4 h-4 bg-red-500 rounded-full inline-block"></div>
                                    <div className="w-4 h-4 bg-blue-500 rounded-full inline-block"></div>
                                    <div className="w-4 h-4 bg-yellow-500 rounded-full inline-block"></div>
                                </div>
                            </div>
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">Size</h4>
                                <div className="flex gap-1">
                                    <span className="text-gray-500 text-sm">S</span>
                                    <span className="text-gray-500 text-sm">M</span>
                                    <span className="text-gray-500 text-sm">L</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 p-2 w-[16rem]">
                        <Link className="w-full h-[16rem] relative hover:opacity-90">
                            <img src="/images/watch.jpg" className="size-full object-cover" />
                            <X className="absolute top-2 right-2 hover:text-red-500 text-gray-500" />
                        </Link>
                        <Link className="font-medium hover:underline underline-offset-2">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wifi+3G Tablet</Link>
                        <span className="text-orange-500">$100.00</span>
                        <div className="flex flex-col">
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">Brand</h4>
                                <span className="text-gray-500 text-sm">Havells</span>
                            </div>
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">Type</h4>
                                <span className="text-gray-500 text-sm">Tablet Computers</span>
                            </div>
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">SKU</h4>
                                <span className="text-gray-500 text-sm">SKU055</span>
                            </div>
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">Availability</h4>
                                <span className="text-gray-500 text-sm">In stock</span>
                            </div>
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">Color</h4>
                                <div className="flex gap-1">
                                    <div className="w-4 h-4 bg-red-500 rounded-full inline-block"></div>
                                    <div className="w-4 h-4 bg-blue-500 rounded-full inline-block"></div>
                                    <div className="w-4 h-4 bg-yellow-500 rounded-full inline-block"></div>
                                </div>
                            </div>
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">Size</h4>
                                <div className="flex gap-1">
                                    <span className="text-gray-500 text-sm">S</span>
                                    <span className="text-gray-500 text-sm">M</span>
                                    <span className="text-gray-500 text-sm">L</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 p-2 w-[16rem]">
                        <Link className="w-full h-[16rem] relative hover:opacity-90">
                            <img src="/images/watch.jpg" className="size-full object-cover" />
                            <X className="absolute top-2 right-2 hover:text-red-500 text-gray-500" />
                        </Link>
                        <Link className="font-medium hover:underline underline-offset-2">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wifi+3G Tablet</Link>
                        <span className="text-orange-500">$100.00</span>
                        <div className="flex flex-col">
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">Brand</h4>
                                <span className="text-gray-500 text-sm">Havells</span>
                            </div>
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">Type</h4>
                                <span className="text-gray-500 text-sm">Tablet Computers</span>
                            </div>
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">SKU</h4>
                                <span className="text-gray-500 text-sm">SKU055</span>
                            </div>
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">Availability</h4>
                                <span className="text-gray-500 text-sm">In stock</span>
                            </div>
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">Color</h4>
                                <div className="flex gap-1">
                                    <div className="w-4 h-4 bg-red-500 rounded-full inline-block"></div>
                                    <div className="w-4 h-4 bg-blue-500 rounded-full inline-block"></div>
                                    <div className="w-4 h-4 bg-yellow-500 rounded-full inline-block"></div>
                                </div>
                            </div>
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">Size</h4>
                                <div className="flex gap-1">
                                    <span className="text-gray-500 text-sm">S</span>
                                    <span className="text-gray-500 text-sm">M</span>
                                    <span className="text-gray-500 text-sm">L</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 p-2 w-[16rem]">
                        <Link className="w-full h-[16rem] relative hover:opacity-90">
                            <img src="/images/watch.jpg" className="size-full object-cover" />
                            <X className="absolute top-2 right-2 hover:text-red-500 text-gray-500" />
                        </Link>
                        <Link className="font-medium hover:underline underline-offset-2">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wifi+3G Tablet</Link>
                        <span className="text-orange-500">$100.00</span>
                        <div className="flex flex-col">
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">Brand</h4>
                                <span className="text-gray-500 text-sm">Havells</span>
                            </div>
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">Type</h4>
                                <span className="text-gray-500 text-sm">Tablet Computers</span>
                            </div>
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">SKU</h4>
                                <span className="text-gray-500 text-sm">SKU055</span>
                            </div>
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">Availability</h4>
                                <span className="text-gray-500 text-sm">In stock</span>
                            </div>
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">Color</h4>
                                <div className="flex gap-1">
                                    <div className="w-4 h-4 bg-red-500 rounded-full inline-block"></div>
                                    <div className="w-4 h-4 bg-blue-500 rounded-full inline-block"></div>
                                    <div className="w-4 h-4 bg-yellow-500 rounded-full inline-block"></div>
                                </div>
                            </div>
                            <div className="border-gray-300 border-t-2 py-3 flex justify-between">
                                <h4 className="font-medium">Size</h4>
                                <div className="flex gap-1">
                                    <span className="text-gray-500 text-sm">S</span>
                                    <span className="text-gray-500 text-sm">M</span>
                                    <span className="text-gray-500 text-sm">L</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default CompareProduct;