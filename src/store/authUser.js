import { create } from "zustand"
import toast from "react-hot-toast"
import axios from "axios"
import Config from "../envVars"

const useAuthStore = create((set) => ({
    user: localStorage.getItem("user") || null,
    isSigningUp: false,
    isCheckingAuth: false,
    isLoggingOut: false,
    isLoggingIn: false,
    login: async (credentials) => {
        set({isLoggingIn:true})
        try {
            const response = await axios.post(`${Config.BACKEND_URL}/api/v1/auth/login`, credentials, { withCredentials:true })
            const { user } = response.data;
            localStorage.setItem("user", JSON.stringify(user));
            set({user, isLoggingIn:false})
            toast.success("Logged in successfully")
            return true; // ✅ Trả về true nếu đăng nhập thành công
        } catch (error) {
            set({user: null, isLoggingIn: false})
            toast.error(error.response.data.message || "An error occurred")
            return false; // �� Trả về false nếu có l��i
        }
    },
    loginAdmin: async (credentials) => {
        set({isLoggingIn:true})
        try {
            const response = await axios.post(`${Config.BACKEND_URL}/api/v1/auth/admin-login`, credentials, { withCredentials:true })
            const { user } = response.data;
            localStorage.setItem("user", JSON.stringify(user));
            set({user, isLoggingIn:false})
            toast.success("Logged in successfully")
            return true; // ✅ Trả về true nếu đăng nhập thành công
        } catch (error) {
            set({user: null, isLoggingIn: false})
            toast.error(error.response.data.message || "An error occurred")
            return false; // �� Trả về false nếu có l��i
        }
    },
    signup: async (credentials) => {
        set({ isSigningUp: true });
        try {
            const response = await axios.post(`${Config.BACKEND_URL}/api/v1/auth/signup`, credentials, { withCredentials: true });
            const { message } = response.data;
    
            set({ isSigningUp: false });
            toast.success(message);
            
            return true; // ✅ Trả về true nếu đăng ký thành công
        } catch (error) {
            toast.error(error.response?.data?.message || "An error occurred");
            set({ isSigningUp: false });
            
            return false; // ❌ Trả về false nếu có lỗi
        }
    },
    logout: async () => {
        set({isLoggingOut:true})
        try {
            await axios.post(`${Config.BACKEND_URL}/api/v1/auth/logout`, {}, {
                withCredentials: true,
            })
            localStorage.removeItem("user");
            console.log(document.cookie)
            set({user: null, isLoggingOut:false})
            toast.success("Logged out successfully")
            return true; // ✅ Trả về true nếu đăng xuất thành công
        } catch (error) {
            set({isLoggingOut:false})
            toast.error(error.response?.data?.message || "Logout failed")
            return false; // �� Trả về false nếu có l��i
        }
    },
    authCheck: async (role) => {
        set({ isCheckingAuth: true });
        try {
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
                const parsedUser = JSON.parse(storedUser);
                set({ user: parsedUser, isCheckingAuth: false });
    
                if (parsedUser.role === role) 
                    return true;
            }
    
            // Fallback: Check with backend
            const response = await axios.get(`${Config.BACKEND_URL}/api/v1/auth/authCheck`, { withCredentials: true });
    
            if (response.data.user.role === role) {
                set({ user: response.data.user });
                return true;
            }
            
            return false;
        } catch (error) {
            console.error("Error checking auth:", error);
            set({ user: null });
            return false;
        } finally {
            set({ isCheckingAuth: false });
        }
    }    
}))

export default useAuthStore