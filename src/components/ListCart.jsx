import { Trash2 } from "lucide-react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"

function ListCart({isOpenCart}){
    return (
        <div className={`fixed h-full bg-white w-72 md:w-96 top-0 right-0 z-50 
            transform transition-transform duration-500 ease-in-out ${isOpenCart ? 'translate-x-0':'translate-x-full'}`}>
            <div className="overflow-y-auto h-[65%]">
                <div className="flex gap-2 p-4 overflow-y-auto">
                    <div className="w-[30%] rounded-md sm:w-32">
                        <img src="/images/iphone.jpg" className="size-full rounded-md object-cover" />
                    </div>
                    <div className="relative w-[70%]">
                        <div className="flex flex-col gap-1">
                            <h1 className="font-medium">Kids headphones bulk 10 pack multi colored for students</h1>
                            <span className="text-orange-500">$100.00</span>
                            <span className="text-gray-400 text-sm">Size: S</span>
                            <span className="text-gray-400 text-sm">Color: Black</span>
                            <Trash2 className="absolute bottom-0 right-0 cursor-pointer hover:text-red-500" />
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 p-4">
                    <div className="w-[30%] rounded-md sm:w-32">
                        <img src="/images/iphone.jpg" className="size-full rounded-md object-cover" />
                    </div>
                    <div className="relative w-[70%]">
                        <div className="flex flex-col gap-1">
                            <h1 className="font-medium">Kids headphones bulk 10 pack multi colored for students</h1>
                            <span className="text-orange-500">$100.00</span>
                            <span className="text-gray-400 text-sm">Size: S</span>
                            <span className="text-gray-400 text-sm">Color: Black</span>
                            <Trash2 className="absolute bottom-0 right-0 cursor-pointer hover:text-red-500" />
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 p-4">
                    <div className="w-[30%] rounded-md sm:w-32">
                        <img src="/images/iphone.jpg" className="size-full rounded-md object-cover" />
                    </div>
                    <div className="relative w-[70%]">
                        <div className="flex flex-col gap-1">
                            <h1 className="font-medium">Kids headphones bulk 10 pack multi colored for students</h1>
                            <span className="text-orange-500">$100.00</span>
                            <span className="text-gray-400 text-sm">Size: S</span>
                            <span className="text-gray-400 text-sm">Color: Black</span>
                            <Trash2 className="absolute bottom-0 right-0 cursor-pointer hover:text-red-500" />
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 p-4">
                    <div className="w-[30%] rounded-md sm:w-32">
                        <img src="/images/iphone.jpg" className="size-full rounded-md object-cover" />
                    </div>
                    <div className="relative w-[70%]">
                        <div className="flex flex-col gap-1">
                            <h1 className="font-medium">Kids headphones bulk 10 pack multi colored for students</h1>
                            <span className="text-orange-500">$100.00</span>
                            <span className="text-gray-400 text-sm">Size: S</span>
                            <span className="text-gray-400 text-sm">Color: Black</span>
                            <Trash2 className="absolute bottom-0 right-0 cursor-pointer hover:text-red-500" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 w-full h-[35%] mt-2 p-4">
                <div className="flex justify-between p-2">
                    <h3>Total Item</h3>
                    <h3 className="font-medium">1</h3>
                </div>
                <div className="flex justify-between p-2">
                    <h3>Subtotal</h3>
                    <h3 className="font-medium">$100.00</h3>
                </div>
                <div className="flex justify-between p-2">
                    <h3>Shipping</h3>
                    <h3 className="font-medium">$10.00</h3>
                </div>
                <div className="flex justify-between p-2">
                    <h3 className="font-medium">Total</h3>
                    <h3 className="text-green-500 text-lg font-medium">$110.00</h3>
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