import axios from "axios";
import toast from "react-hot-toast";
import Config from "../envVars";
import useAuthStore from "../store/authUser"; // Import Zustand store

export const handleAddWishList = async (productId, user) => {
    const { updateWishlist } = useAuthStore.getState(); // ✅ Get function to update Zustand

    if (!user) {
        toast.error("You need to log in to use this feature!");
        return false;
    }

    try {
        const response = await axios.put(`${Config.BACKEND_URL}/api/v1/user/wishlist`,
            { productId },
            { withCredentials: true }
        );

        const { data } = response;
        if (data.success) {
            toast.success(data.message);

            updateWishlist(data.updatedWishlist); // ✅ Update Zustand state with new wishlist
            return true;
        }
    } catch (error) {
        toast.error(error.response?.data?.message || "Failed to update Wishlist");
        return false;
    }
};

export const handleAddCart = async (productId, user) => {
    const { updateCart } = useAuthStore.getState(); // ✅ Get Zustand function

    if (!user) {
        toast.error("You need to log in to add items to the cart!");
        return false;
    }

    try {
        // Step 1: Add product to cart
        const response = await axios.post(
            `${Config.BACKEND_URL}/api/v1/user/cart`,
            { productId, quantity: 1 }, // ✅ Send product ID & quantity
            { withCredentials: true }
        );

        const { data } = response;
        if (!data.success) throw new Error("Failed to add product to cart");

        // Step 2: Use the cart from API response (no extra requests needed)
        updateCart(data.cart); // ✅ Directly update Zustand with full cart data

        toast.success(data.message);
        return true;
    } catch (error) {
        console.error(error);
        toast.error(error.response?.data?.message || "Failed to add to cart");
        return false;
    }
};

export const handleRemoveFromCart = async (productId, user) => {
    const { updateCart } = useAuthStore.getState(); // ✅ Get Zustand function

    if (!user) {
        toast.error("You need to log in to modify your cart!");
        return false;
    }

    try {
        // ✅ Step 1: Remove product from cart (Fixed request format)
        const response = await axios.post(
            `${Config.BACKEND_URL}/api/v1/user/cart/remove`, // ✅ Use POST for better compatibility
            { productId },
            { withCredentials: true }
        );

        const { data } = response;
        if (!data.success) throw new Error("Failed to remove product from cart");

        // ✅ Step 2: Use the updated cart from API response (no extra requests needed)
        updateCart(data.cart); // ✅ Sync Zustand immediately

        toast.success("Item removed from cart");
        return true;
    } catch (error) {
        console.error(error);
        toast.error(error.response?.data?.message || "Failed to remove item from cart");
        return false;
    }
};
