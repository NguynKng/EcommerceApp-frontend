import { Link } from "react-router-dom";
import { Heart, Star } from "lucide-react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Config from "../envVars";
import useAuthStore from "../store/authUser";
import { formatPriceWithDollar } from "../utils/formattedFunction";
import { handleAddWishList } from "../utils/handleFunction";

function SpecialProduct({ product }) {
    const { user } = useAuthStore();
    
    const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

    const salesProgress = (50/ 100) * 100;

    useEffect(() => {
        // Set the target time once when the component mounts
        const targetDate = new Date(new Date().getTime() + 5 * 60 * 60 * 1000); // 5 hours from now
        
        const timer = setInterval(() => {
            const currentTime = new Date().getTime();
            const difference = targetDate - currentTime;

            if (difference > 0) {
                const hours = Math.floor(difference / (1000 * 60 * 60));
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);
                setTimeLeft({ hours, minutes, seconds });
            } else {
                clearInterval(timer); // Stop the timer when the time is up
                setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(timer); // Cleanup the timer on component unmount
    }, []);

    function formatTime(num) {
        return num.toString().padStart(2, "0");
    }

    return (
        <Link to={"/product/" + product?.slug} className="w-[28rem] rounded-md bg-white flex-none p-2">
            <div className="flex">
                <div className="relative w-60 h-52">
                    <img src={`${Config.BACKEND_URL}/images/` + product?.images.find(img => img.type === "thumbnail").path} className="size-full rounded-md p-4 object-cover" />
                    <Heart className={`absolute top-2 right-2 size-4 cursor-pointer ${user?.wishlist.find((item) => item._id === product._id) ? "fill-red-500" : "text-gray-500"}`} 
                        onClick={(e) => {
                            e.preventDefault(); // ⛔ Prevent Link navigation // ⛔ Stop event bubbling
                            handleAddWishList(product?._id, user);
                        }}
                    />
                    {product?.discount > 0 && (
                    <div className="absolute top-2 left-2 bg-orange-400 rounded-xl py-1 px-2">
                        <p className="text-black text-xs">-{product?.discount}%</p>
                    </div>
                    )}
                    <div className="flex justify-evenly">
                        <img src="/images/iphone.jpg" className="size-[5rem] rounded-md border-2 border-gray-100" />
                        <img src="/images/iphone.jpg" className="size-[5rem] rounded-md border-2 border-gray-100" />
                    </div>
                </div>
                <div className="py-4 px-2">
                    <h6 className="text-orange-500 text-sm mb-4">{product?.category}</h6>
                    <h5 className="font-medium text-sm mb-4">{product?.name}</h5>
                    <div className="flex mb-4">
                        <Star className="size-4 fill-yellow-500 stroke-none" />
                        <Star className="size-4 fill-yellow-500 stroke-none" />
                        <Star className="size-4 fill-yellow-500 stroke-none" />
                        <Star className="size-4 fill-yellow-500 stroke-none" />
                        <Star className="size-4 fill-yellow-500 stroke-none" />
                    </div>
                    <div className="mb-4">
                        {product?.discount > 0 ? (
                            <div className="flex gap-2 items-center">
                                <h5 className="text-sm text-red-500">{formatPriceWithDollar(product?.price - ((product?.price * product?.discount)/100))}</h5>
                                <h5 className="text-sm text-gray-500 line-through">{formatPriceWithDollar(product?.price)}</h5> 
                            </div>
                        ) : (
                            <h5 className="text-sm">{formatPriceWithDollar(product?.price)}</h5> 
                        )}
                    </div>
                    <div className="mb-4">
                        <span className="text-sm font-semibold inline">112&nbsp;</span>
                        <span className="text-gray-500 text-sm inline">Sold&nbsp;&nbsp;&nbsp;</span>
                        <div className="inline-flex items-center">
                            <div className="bg-red-500 text-white rounded-full p-2 w-10 text-center">
                                {formatTime(timeLeft.hours)}
                            </div>
                            <span className="text-gray-500 text-sm inline">&nbsp;:&nbsp;</span>
                            <div className="bg-red-500 text-white rounded-full p-2 w-10 text-center">
                                {formatTime(timeLeft.minutes)}
                            </div>
                            <span className="text-gray-500 text-sm inline">&nbsp;:&nbsp;</span>
                            <div className="bg-red-500 text-white rounded-full p-2 w-10 text-center">
                                {formatTime(timeLeft.seconds)}
                            </div>
                        </div>
                    </div>
                    <h5 className="text-sm text-gray-500">Products: 50</h5>
                    <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
                        <div className="bg-green-500 h-2 rounded-full" 
                            style={{ width: `${salesProgress}%` }}>
                        </div>
                    </div>
                    <button className="bg-black text-gray-300 rounded-2xl w-24 p-1 text-sm hover:text-orange-400">OPTION</button>
                </div>
            </div>
        </Link>
    );
}

SpecialProduct.propTypes = {
    product: PropTypes.object
};

export default SpecialProduct;