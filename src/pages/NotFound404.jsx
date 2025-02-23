import { Link } from "react-router-dom";

function NotFound404() {
    return (
        <>
            <div className="py-6 px-4 flex md:flex-row flex-col justify-center items-center min-h-[80vh]">
                <div className="max-w-[86rem] mx-auto flex md:flex-row flex-col justify-center items-center">
                    <img src="/images/404cry.jpg" className="md:w-[30rem] w-full" />
                    <div className="p-2 flex flex-col items-center gap-6 md:w-[28rem] w-full">
                        <h1 className="text-4xl text-gray-700 text-center">{"Awww...Don't Cry."}</h1>
                        <h2 className="text-lg text-gray-500 ">{"It's just a 404 Error!"}</h2>
                        <p className="text-base text-gray-500 text-center">{"What you're looking for may have been misplaced in Long Term Memory"}</p>
                        <Link to="/" className="py-2 px-4 bg-indigo-600 text-white rounded-md hover:opacity-80">Go Home</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NotFound404;