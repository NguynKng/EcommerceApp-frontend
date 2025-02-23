import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

function Wishlist(){
    return (
        <>
            <Meta title="Wishlist" />
            <BreadCrumb />
            <div className="py-6 px-4 bg-gray-200 min-h-screen">
                <div className="max-w-[86rem] mx-auto flex flex-wrap gap-2">
                    <div className="flex flex-col gap-1 p-2 w-[16rem]">
                        <Link className="w-full h-[14rem] relative hover:opacity-90">
                            <img src="/images/watch.jpg" className="size-full object-cover" />
                            <X className="absolute top-2 right-2 hover:text-red-500 text-gray-500" />
                        </Link>
                        <Link className="font-medium hover:underline underline-offset-2">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wifi+3G Tablet</Link>
                        <span className="font-medium text-orange-500">$100.00</span>
                    </div>
                    <div className="flex flex-col gap-1 p-2 w-[16rem]">
                        <Link className="w-full h-[14rem] relative hover:opacity-90">
                            <img src="/images/watch.jpg" className="size-full object-cover" />
                            <X className="absolute top-2 right-2 hover:text-red-500 text-gray-500" />
                        </Link>
                        <Link className="font-medium hover:underline underline-offset-2">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wifi+3G Tablet</Link>
                        <span className="font-medium text-orange-500">$100.00</span>
                    </div>
                    <div className="flex flex-col gap-1 p-2 w-[16rem]">
                        <Link className="w-full h-[14rem] relative hover:opacity-90">
                            <img src="/images/watch.jpg" className="size-full object-cover" />
                            <X className="absolute top-2 right-2 hover:text-red-500 text-gray-500" />
                        </Link>
                        <Link className="font-medium hover:underline underline-offset-2">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wifi+3G Tablet</Link>
                        <span className="font-medium text-orange-500">$100.00</span>
                    </div>
                    <div className="flex flex-col gap-1 p-2 w-[16rem]">
                        <Link className="w-full h-[14rem] relative hover:opacity-90">
                            <img src="/images/watch.jpg" className="size-full object-cover" />
                            <X className="absolute top-2 right-2 hover:text-red-500 text-gray-500" />
                        </Link>
                        <Link className="font-medium hover:underline underline-offset-2">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wifi+3G Tablet</Link>
                        <span className="font-medium text-orange-500">$100.00</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist;