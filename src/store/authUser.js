import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "axios";
import Config from "../envVars";

const useAuthStore = create((set) => ({
    user: null,
    isSigningUp: false,
    isCheckingAuth: false,
    isLoggingOut: false,
    isLoggingIn: false,

    // ✅ LOGIN FUNCTION (USER)
    login: async (credentials) => {
        set({ isLoggingIn: true });
        try {
            const response = await axios.post(
                `${Config.BACKEND_URL}/api/v1/auth/login`,
                credentials,
                { withCredentials: true }
            );
            const { user } = response.data;

            localStorage.setItem("user", JSON.stringify(user));
            set({ user, isLoggingIn: false });

            toast.success("Logged in successfully");
            return user; // ✅ Return full user object
        } catch (error) {
            set({ user: null, isLoggingIn: false });
            toast.error(error.response?.data?.message || "An error occurred");
            return null;
        }
    },

    // ✅ LOGIN FUNCTION (ADMIN)
    loginAdmin: async (credentials) => {
        set({ isLoggingIn: true });
        try {
            const response = await axios.post(
                `${Config.BACKEND_URL}/api/v1/auth/admin-login`,
                credentials,
                { withCredentials: true }
            );
            const { user } = response.data;

            localStorage.setItem("user", JSON.stringify(user));
            set({ user, isLoggingIn: false });

            toast.success("Logged in successfully");
            return user; // ✅ Return full user object
        } catch (error) {
            set({ user: null, isLoggingIn: false });
            toast.error(error.response?.data?.message || "An error occurred");
            return null;
        }
    },

    // ✅ SIGNUP FUNCTION
    signup: async (credentials) => {
        set({ isSigningUp: true });
        try {
            const response = await axios.post(
                `${Config.BACKEND_URL}/api/v1/auth/signup`,
                credentials,
                { withCredentials: true }
            );
            const { message } = response.data;

            toast.success(message);
            return true; // ✅ Return full user object
        } catch (error) {
            set({ isSigningUp: false });
            toast.error(error.response?.data?.message || "An error occurred");
            return false;
        }
    },

    // ✅ LOGOUT FUNCTION
    logout: async () => {
        set({ isLoggingOut: true });
        try {
            await axios.post(`${Config.BACKEND_URL}/api/v1/auth/logout`, {}, { withCredentials: true });

            localStorage.removeItem("user");
            set({ user: null, isLoggingOut: false });

            toast.success("Logged out successfully");
            return true;
        } catch (error) {
            set({ isLoggingOut: false });
            toast.error(error.response?.data?.message || "Logout failed");
            return false;
        }
    },

    // ✅ AUTH CHECK FUNCTION (Ensures backend & local sync)
    authCheck: async (requiredRole) => {
        set({ isCheckingAuth: true });

        try {
            // 🔹 Check from localStorage first (faster initial check)
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
                const parsedUser = JSON.parse(storedUser);
                set({ user: parsedUser });

                // ✅ Return user object if role matches
                if (!requiredRole || parsedUser.role === requiredRole) {
                    set({ isCheckingAuth: false });
                    return parsedUser;
                }
            }

            // 🔹 Always verify with the backend (security)
            const response = await axios.get(
                `${Config.BACKEND_URL}/api/v1/auth/authCheck`,
                { withCredentials: true }
            );

            if (response.data?.user) {
                localStorage.setItem("user", JSON.stringify(response.data.user));
                set({ user: response.data.user });
                return response.data.user; // ✅ Return user object
            }

            set({ user: null });
            return null; // ❌ Unauthorized
        } catch (error) {
            console.error("Error checking auth:", error);
            set({ user: null });
            return null;
        } finally {
            set({ isCheckingAuth: false });
        }
    },

    // ✅ UPDATE WISHLIST
    updateWishlist: (updatedWishlist) => {
        set((state) => {
            if (!state.user) return state; // Ensure user exists
            try {
                const updatedUser = { ...state.user, wishlist: updatedWishlist };
                localStorage.setItem("user", JSON.stringify(updatedUser)); // ✅ Sync with local storage
                return { user: updatedUser };
            } catch (error) {
                console.error("Failed to update wishlist:", error);
                return state;
            }
        });
    },

    // ✅ UPDATE CART
    updateCart: (updatedCart) => {
        set((state) => {
            if (!state.user) return state; // Ensure user exists
            try {
                const updatedUser = { ...state.user, cart: updatedCart };
                localStorage.setItem("user", JSON.stringify(updatedUser)); // ✅ Sync with local storage
                return { user: updatedUser };
            } catch (error) {
                console.error("Failed to update cart:", error);
                return state;
            }
        });
    },
}));

export default useAuthStore;
