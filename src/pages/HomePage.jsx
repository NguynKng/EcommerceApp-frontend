import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import { services } from "../utils/data/services";
import Meta from "../components/Meta";
import {
  useGetFeaturedCollection,
  useGetSpecialProduct,
  useGetPopularProduct,
} from "../hooks/useGetProduct";
import { ListBlog } from "../utils/data/blog";
import Spinner from "../components/Spinner";
import { MainBanner, ListBanner1, ListBanner2 } from "../utils/data/banner";
import { ListProduct2 } from "../utils/data/product";
import { ListBrand } from "../utils/data/brand";
import { categorySectionData } from "../utils/data/category";

function HomePage() {
  const productSliderRef = useRef(null);
  const blogSliderRef = useRef(null);
  const specialProductSliderRef = useRef(null);
  const popularProductSliderRef = useRef(null);
  const { featuredCollection, loading: loadingFeatured } =
    useGetFeaturedCollection();
  const { specialProducts, loading: loadingSpecial } = useGetSpecialProduct();
  const { popularProducts, loading: loadingPopular } = useGetPopularProduct();
  const [currentIndexBanner, setCurrentIndexBanner] = useState(0);

  const scrollLeft = (sliderRef) => {
    if (sliderRef.current)
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
  };
  const scrollRight = (sliderRef) => {
    if (sliderRef.current)
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexBanner((prevIndex) =>
        prevIndex === MainBanner.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <>
      <Meta title="NguynKng Shop" />
      <section className="py-12 px-10">
        <div className="flex items-center max-w-[86rem] mx-auto md:flex-row flex-col gap-4 h-auto md:h-[400px]">
          <div className="flex flex-col items-center gap-4 h-full">
            <div className="relative w-full md:w-[600px] h-full">
              <img
                src={MainBanner[currentIndexBanner].image}
                className="w-full h-full rounded-xl object-cover transition-all duration-700 ease-in-out"
                alt="Banner"
              />
              <div className="absolute top-10 left-10 flex flex-col md:gap-3 gap-1 w-40 md:w-60">
                <span className="text-red-500 text-xs font-medium">
                  {MainBanner[currentIndexBanner].title}
                </span>
                <span className="md:text-3xl text-md font-medium">
                  {MainBanner[currentIndexBanner].product}
                </span>
                <span className="text-xs leading-relaxed">
                  {MainBanner[currentIndexBanner].tagline}
                </span>
                <button className="w-24 sm:p-3 p-1 text-xs text-white font-medium bg-black rounded-2xl hover:bg-red-500 transition ease-in-out duration-300">
                  BUY NOW
                </button>
              </div>

              {/* Dots indicator inside banner */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {MainBanner.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrentIndexBanner(index)}
                    className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                      index === currentIndexBanner
                        ? "bg-red-500 scale-125 shadow-md"
                        : "bg-gray-300"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center gap-4 w-full md:w-[800px] h-full">
            <div className="flex sm:flex-row flex-col items-center justify-between w-full h-[48%] gap-4">
              {ListBanner1.map((banner, index) => (
                <div
                  key={index}
                  className="relative w-full md:w-[50%] h-full rounded-xl"
                >
                  <img
                    src={banner.image}
                    className="size-full rounded-xl object-cover"
                  />
                  <div className="absolute top-10 left-10 flex flex-col gap-3 w-36">
                    <span className="text-red-500 text-xs font-medium">
                      {banner.title}
                    </span>
                    <span className="text-xl font-medium">
                      {banner.product}
                    </span>
                    <span className="text-xs">{banner.tagline}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between w-full h-[48%] gap-4">
              {ListBanner2.map((banner, index) => (
                <div
                  key={index}
                  className="relative w-full md:w-[50%] h-full rounded-xl"
                >
                  <img
                    src={banner.image}
                    className="size-full rounded-xl object-cover"
                  />
                  <div className="absolute top-10 left-10 flex flex-col gap-3 w-36">
                    <span className="text-red-500 text-xs font-medium">
                      {banner.title}
                    </span>
                    <span className="text-xl font-medium">
                      {banner.product}
                    </span>
                    <span className="text-xs">{banner.tagline}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-10 bg-gray-200">
        <div className="max-w-[86rem] mx-auto flex items-center justify-between gap-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex sm:flex-row flex-col items-center justify-center  gap-4 w-[20%]"
            >
              <img src={service.image} alt={service.title} className="size-8" />
              <div>
                <h5 className="font-medium text-xs sm:text-base">
                  {service.title}
                </h5>
                <h6 className="text-xs text-gray-500">{service.tagline}</h6>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="px-10 pb-6 bg-gray-200">
        <div className="max-w-[86rem] mx-auto flex flex-wrap items-center justify-between px-4 py-6 bg-white">
          {categorySectionData.map((category, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-4 w-[16rem] p-4"
            >
              <div>
                <h5 className="font-medium text-sm">{category.title}</h5>
                <h6 className="text-xs text-gray-500">{`${category.quantity} items`}</h6>
              </div>
              <img src={category.image} className="w-20 h-18 object-cover" />
            </div>
          ))}
        </div>
      </section>
      <section className="py-12 px-10 bg-gray-200">
        <div className="max-w-[86rem] mx-auto">
          <div className="flex justify-between items-center">
            <h2 className="font-medium text-xl">Featured Collection</h2>
            <div className="flex">
              <ChevronLeft
                className="hover:text-red-500 cursor-pointer"
                onClick={() => scrollLeft(productSliderRef)}
              />
              <ChevronRight
                className="hover:text-red-500 cursor-pointer"
                onClick={() => scrollRight(productSliderRef)}
              />
            </div>
          </div>
          <div
            className="flex overflow-x-scroll scrollbar-hide gap-4 items-center mt-6"
            ref={productSliderRef}
          >
            {loadingFeatured ? (
              <Spinner />
            ) : (
              featuredCollection.map((product) => {
                return <ProductCard product={product} key={product._id} />;
              })
            )}
          </div>
        </div>
      </section>
      <section className="py-12 px-10 bg-gray-200">
        <div className="max-w-[86rem] mx-auto flex flex-wrap sm:flex-nowrap items-center justify-center gap-4">
          {ListProduct2.map((product, index) => (
            <Link
              key={index}
              className="w-[24rem] bg-white rounded-md hover:scale-95 ease-in-out transition-all duration-300"
            >
              <div className="px-6 py-4">
                <h6 className="text-xs text-gray-500 leading-6">
                  {product.title}
                </h6>
                <h5 className="font-medium text-xl leading-6">
                  {product.product}
                </h5>
                <h6 className="text-xs text-gray-500 leading-6">
                  {product.tagline}
                </h6>
              </div>
              <div className="w-full relative">
                <img
                  src={product.image}
                  className="size-full rounded-b-md object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="py-12 px-10 bg-gray-200">
        <div className="max-w-[86rem] mx-auto">
          <div className="flex justify-between items-center">
            <h2 className="font-medium text-xl">Special Products</h2>
            <div className="flex">
              <ChevronLeft
                className="hover:text-red-500 cursor-pointer"
                onClick={() => scrollLeft(specialProductSliderRef)}
              />
              <ChevronRight
                className="hover:text-red-500 cursor-pointer"
                onClick={() => scrollRight(specialProductSliderRef)}
              />
            </div>
          </div>
          <div
            className="flex overflow-x-scroll scrollbar-hide gap-4 items-center mt-6"
            ref={specialProductSliderRef}
          >
            {loadingSpecial ? (
              <Spinner />
            ) : (
              specialProducts.map((product) => {
                return <SpecialProduct product={product} key={product._id} />;
              })
            )}
          </div>
        </div>
      </section>
      <section className="py-12 px-10 bg-gray-200">
        <div className="max-w-[86rem] mx-auto">
          <div className="flex justify-between items-center">
            <h2 className="font-medium text-xl">Our Popular Products</h2>
            <div className="flex">
              <ChevronLeft
                className="hover:text-red-500 cursor-pointer"
                onClick={() => scrollLeft(popularProductSliderRef)}
              />
              <ChevronRight
                className="hover:text-red-500 cursor-pointer"
                onClick={() => scrollRight(popularProductSliderRef)}
              />
            </div>
          </div>
          <div
            className="flex overflow-x-scroll scrollbar-hide gap-4 items-center mt-6"
            ref={popularProductSliderRef}
          >
            {loadingPopular ? (
              <Spinner />
            ) : (
              popularProducts.map((product) => {
                return <ProductCard product={product} key={product._id} />;
              })
            )}
          </div>
        </div>
      </section>
      <section className="py-12 px-10 bg-gray-200">
        <Marquee className="max-w-[86rem] mx-auto flex items-center justify-between bg-white rounded-md">
          {ListBrand.map((brand, index) => (
            <div key={index} className="mx-8">
              <img src={brand.image} alt="brand" className="size-full" />
            </div>
          ))}
        </Marquee>
      </section>
      <section className="py-12 px-10 bg-gray-200">
        <div className="max-w-[86rem] mx-auto rounded-md">
          <div className="flex justify-between items-center">
            <h2 className="font-medium text-xl">Our Latest News</h2>
            <div className="flex">
              <ChevronLeft
                className="hover:text-red-500 cursor-pointer"
                onClick={() => scrollLeft(blogSliderRef)}
              />
              <ChevronRight
                className="hover:text-red-500 cursor-pointer"
                onClick={() => scrollRight(blogSliderRef)}
              />
            </div>
          </div>
          <div
            className="flex overflow-x-scroll scrollbar-hide gap-4 items-center mt-6"
            ref={blogSliderRef}
          >
            {ListBlog.map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
