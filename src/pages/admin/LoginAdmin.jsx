import { Lock, UserRound } from "lucide-react";
import Meta from "../../components/Meta";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authUser";

function LoginAdmin(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { loginAdmin, isLoggingIn } = useAuthStore()
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();

        const success = await loginAdmin({ email, password });

        if (success) {
            navigate("/admin"); // ✅ Chỉ chuyển hướng nếu đăng ký thành công
        }
    }
    
    return (
        <>
            <Meta title="ADMIN - Login" />
            <div className="flex items-center justify-center bg-gray-200 min-h-screen p-4">
                <div className="bg-white rounded-md py-4 px-6 w-[26rem] mt-4">
                    <h1 className="text-center text-3xl font-medium">ADMIN LOGIN</h1>
                    <form className="flex flex-col gap-3 mt-4" onSubmit={handleLogin}>
                        <div className="relative bg-gray-200 rounded-md p-2">
                            <UserRound className="absolute right-0 top-0 transform -translate-x-3 translate-y-2/3 size-6 " />
                            <input type="text" className="peer pt-4 pl-2 size-full pr-10 bg-transparent focus:outline-none" 
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <label htmlFor="email" className={`absolute left-4 transition-all duration-300 font-medium text-gray-400  ${email ? 'text-xs top-2' : 'top-3.5 peer-focus:text-xs peer-focus:top-2'}`}>Email</label>
                        </div>
                        <div className="relative bg-gray-200 rounded-md p-2">
                            <Lock className="absolute right-0 top-0 transform -translate-x-3 translate-y-2/3 size-6" />
                            <input type="password" className="peer pt-4 pl-2 size-full pr-10 bg-transparent focus:outline-none"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <label htmlFor="password" className={`absolute left-4 transition-all duration-300 font-medium text-gray-400 ${password ? 'text-xs top-2' : 'top-3.5 peer-focus:text-xs peer-focus:top-2'}`}>Password</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input type="checkbox" className="cursor-pointer" />
                            <label className="text-md">Remember Me</label>
                        </div>
                        <button className="text-white bg-orange-400 rounded-md py-2 px-4 hover:opacity-90" disabled={isLoggingIn}>{isLoggingIn ? "Loading..." : "Login"}</button>
                        <div className="text-center">
                            <Link className="text-blue-600 hover:underline underline-offset-2">Forgot password?</Link>
                            <span className="block">{"Don't have an account? "}<Link className="text-blue-600 hover:underline underline-offset-2">Sign up</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginAdmin;