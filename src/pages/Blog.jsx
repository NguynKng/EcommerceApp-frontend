import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { ListBlog } from "../utils/data/blog";

function Blog(){
    return (
        <>
            <Meta title="Blog" />
            <BreadCrumb />
            <div className="py-6 px-4 bg-gray-200">
                <div className="max-w-[86rem] mx-auto flex md:flex-row flex-col gap-4">
                    <div className="flex flex-col gap-4 md:w-[16rem] w-full">
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
                        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                            {ListBlog.map((blog, index) => (
                                <BlogCard key={index} blog={blog} />
                            ))}
                        </div>
                        <div className="flex justify-center mt-6">
                            <Link to="/blogs" className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200">View All Blogs</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog