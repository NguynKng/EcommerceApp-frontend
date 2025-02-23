import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";

function Blog(){
    return (
        <>
            <Meta title="Blog" />
            <BreadCrumb />
            <div className="py-6 px-4 bg-gray-200">
                <div className="max-w-[86rem] mx-auto flex md:flex-row flex-col gap-4">
                    <div className="flex flex-col gap-4 w-[16rem]">
                        <div className="py-2 px-4 bg-white rounded-md w-full">
                            <h3 className="font-medium mb-4 text-lg">Find By Categories</h3>
                            <div>
                                <Link to="#" className="block text-gray-400 text-sm leading-8 hover:text-black">Watch</Link>
                                <Link to="#" className="block text-gray-400 text-sm leading-8 hover:text-black">TV</Link>
                                <Link to="#" className="block text-gray-400 text-sm leading-8 hover:text-black">Camera</Link>
                                <Link to="#" className="block text-gray-400 text-sm leading-8 hover:text-black">Laptop</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <BlogCard page="blogs" />
                        <BlogCard page="blogs" />
                        <BlogCard page="blogs" />
                        <BlogCard page="blogs" />
                        <BlogCard page="blogs" />
                        <BlogCard page="blogs" />
                        <BlogCard page="blogs" />
                        <BlogCard page="blogs" />
                        <BlogCard page="blogs" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog