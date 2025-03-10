import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { useState } from "react";
import useAuthStore from '../store/authUser'
import { useNavigate } from 'react-router-dom'
import { EyeOff, Eye } from "lucide-react"

function SignupPage() {
    const [phoneNumber, setPhoneNumber] = useState("")
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const { signup, isSigningUp } = useAuthStore()
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const navigate = useNavigate()

    const handleSignUp = async (e) => {
        e.preventDefault();

        const success = await signup({ email, phoneNumber, fullName, password, confirmPassword });

        if (success) {
            navigate("/account/login"); // ✅ Chỉ chuyển hướng nếu đăng ký thành công
        }
    }
    
    const handleShowPassword = () => setShowPassword(!showPassword)
    const handleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword)

    return (
        <>
            <Meta title="Sign up" />
            <BreadCrumb />
            <div className="flex items-start justify-center bg-gray-200 min-h-[80vh] p-4">
                <div className="bg-white rounded-md py-4 px-6 w-[32rem]">
                    <h1 className="text-center text-3xl font-medium">Sign up</h1>
                    <form className="flex flex-col gap-3 mt-4" onSubmit={handleSignUp}>
                        <div className="flex gap-2 items-center">
                            <div className="relative bg-gray-200 rounded-md p-2">
                                <input type="text" className="peer pt-4 px-2 size-full bg-transparent focus:outline-none"
                                    id="fullName"
                                    name="fullName"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    required
                                />
                                <label htmlFor="fullName" className={`absolute left-4 transition-all duration-300 font-medium text-gray-400  ${fullName ? 'text-xs top-2' : 'top-3.5 peer-focus:text-xs peer-focus:top-2'}`}>Full Name</label>
                            </div>
                            <div className="relative bg-gray-200 rounded-md p-2">
                                <input type="text" className="peer pt-4 px-2 size-full bg-transparent focus:outline-none"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    required
                                />
                                <label htmlFor="phoneNumber" className={`absolute left-4 transition-all duration-300 font-medium text-gray-400  ${phoneNumber ? 'text-xs top-2' : 'top-3.5 peer-focus:text-xs peer-focus:top-2'}`}>Phone Number</label>
                            </div>
                        </div>
                        <div className="relative bg-gray-200 rounded-md p-2">
                            <input type="text" className="peer pt-4 px-2 size-full bg-transparent focus:outline-none"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <label htmlFor="email" className={`absolute left-4 transition-all duration-300 font-medium text-gray-400  ${email ? 'text-xs top-2' : 'top-3.5 peer-focus:text-xs peer-focus:top-2'}`}>Email</label>
                        </div>
                        <div className="relative bg-gray-200 rounded-md p-2">
                            <input type={showPassword ? "text" : "password" } className="peer pt-4 px-2 size-full bg-transparent focus:outline-none" 
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <label htmlFor="password" className={`absolute left-4 transition-all duration-300 font-medium text-gray-400  ${password ? 'text-xs top-2' : 'top-3.5 peer-focus:text-xs peer-focus:top-2'}`}>Password</label>
                            {showPassword ? 
                                <Eye className={`absolute right-4 top-0 translate-y-2/3 cursor-pointer`} onClick={handleShowPassword} /> :
                                <EyeOff className={`absolute right-4 top-0 translate-y-2/3 cursor-pointer`} onClick={handleShowPassword} /> 
                            }
                        </div>
                        <div className="relative bg-gray-200 rounded-md p-2">
                            <input type={showConfirmPassword ? "text" : "password" } className="peer pt-4 px-2 size-full bg-transparent focus:outline-none"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            <label htmlFor="confirmPassword" className={`absolute left-4 transition-all duration-300 font-medium text-gray-400  ${confirmPassword ? 'text-xs top-2' : 'top-3.5 peer-focus:text-xs peer-focus:top-2'}`}>Confirm Password</label>
                            {showConfirmPassword ? 
                                <Eye className={`absolute right-4 top-0 translate-y-2/3 cursor-pointer`} onClick={handleShowConfirmPassword} /> :
                                <EyeOff className={`absolute right-4 top-0 translate-y-2/3 cursor-pointer`} onClick={handleShowConfirmPassword} /> 
                            }
                        </div>
                        <button 
                            className="text-white bg-orange-400 rounded-md py-2 px-4 hover:opacity-90"
                            disabled ={ isSigningUp }
                        >{isSigningUp ? "Loading..." : "Sign Up"}</button>
                        <span className="text-center">{"Already have an account? "}<Link to="/account/login" className="text-blue-600 hover:underline underline-offset-2">Login</Link></span>
                        <Link className="flex items-center justify-center border-black border-2 p-2 rounded-md">
                            <img src="/images/google.jpg" alt="Google" className="size-6" />
                            <span className="ml-2 text-md">Sign up with Google</span>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignupPage