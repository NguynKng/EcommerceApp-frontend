import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import useAuthStore from "../store/authUser";
import { useCallback, useEffect, useState } from "react";
import Config from "../envVars";
import axios from "axios";
import toast from "react-hot-toast";
import { formatPriceWithDollar } from "../utils/formattedFunction";
import { handleAddWishList } from "../utils/handleFunction";

function Wishlist() {
    const { user } = useAuthStore();
    const [products, setProducts] = useState([]); // Store product details

    // Fetch Product Details for Wishlist Items
    const fetchProductDetails = useCallback(async () => {
        if (!user || !user.wishlist || user.wishlist.length === 0){
            setProducts([])
            return; // Skip if wishlist is empty
        }

        try {
            const productRequests = user?.wishlist.map((item) =>
                axios.get(`${Config.BACKEND_URL}/api/v1/product/${item._id}`)
            );

            const productResponses = await Promise.all(productRequests);
            setProducts(productResponses.map((res) => res.data.product));
        } catch (error) {
            console.error("Error fetching products:", error);
            toast.error("Failed to load product details.");
        }
    }, [user]);

    // Fetch Wishlist on User Change
    useEffect(() => {
        fetchProductDetails()
    }, [fetchProductDetails]);

    return (
        <>
            <Meta title="Wishlist" />
            <BreadCrumb />
            <div className="py-6 px-4 bg-gray-200 min-h-screen">
                <div className="max-w-[86rem] mx-auto flex flex-wrap gap-2">
                    {products.length === 0 ? (
                        <div className="mx-auto">
                            <h1 className="text-2xl">Your wishlist is empty</h1>
                        </div>
                    ) : (
                        products.map((product, index) => (
                            <div key={index} className="flex flex-col gap-1 p-2 w-[16rem]">
                                <Link to={`/product/` + product?.slug} className="w-full h-[16rem] relative hover:opacity-90">
                                    <img src={`${Config.BACKEND_URL}/images/` + product?.images.find(img => img.type === "thumbnail").path} className="size-full object-cover" alt={product?.name} />
                                    <X className="absolute top-2 right-2 hover:text-red-500 text-gray-500"
                                        onClick={(e) => {
                                            e.preventDefault(); // ⛔ Prevent Link navigation // ⛔ Stop event bubbling
                                            handleAddWishList(product?._id, user);
                                        }}  
                                    />
                                </Link>
                                <Link to={`/product/` + product?.slug} className="font-medium hover:underline underline-offset-2">
                                    {product?.name}
                                </Link>
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
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
}

export default Wishlist;
