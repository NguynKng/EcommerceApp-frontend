import { Link } from "react-router-dom"
import { useState } from "react"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function AddBlog(){
    const [value, setValue] = useState('');

    return (
        <div className="py-4">
            <div className="flex items-center sm:flex-row flex-col justify-between gap-4 px-4">
                <div className="flex items-center gap-2">
                    <Link to="/admin/blogs/add"className="px-4 py-2 rounded-md bg-blue-900 text-white text-center">Add Blog</Link>
                    <Link to="/admin/blogs" className="px-4 py-2 rounded-md bg-blue-900 text-white text-center">Manage Blogs</Link>
                </div>
            </div>
            <h1 className="text-4xl font-medium text-center mt-2">Add Blog</h1>
            <form className="flex gap-4 p-4 h-[70%]" encType="multipart/form-data">
                <div className="w-[70%]">
                    <label htmlFor="content" className="text-lg font-medium">Content</label>
                    <ReactQuill id="content" className="rounded-md h-full" theme="snow" value={value} onChange={setValue} />
                </div>
                <div className="w-[30%] flex flex-col gap-2">
                    <div>
                        <label htmlFor="title" className="text-lg font-medium">Title</label>
                        <input 
                            id="title"
                            type="text" 
                            className="w-full py-2 px-4 border-[1px] border-black rounded-md"
                            placeholder="Title..."
                        />
                    </div>
                    <div>
                        <label htmlFor="thumbnail" className="text-lg font-medium">Select Thumbnail</label>
                        <input
                            id="thumbnail"
                            type="file" 
                            className="w-full py-2 px-4 border-[1px] border-black rounded-md"
                            placeholder="Title..."
                        />
                    </div>
                    <div>
                        <label htmlFor="category" className="text-lg font-medium">Category</label>
                        <select id="category" className="w-full py-2 px-4 border-[1px] border-black rounded-md">
                            <option selected value="">---Choose Category---</option>
                            <option value="technology">Technology</option>
                            <option value="travel">Travel</option>
                            <option value="finance">Finance</option>
                            <option value="business">Business</option>
                            <option value="automobile">Automobile</option>
                            <option value="education">Education</option>
                            <option value="lifestyle">Lifestyle</option>
                            <option value="news">News</option>
                        </select>
                    </div>
                    <button className="self-start px-4 py-2 text-white bg-blue-950 rounded-md w-36">Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddBlog