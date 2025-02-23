import { Link } from "react-router-dom"

function AddBlog_Category(){
    return (
        <div className="p-4">
            <div className="flex items-center sm:flex-row flex-col justify-between gap-4">
                <div className="flex items-center gap-2">
                    <Link to="/admin/blogs-category/add"className="px-4 py-2 rounded-md bg-blue-900 text-white text-center">Add Category</Link>
                    <Link to="/admin/blogs-category" className="px-4 py-2 rounded-md bg-blue-900 text-white text-center">Manage Category</Link>
                </div>
            </div>
            <h1 className="text-4xl font-medium text-center mt-2">Add Category</h1>
            <form className="flex items-center justify-center gap-4 p-4" encType="multipart/form-data">
                <input 
                    type="text" 
                    name="blog_category" 
                    placeholder="Enter Category" 
                    className="w-[40rem] px-4 py-2 border-2 border-gray-400 rounded-md" 
                    required
                />
                <button className="px-4 py-2 text-white bg-blue-950 rounded-md w-36">Add</button>
            </form>
        </div>
    )
}

export default AddBlog_Category