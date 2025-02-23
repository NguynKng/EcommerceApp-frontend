import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

function ResetPasswordPage(){
    return (
        <>
            <Meta title="Reset Password" />
            <BreadCrumb />
            <div className="flex items-start justify-center bg-gray-200 h-[32rem] p-4">
                <div className="flex flex-col items-center gap-4 bg-white rounded-md py-4 px-6 w-[26rem] mt-4">
                    <h1 className="text-center text-xl font-medium text-black">Reset Your Password</h1>
                    <p className="text-sm text-center text-gray-500">We will send you an email to reset your password</p>
                    <input type="text" placeholder="Email" className="py-2 px-4 text-sm block w-full h-10 bg-gray-200 rounded-md" />
                    <button className="bg-black hover:bg-orange-500 text-white rounded-full px-6 py-2 text-sm">Submit</button>
                </div>
            </div>
        </>
    )
}

export default ResetPasswordPage