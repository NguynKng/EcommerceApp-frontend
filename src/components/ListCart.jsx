import { Trash2 } from "lucide-react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"
import Config from "../envVars";
import { formatPriceWithDollar } from "../utils/formattedFunction";
import useAuthStore from "../store/authUser";
import { handleRemoveFromCart } from "../utils/handleFunction";

function ListCart({ isOpenCart }){
    const { user } = useAuthStore();

    return (
        <div className={`fixed h-full bg-white w-72 md:w-96 top-0 right-0 z-50 
            transform transition-transform duration-500 ease-in-out ${isOpenCart ? 'translate-x-0':'translate-x-full'}`}>
            <div className="overflow-y-auto h-[65%]">
                {user?.cart?.items?.length === 0 ? (
                    <div className="flex justify-center items-center text-gray-400 text-xl">
                        Your cart is empty
                    </div>
                ) : (
                    user?.cart?.items?.map((item, index) => (
                    <div key={index} className="flex gap-2 p-4">
                        <div className="w-[30%] rounded-md sm:w-32">
                            <img src={`${Config.BACKEND_URL}/images/` + item.product.images.find(img => img.type=="thumbnail").path} className="size-full rounded-md object-cover" alt={item.name} />
                        </div>
                        <div className="relative w-[70%]">
                            <div className="flex flex-col gap-1">
                                <h1 className="font-medium">{item?.product.name}</h1>
                                <span className="text-orange-500">{formatPriceWithDollar(item?.product.price)}</span>
                                <span className="text-gray-400 text-sm">Quantity: {item?.quantity}</span>
                                <span className="text-gray-400 text-sm">Color: {item.color || "N/A"}</span>
                                <div className="flex gap-2 items-center">
                                    <span className="text-gray-400 text-sm">Total:</span>
                                    <span className="text-black text-lg">{formatPriceWithDollar(item?.price)}</span>
                                </div>
                                <Trash2 className="absolute bottom-0 right-0 cursor-pointer hover:text-red-500"
                                    onClick={() => handleRemoveFromCart(item.product._id, user)}
                                />
                            </div>
                        </div>
                    </div>
                ))
                )}
            </div>
            <div className="bg-gray-200 w-full h-[35%] mt-2 p-4">
                <div className="flex justify-between p-2">
                    <h3>Total Item</h3>
                    <h3 className="font-medium">{user?.cart?.items?.length}</h3>
                </div>
                <div className="flex justify-between p-2">
                    <h3>Subtotal</h3>
                    <h3 className="font-medium">{formatPriceWithDollar(user?.cart?.total)}</h3>
                </div>
                <div className="flex justify-between p-2">
                    <h3>Shipping</h3>
                    <h3 className="font-medium">$10.00</h3>
                </div>
                <div className="flex justify-between p-2">
                    <h3 className="font-medium">Total</h3>
                    <h3 className="text-green-500 text-lg font-medium">{formatPriceWithDollar(user?.cart?.total)}</h3>   
                </div>
                <div className="flex justify-center mt-4 gap-2">
                    <Link to="/cart">
                        <button className="w-36 text-center rounded-full bg-blue-950 text-white py-2 px-4 hover:opacity-90">View Cart</button>
                    </Link>
                    <Link to="/checkout">
                        <button className="w-36 text-center rounded-full bg-orange-500 text-white py-2 px-4 hover:opacity-90">Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

ListCart.propTypes = {
    isOpenCart: PropTypes.bool.isRequired,
};

export default ListCart;