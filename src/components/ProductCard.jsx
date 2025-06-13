import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Star, TrendingUpDown } from "lucide-react";
import PropTypes from "prop-types";
import Config from "../envVars";
import { formatPriceWithDollar } from "../utils/formattedFunction";
import { handleAddWishList, handleAddCart } from "../utils/handleFunction";
import useAuthStore from "../store/authUser";

function ProductCard({ product }) {
  const { user } = useAuthStore();

  return (
    <Link
      to={"/product/" + product?.slug}
      className="group w-60 h-[24rem] rounded-md flex-none bg-white transition-all duration-300 ease-in-out hover:opacity-60 relative hover:scale-95"
    >
      {/* Inner content of the card */}
      <div className="absolute top-4 right-2 z-20 flex flex-col gap-3 opacity-0 translate-x-2 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-0">
        <div className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
          <Heart
            className={`size-5 cursor-pointer ${
              user?.wishlist.find((item) => item._id === product._id)
                ? "fill-red-500"
                : "text-black"
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleAddWishList(product?._id, user);
            }}
          />
        </div>

        <div className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
          <TrendingUpDown className="text-black size-5" />
        </div>

        <div className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
          <ShoppingBag
            className="text-black size-5"
            onClick={(e) => {
              e.preventDefault();
              handleAddCart(product?._id, user);
            }}
          />
        </div>
      </div>

      <div className="relative w-full h-[60%] rounded-t-md z-10">
        <img
          src={
            product?.images?.find((img) => img.type === "thumbnail")?.path
              ? `${Config.BACKEND_URL}/images/${
                  product?.images.find((img) => img.type === "thumbnail").path
                }`
              : "/images/no-thumbnail.png"
          }
          className="size-full rounded-t-md object-cover"
          alt="Product Thumbnail"
        />
        {product?.discount > 0 && (
          <div className="absolute top-2 left-2 bg-orange-400 rounded-xl py-1 px-2 z-20">
            <p className="text-black text-xs">-{product?.discount}%</p>
          </div>
        )}
      </div>

      <div className="w-full px-4 py-2 flex flex-col gap-2 h-[40%] z-10">
        <h6 className="text-orange-500 text-sm">{product?.category}</h6>
        <h1 className="font-medium text-base min-h-12 max-h-12 text-ellipsis overflow-hidden">
          {product?.name}
        </h1>
        <div className="flex">
          <Star className="size-4 fill-yellow-500 stroke-none" />
          <Star className="size-4 fill-yellow-500 stroke-none" />
          <Star className="size-4 fill-yellow-500 stroke-none" />
          <Star className="size-4 fill-yellow-500 stroke-none" />
          <Star className="size-4 fill-yellow-500 stroke-none" />
        </div>
        {product?.discount > 0 ? (
          <div className="flex gap-2 items-center">
            <h5 className="text-sm text-red-500">
              {formatPriceWithDollar(
                product?.price - (product?.price * product?.discount) / 100
              )}
            </h5>
            <h5 className="text-sm text-gray-500 line-through">
              {formatPriceWithDollar(product?.price)}
            </h5>
          </div>
        ) : (
          <h5 className="text-sm font-medium text-red-500">
            {formatPriceWithDollar(product?.price)}
          </h5>
        )}
      </div>
    </Link>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
