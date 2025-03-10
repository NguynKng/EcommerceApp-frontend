import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Star, TrendingUpDown } from "lucide-react";
import PropTypes from 'prop-types';
import Config from "../envVars";
import { formatPriceWithDollar } from "../utils/formattedFunction";
import { handleAddWishList, handleAddCart } from "../utils/handleFunction";
import useAuthStore from "../store/authUser";

function ProductCard({ product }) {
    const { user } = useAuthStore();

    return (
        <Link to={"/product/" + product?.slug} className="group w-52 h-[23rem] rounded-md flex-none bg-white hover:scale-95 ease-in-out transition-all duration-300">
            <div className="relative w-full h-60">
                <img src={`${Config.BACKEND_URL}/images/` + product?.images.find(img => img.type === "thumbnail").path} className="size-full rounded-md object-cover" />
                {product?.discount > 0 && (
                <div className="absolute top-2 left-2 bg-orange-400 rounded-xl py-1 px-2">
                    <p className="text-black text-xs">-{product?.discount}%</p>
                </div>
                )}
                <div className="absolute top-4 right-0 flex flex-col gap-4 opacity-0 transform -translate-x-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:-translate-x-3">
                    <Heart className={`size-5 cursor-pointer ${user?.wishlist.find((item) => item._id === product._id) ? "fill-red-500" : "text-gray-500"}`} 
                        onClick={(e) => {
                            e.preventDefault(); // ⛔ Prevent Link navigation // ⛔ Stop event bubbling
                            handleAddWishList(product?._id, user);
                        }}
                    />
                    <TrendingUpDown className="text-gray-500 size-5" />
                    <ShoppingBag className="text-gray-500 size-5" 
                        onClick={(e) => {
                        e.preventDefault();
                        handleAddCart(product?._id, user);
                        }} 
                    />
                </div>
            </div>
            <div className="w-full p-4 flex flex-col gap-2 h-[30%]">
                <h6 className="text-orange-500 text-xs">{product?.category}</h6>
                <p className="font-medium text-sm">{product?.name}</p>
                <div className="flex">
                    <Star className="size-4 fill-yellow-500 stroke-none" />
                    <Star className="size-4 fill-yellow-500 stroke-none" />
                    <Star className="size-4 fill-yellow-500 stroke-none" />
                    <Star className="size-4 fill-yellow-500 stroke-none" />
                    <Star className="size-4 fill-yellow-500 stroke-none" />
                </div>
                {product?.discount > 0 ? (
                    <div className="flex gap-2 items-center">
                        <h5 className="text-sm text-red-500">{formatPriceWithDollar(product?.price - ((product?.price * product?.discount)/100))}</h5>
                        <h5 className="text-sm text-gray-500 line-through">{formatPriceWithDollar(product?.price)}</h5> 
                    </div>
                ) : (
                    <h5 className="text-sm">{formatPriceWithDollar(product?.price)}</h5> 
                )}
            </div>
        </Link>
    );
}

ProductCard.propTypes = {
    product: PropTypes.object
};

export default ProductCard;
