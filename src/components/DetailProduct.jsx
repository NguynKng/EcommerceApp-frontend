import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, Star, Heart, TrendingUpDown, Truck, Anvil, Ruler, Link2 } from "lucide-react";
import PropTypes from 'prop-types';
import { formatPriceWithDollar } from "../utils/formattedFunction";
import Config from "../envVars";
import useAuthStore from "../store/authUser";
import { handleAddWishList, handleAddCart } from "../utils/handleFunction";
import { useImagePreview } from "../hooks/useImagePreview";
import Spinner from "./Spinner";

function DetailProduct({ product }) {
    const { openImagePreview, ImagePreviewModal } = useImagePreview()
    const { user } = useAuthStore();
    const thumbnailSliderRef = useRef();
    const thumbnailIndex = product?.images.findIndex(img => img.type === "thumbnail") || 0;
    const [currentIndex, setCurrentIndex] = useState(thumbnailIndex);
    const [isLoading, setIsLoading] = useState(false);

    const handleImageLoad = () => {
        setIsLoading(false);
      };
    
    // Function to update selected image
    const updateImage = (index) => {
        if (index >= 0 && index < product?.images.length) {
            setCurrentIndex(index);
        }
    };

    // Scroll functions for thumbnail navigation
    const scrollLeft = (sliderRef) => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth / 2, behavior: "smooth" });
        }
    };

    const scrollRight = (sliderRef) => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth / 2, behavior: "smooth" });
        }
    };

    return (
        <div className="max-w-[86rem] bg-white mx-auto flex lg:flex-row flex-col gap-4 p-4">
            {/* Image Preview Modal */}
            <ImagePreviewModal />
            {/* Left Section - Image Gallery */}
            <div className="flex flex-col lg:w-[45%] w-full gap-2">
                {/* Main Image Display */}
                <div className="relative w-full h-[36rem] cursor-pointer">
                    {isLoading ? (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Spinner />
                        </div>
                    ) : (
                        <img src={product?.images?.[currentIndex]?.path 
                            ? `${Config.BACKEND_URL}/images/${product.images[currentIndex].path}` 
                            : "/images/no-thumbnail.png"}
                            className="size-full object-cover border-2 border-gray-200" 
                            alt="Selected"
                            onClick={() => openImagePreview(`${Config.BACKEND_URL}/images/` + product?.images[currentIndex].path)}
                            onLoad={handleImageLoad}
                    />
                    )}

                    {/* Left Arrow */}
                    <div className={`absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`} onClick={() => updateImage(currentIndex - 1)} >
                        <ChevronLeft className="size-6" />
                    </div>

                    {/* Right Arrow */}
                    <div className={`absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer ${currentIndex === product?.images.length - 1 && "opacity-50 cursor-not-allowed"}`} onClick={() => updateImage(currentIndex + 1)} >
                        <ChevronRight className="size-6" />
                    </div>
                    <div className="absolute right-2 bottom-2 bg-gray-200 py-1 px-3 text-sm rounded-full">
                        <span>{currentIndex+1}/{product?.images.length}</span>
                    </div>
                </div>

                {/* List Images */}
                <div className="relative w-full h-20 overflow-hidden">
                    <div className="flex overflow-x-scroll gap-2 scrollbar-hide items-center size-full transition-transform duration-500 ease-in-out" ref={thumbnailSliderRef}>
                        {product?.images.map((image, index) => (
                            <img className={`w-24 h-full cursor-pointer border-2 transition-all duration-200 ${currentIndex === index ? "border-blue-500" : "border-gray-200 hover:border-black"}`}
                                key={index} 
                                src={`${Config.BACKEND_URL}/images/` + image.path} 
                                onClick={() => updateImage(index)}
                                alt={`Thumbnail ${index + 1}`} 
                            />
                        ))}
                    </div>

                    {/* Left Arrow for Thumbnails */}
                    <div 
                        onClick={() => scrollLeft(thumbnailSliderRef)} 
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer"
                    >
                        <ChevronLeft className="size-6" />
                    </div>

                    {/* Right Arrow for Thumbnails */}
                    <div 
                        onClick={() => scrollRight(thumbnailSliderRef)}  
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer"
                    >
                        <ChevronRight className="size-6" />
                    </div>
                </div>
            </div>

            {/* Right Section - Product Details */}
            <div className="flex flex-col gap-4 lg:w-[55%] w-full pl-4">
                <h1 className="text-xl font-medium">
                    {product?.name}
                </h1>
                {product?.discount > 0 ? (
                    <div className="flex gap-2 items-center">
                        <h5 className="text-orange-500 font-medium text-xl">{formatPriceWithDollar(product?.price - ((product?.price * product?.discount)/100))}</h5>
                        <h5 className="text-gray-500 line-through font-medium">{formatPriceWithDollar(product?.price)}</h5> 
                        <div className="bg-orange-400 rounded-xl px-4 py-1">
                            <span className="text-black">-{product?.discount}%</span>
                        </div>
                    </div>
                ) : (
                    <h5 className="text-orange-500 font-medium text-xl">{formatPriceWithDollar(product?.price)}</h5> 
                )}
                <div className="flex items-center">
                    <Star className="size-4 fill-yellow-500 stroke-none" />
                    <Star className="size-4 fill-yellow-500 stroke-none" />
                    <Star className="size-4 fill-yellow-500 stroke-none" />
                    <Star className="size-4 fill-yellow-500 stroke-none" />
                    <Star className="size-4 fill-yellow-500 stroke-none" />
                    <span className="text-sm text-gray-500 ml-2">(2 reviews)</span>
                </div>
                <div className="flex gap-2 font-medium">
                    <span>Type:</span>
                    <span className="text-gray-400">{product?.category}</span>
                </div>
                <div className="flex gap-2 font-medium">
                    <span>Brand:</span>
                    <span className="text-gray-400">{product?.brand}</span>
                </div>
                <div className="flex gap-2 font-medium">
                    <span>Category:</span>
                    <span className="text-gray-400">{product?.category}</span>
                </div>
                <div className="flex gap-2 font-medium">
                    <span>Description:</span>
                    <span className="text-gray-400">{product?.description}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-medium">Tags:</span>
                    <div className="flex flex-wrap gap-2">
                        <div className="p-2 text-gray-400 text-sm">Headphones</div>
                        <div className="p-2 text-gray-400 text-sm">Laptop</div>
                        <div className="p-2 text-gray-400 text-sm">Mobile</div>
                        <div className="p-2 text-gray-400 text-sm">Oppo</div>
                    </div>
                </div>
                <div className="flex gap-2 font-medium">
                    <span>SKU:</span>
                    <span className="text-gray-400">SKU027</span>
                </div>
                <div>
                    <h1 className="font-medium">Size</h1>
                    <div className="flex flex-wrap gap-2 mt-2 items-center">
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
                </div>
                <div>
                    <h1 className="font-medium">Color</h1>
                    <div className="flex items-center gap-1 mt-2">
                        <div className="bg-amber-800 w-6 h-6 rounded-full cursor-pointer"></div>
                        <div className="bg-blue-800 w-6 h-6 rounded-full cursor-pointer"></div>
                        <div className="bg-green-800 w-6 h-6 rounded-full cursor-pointer"></div>
                    </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                    <h1 className="font-medium">Quantity</h1>
                    <input type="number" className="border-2 border-gray-200 rounded-md p-2 w-16" />
                    <div className="cursor-pointer text-white bg-blue-900 rounded-md py-2 px-4 hover:opacity-90 sm:text-base text-xs" onClick={() => handleAddCart(product._id, user)}>Add to Cart</div>
                    <div className="cursor-pointer text-black bg-orange-400 rounded-md py-2 px-4 hover:opacity-90 sm:text-base text-xs">Buy it now</div>
                </div>
                <div className="flex items-center gap-4 p-4">
                    <div className="flex items-center gap-1 cursor-pointer group" onClick={() => handleAddWishList(product._id,user)}>
                        <Heart className={`group-hover:fill-red-500 ${user?.wishlist.find((item) => item._id === product?._id) && "fill-red-500"}`} />
                        <span className="text-sm text-gray-500 group-hover:text-black">{user?.wishlist.includes(product?._id) ? "Remove from wishlist" : "Add to wishlist"}</span>
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer group">
                        <TrendingUpDown />
                        <span className="text-sm text-gray-500 group-hover:text-black">Add to compare</span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center justify-between gap-2 py-2 border-b-2 border-gray-200">
                        <div className="flex gap-2">
                            <Truck />
                            <span>Shipping & Returns</span>
                        </div>
                        <ChevronDown className="size-5 cursor-pointer" />
                    </div>
                    <div className="flex items-center justify-between gap-2 py-2 border-b-2 border-gray-200">
                        <div className="flex gap-2">
                            <Anvil />
                            <span>Materials</span>
                        </div>
                        <ChevronDown className="size-5 cursor-pointer" />
                    </div>
                    <div className="flex justify-between items-center gap-2 py-2 border-b-2 border-gray-200">
                        <div className="flex gap-2">
                            <Ruler />
                            <span>Dimensions</span>
                        </div>
                        <ChevronDown className="size-5 cursor-pointer" />
                    </div>
                    <div className="flex items-center justify-between gap-2 py-2 border-b-2 border-gray-200">
                        <div className="flex gap-2">
                            <Heart />
                            <span>Care Instructions</span>
                        </div>
                        <ChevronDown className="size-5 cursor-pointer" />
                    </div>
                    <div className="flex justify-between items-center gap-2 py-2 border-b-2 border-gray-200">
                        <div className="flex gap-2">
                            <Link2 />
                            <span>Share</span>
                        </div>
                        <ChevronDown className="size-5 cursor-pointer" />
                    </div>
                </div>
                <div className="bg-gray-100 flex flex-col items-center p-4 gap-2">
                    <h2>Payment Methods</h2>
                    <div className="flex flex-wrap gap-2 items-center">
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
    );
}

DetailProduct.propTypes = {
    product: PropTypes.object
};

export default DetailProduct;
