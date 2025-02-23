import { Link } from "react-router-dom";
import { Heart, Star } from "lucide-react";
import { useState } from "react";

function ProductCard() {
    const [isLiked, setIsLiked] = useState(false);

    const toggleLike = (e) => {
        e.preventDefault(); // Prevents navigating when clicking the heart
        setIsLiked(!isLiked);
    };

    return (
        <Link className="w-52 rounded-md flex-none bg-white hover:scale-95 ease-in-out transition-all duration-300">
            <div className="relative w-full">
                <img src="/images/tab.jpg" className="size-full rounded-md object-cover" />
                <Heart
                className={`absolute top-2 right-2 size-4 cursor-pointer ${
                    isLiked ? "fill-red-500 text-red-500" : "fill-none text-gray-500"}`} onClick={toggleLike} />
                <div className="absolute top-2 left-2 bg-orange-400 rounded-xl py-1 px-2">
                    <p className="text-black text-xs">-33%</p>
                </div>
            </div>
            <div className="w-full px-4 pb-4 flex flex-col gap-2">
                <h6 className="text-orange-500 text-xs">Ipad Mini</h6>
                <p className="font-medium text-sm">Kid Headphones Bulk 10 Pack Multi Colored For...</p>
                <div className="flex">
                    <Star className="size-4 fill-yellow-500 stroke-none" />
                    <Star className="size-4 fill-yellow-500 stroke-none" />
                    <Star className="size-4 fill-yellow-500 stroke-none" />
                    <Star className="size-4 fill-yellow-500 stroke-none" />
                    <Star className="size-4 fill-yellow-500 stroke-none" />
                </div>
                <p className="text-sm">$100.00</p>
            </div>
        </Link>
    );
}

export default ProductCard;
