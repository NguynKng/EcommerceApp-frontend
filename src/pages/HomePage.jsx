import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import services from "../utils/Data";
import Meta from "../components/Meta";

function HomePage(){
    const productSliderRef = useRef(null)
    const blogSliderRef = useRef(null)
    const specialProductSliderRef = useRef(null)
    const popularProductSliderRef = useRef(null)

    const scrollLeft = (sliderRef) => {
		if (sliderRef.current) 
            sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: "smooth" });
	};
	const scrollRight = (sliderRef) => {
		if (sliderRef.current) 
            sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: "smooth" });
	};

    return (
        <>
            <Meta title="NguynKng Shop" />            
            <section className="py-12 px-10">
                <div className="flex items-center max-w-[86rem] mx-auto md:flex-row flex-col gap-4 h-auto md:h-[400px]">
                    <div className="relative w-full md:w-[600px] h-full">
                        <img src="/images/main-banner-1.jpg" className="size-full rounded-xl object-cover" />
                        <div className="absolute top-10 left-10 flex flex-col md:gap-3 gap-1 w-40 md:w-60">
                            <span className="text-red-500 text-xs font-medium">SUPERCHARGED FOR PROS.</span>
                            <span className="md:text-3xl text-md font-medium">iPad S13+ Pro</span>
                            <span className="text-xs leading-relaxed">From $999.00 or $41.62/mo. for 24 mo. Footnote*</span>
                            <button className="w-24 sm:p-3 p-1 text-xs text-white font-medium bg-black rounded-2xl hover:bg-red-500 transition ease-in-out duration-300">BUY NOW</button>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-center gap-4 w-full md:w-[800px] h-full">
                        <div className="flex sm:flex-row flex-col items-center justify-between w-full h-[48%] gap-4">
                            <div className="relative w-full md:w-[50%] h-full rounded-xl">
                                <img src="/images/catbanner-01.jpg" className="size-full rounded-xl object-cover" />
                                <div className="absolute top-10 left-10 flex flex-col gap-3 w-36">
                                    <span className="text-red-500 text-xs font-medium">BEST SALE</span>
                                    <span className="text-xl font-medium">Laptops Max</span>
                                    <span className="text-xs">From $1699.00 or $64.62/mo.</span>
                                </div>
                            </div>
                            <div className="relative w-full md:w-[50%] h-full rounded-xl">
                                <img src="/images/catbanner-03.jpg" className="size-full rounded-xl object-cover" />
                                <div className="absolute top-10 left-10 flex flex-col gap-3 w-36">
                                    <span className="text-red-500 text-xs font-medium">NEW ARRIVAL</span>
                                    <span className="text-xl font-medium">Buy iPad Air</span>
                                    <span className="text-xs">From $599 or $49.91/mo. for 12 mo.</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-between w-full h-[48%] gap-4">
                            <div className="relative w-full md:w-[50%] h-full rounded-xl">
                                <img src="/images/catbanner-02.jpg" className="size-full rounded-xl object-cover" />
                                <div className="absolute top-10 left-10 flex flex-col gap-3 w-36">
                                    <span className="text-red-500 text-xs font-medium">15% OFF</span>
                                    <span className="text-xl font-medium">Smartwatch 7</span>
                                    <span className="text-xs">Shop the latest band styles and colors.</span>        
                                </div>
                            </div>
                            <div className="relative w-full md:w-[50%] h-full rounded-xl">
                                <img src="/images/catbanner-04.jpg" className="size-full rounded-xl object cover" />
                                <div className="absolute top-10 left-10 flex flex-col gap-3 w-36">
                                    <span className="text-red-500 text-xs font-medium">FREE ENGRAVING</span>
                                    <span className="text-xl font-medium">AirPods Max</span>
                                    <span className="text-xs">High-fidelity playback & ultra-low distortion.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 px-10 bg-gray-200">
                <div className="max-w-[86rem] mx-auto flex items-center justify-between gap-2">
                {services.map((service, index) => (
                    <div key={index} className="flex sm:flex-row flex-col items-center justify-center  gap-4 w-[20%]">
                        <img src={service.image} alt={service.title} className="size-8"/>
                        <div>
                            <h5 className="font-medium text-xs sm:text-base">{service.title}</h5>
                            <h6 className="text-xs text-gray-500">{service.tagline}</h6>
                        </div>
                    </div>
                ))}
                </div>
            </section>
            <section className="px-10 pb-6 bg-gray-200">
                <div className="max-w-[86rem] mx-auto flex flex-wrap items-center justify-between px-4 py-6 bg-white">
                    <div className="flex items-center gap-4 w-[16rem] p-4">
                        <div>
                            <h5 className="font-medium text-sm">Computers & Laptop</h5>
                            <h6 className="text-xs text-gray-500">10 items</h6>
                        </div>
                        <img src="/images/laptop.jpg" className="w-20 h-18 object-cover" />
                    </div>
                    <div className="flex items-center justify-between gap-4 w-[16rem] p-4">
                        <div>
                            <h5 className="font-medium text-sm">Camera & Videos</h5>
                            <h6 className="text-xs text-gray-500">10 items</h6>
                        </div>
                        <img src="/images/camera.jpg" className="w-20 h-18 object-cover"/>
                    </div >
                    <div className="flex items-center justify-between gap-4 w-[16rem] p-4">
                        <div>
                            <h5 className="font-medium text-sm">Smart Television</h5>
                            <h6 className="text-xs text-gray-500">10 items</h6>
                        </div>
                        <img src="/images/tv.jpg" className="w-20 h-18 object-cover"/>
                    </div>
                    <div className="flex items-center justify-between gap-4 w-[16rem] p-4">
                        <div>
                            <h5 className="font-medium text-sm">Smartwatches</h5>
                            <h6 className="text-xs text-gray-500">10 items</h6>
                        </div>
                        <img src="/images/watch.jpg" className="w-20 h-18 object-cover"/>
                    </div>
                    <div className="flex items-center justify-between gap-4 w-[16rem] p-4">
                        <div>
                            <h5 className="font-medium text-sm">Music & Gaming</h5>
                            <h6 className="text-xs text-gray-500">10 items</h6>
                        </div>
                        <img src="/images/laptop.jpg" className="w-20 h-18 object-cover"/>
                    </div>
                    <div className="flex items-center justify-between gap-4 w-[16rem] p-4">
                        <div>
                            <h5 className="font-medium text-sm">Mobiles & Tablets</h5>
                            <h6 className="text-xs text-gray-500">10 items</h6>
                        </div>
                        <img src="/images/laptop.jpg" className="w-20 h-18 object-cover"/>
                    </div>
                    <div className="flex items-center justify-between gap-4 w-[16rem] p-4">
                        <div>
                            <h5 className="font-medium text-sm">Headphones</h5>
                            <h6 className="text-xs text-gray-500">10 items</h6>
                        </div>
                        <img src="/images/headphone.jpg" className="w-20 h-18 object-cover"/>
                    </div>
                    <div className="flex items-center justify-between gap-4 w-[16rem] p-4">
                        <div>
                            <h5 className="font-medium text-sm">Accessories</h5>
                            <h6 className="text-xs text-gray-500">10 items</h6>
                        </div>
                        <img src="/images/acc.jpg" className="w-20 h-18 object-cover"/>
                    </div>
                    <div className="flex items-center justify-between gap-4 w-[16rem] p-4">
                        <div>
                            <h5 className="font-medium text-sm">Portable Speakers</h5>
                            <h6 className="text-xs text-gray-500">10 items</h6>
                        </div>
                        <img src="/images/speaker.jpg" className="w-20 h-18 object-cover"/>
                    </div>
                    <div className="flex items-center justify-between gap-4 w-[16rem] p-4">
                        <div>
                            <h5 className="font-medium text-sm">Home Appliances</h5>
                            <h6 className="text-xs text-gray-500">10 items</h6>
                        </div>
                        <img src="/images/homeapp.jpg" className="w-20 h-18 object-cover"/>
                    </div>
                </div>
            </section>
            <section className="py-12 px-10 bg-gray-200">
                <div className="max-w-[86rem] mx-auto">
                    <div className="flex justify-between items-center">
                        <h2 className="font-medium text-xl">Featured Collection</h2>
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
            </section>
            <section className="py-12 px-10 bg-gray-200">
                <div className="max-w-[86rem] mx-auto flex flex-wrap sm:flex-nowrap items-center justify-center gap-4">
                    <Link className="w-[24rem] bg-white rounded-md hover:scale-95 ease-in-out transition-all duration-300">
                        <div className="px-6 py-4">
                            <h6 className="text-xs text-gray-500 leading-6">BIG SCREEN</h6>
                            <h5 className="font-medium text-xl leading-6">Smart Watch Series 7</h5>
                            <h6 className="text-xs text-gray-500 leading-6">From $399 or $16.62/mo. for 24 mo</h6>
                        </div>
                        <div className="w-full relative">
                            <img src="/images/tab3.jpg" className="size-full rounded-b-md object-cover" />
                        </div>
                    </Link>
                    <Link className="w-[24rem] bg-white rounded-md hover:scale-95 ease-in-out transition-all duration-300">
                        <div className="px-6 py-4">
                            <h6 className="text-xs text-gray-500 leading-6">BIG SCREEN</h6>
                            <h5 className="font-medium text-xl leading-6">Smart Watch Series 7</h5>
                            <h6 className="text-xs text-gray-500 leading-6">From $399 or $16.62/mo. for 24 mo</h6>
                        </div>
                        <div className="w-full">
                            <img src="/images/tab3.jpg" className="size-full rounded-b-md object-cover" />
                        </div>
                    </Link>
                    <Link className="w-[24rem] bg-white rounded-md hover:scale-95 ease-in-out transition-all duration-300">
                        <div className="px-6 py-4">
                            <h6 className="text-xs text-gray-500 leading-6">BIG SCREEN</h6>
                            <h5 className="font-medium text-xl leading-6">Smart Watch Series 7</h5>
                            <h6 className="text-xs text-gray-500 leading-6">From $399 or $16.62/mo. for 24 mo</h6>
                        </div>
                        <div className="w-full">
                            <img src="/images/tab3.jpg" className="size-full rounded-b-md object-cover" />
                        </div>
                    </Link>
                    <Link className="w-[24rem] bg-white rounded-md hover:scale-95 ease-in-out transition-all duration-300">
                        <div className="px-6 py-4">
                            <h6 className="text-xs text-gray-500 leading-6">BIG SCREEN</h6>
                            <h5 className="font-medium text-xl leading-6">Smart Watch Series 7</h5>
                            <h6 className="text-xs text-gray-500 leading-6">From $399 or $16.62/mo. for 24 mo</h6>
                        </div>
                        <div className="w-full">
                            <img src="/images/tab3.jpg" className="size-full rounded-b-md object-cover" />
                        </div>
                    </Link>
                </div>
            </section>
            <section className="py-12 px-10 bg-gray-200">
                <div className="max-w-[86rem] mx-auto">
                    <div className="flex justify-between items-center">
                        <h2 className="font-medium text-xl">Special Products</h2>
                        <div className="flex">
                            <ChevronLeft className="hover:text-red-500 cursor-pointer" onClick={() => scrollLeft(specialProductSliderRef)}/>
                            <ChevronRight className="hover:text-red-500 cursor-pointer" onClick={() => scrollRight(specialProductSliderRef)}/>
                        </div>
                    </div>
                    <div className="flex overflow-x-scroll scrollbar-hide gap-4 items-center mt-6" ref={specialProductSliderRef}>
                        <SpecialProduct />
                        <SpecialProduct />
                        <SpecialProduct />
                        <SpecialProduct />
                    </div>
                </div>
            </section>
            <section className="py-12 px-10 bg-gray-200">
                <div className="max-w-[86rem] mx-auto">
                    <div className="flex justify-between items-center">
                        <h2 className="font-medium text-xl">Our Popular Products</h2>
                        <div className="flex">
                            <ChevronLeft className="hover:text-red-500 cursor-pointer" onClick={() => scrollLeft(popularProductSliderRef)}/>
                            <ChevronRight className="hover:text-red-500 cursor-pointer" onClick={() => scrollRight(popularProductSliderRef)}/>
                        </div>
                    </div>
                    <div className="flex overflow-x-scroll scrollbar-hide gap-4 items-center mt-6" ref={popularProductSliderRef}>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>
            <section className="py-12 px-10 bg-gray-200">
                <Marquee className="max-w-[86rem] mx-auto flex items-center justify-between bg-white rounded-md">
                    <div className="mx-8">
                        <img src="/images/brand-01.png" alt="brand" className="size-full"/>
                    </div>
                    <div className="mx-8">
                        <img src="/images/brand-02.png" alt="brand" className="size-full"/>
                    </div>
                    <div className="mx-8">
                        <img src="/images/brand-03.png" alt="brand" className="size-full"/>
                    </div>
                    <div className="mx-8">
                        <img src="/images/brand-04.png" alt="brand" className="size-full"/>
                    </div>
                    <div className="mx-8">
                        <img src="/images/brand-05.png" alt="brand"className="size-full"/>
                    </div>
                    <div className="mx-8">
                        <img src="/images/brand-06.png" alt="brand" className="size-full"/>
                    </div>
                    <div className="mx-8">
                        <img src="/images/brand-07.png" alt="brand" className="size-full"/>
                    </div>
                    <div className="mx-8">
                        <img src="/images/brand-08.png" alt="brand" className="size-full"/>
                    </div>
                </Marquee>
            </section>
            <section className="py-12 px-10 bg-gray-200">
                <div className="max-w-[86rem] mx-auto rounded-md">
                    <div className="flex justify-between items-center">
                        <h2 className="font-medium text-xl">Our Latest News</h2>
                        <div className="flex">
                            <ChevronLeft className="hover:text-red-500 cursor-pointer" onClick={() => scrollLeft(blogSliderRef)}/>
                            <ChevronRight className="hover:text-red-500 cursor-pointer" onClick={() => scrollRight(blogSliderRef)}/>
                        </div>
                    </div>
                    <div className="flex overflow-x-scroll scrollbar-hide gap-4 items-center mt-6" ref={blogSliderRef}>
                        <BlogCard page="home" />
                        <BlogCard page="home" />
                        <BlogCard page="home" />
                        <BlogCard page="home" />
                        <BlogCard page="home" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage;