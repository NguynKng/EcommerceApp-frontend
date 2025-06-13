import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import { useRef, useEffect, useState } from "react";
import DetailProduct from "../components/DetailProduct";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import Config from "../envVars";
import axios from "axios";
import  {useGetFeaturedCollection } from "../hooks/useGetProduct";

function DetailProductPage(){
    const { slug } = useParams()
    const productSliderRef = useRef(null)
    const [detailProduct, setDetailProduct] = useState()
    const { featuredCollection } = useGetFeaturedCollection()

    const scrollLeft = (sliderRef) => {
		if (sliderRef.current) 
            sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: "smooth" });
	};
	const scrollRight = (sliderRef) => {
		if (sliderRef.current) 
            sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: "smooth" });
	};

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`${Config.BACKEND_URL}/api/v1/product/slug/${slug}`,
                    { withCredentials: true }
                )
                const { product } = response.data
                setDetailProduct(product)
            } catch (error) {
                console.error(error);
                toast.error("Failed to fetch product details.");
            }
        }
        fetchProduct()
    }, [slug])

    return(
        <>
            <Meta title={`NguynKng Shop - ` + detailProduct?.name} />
            <BreadCrumb />
            <div className="sm:py-12 py-6 px-2 bg-gray-200">
                <DetailProduct product={detailProduct} />
                <div className="max-w-[86rem] mx-auto mt-4 py-4">
                    <h1 className="text-xl font-medium">Description</h1>
                    <div className="bg-white p-4 mt-2">
                        <p className="text-gray-400 text-sm">{detailProduct?.description}</p>
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
                        {featuredCollection.map((product) => {
                            return (
                                <ProductCard product={product} key={product._id} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailProductPage;