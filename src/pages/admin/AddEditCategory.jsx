import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Config from "../../envVars";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";

function AddEditCategory() {
    const [category, setCategory] = useState("");  // State lưu tên thương hiệu
    const { id } = useParams(); // Lấy ID từ URL (nếu có)
    const navigate = useNavigate(); // Hook điều hướng

    // 🟢 Nếu có ID, tải dữ liệu thương hiệu cần chỉnh sửa
    useEffect(() => {
        const fetchData = async (id) => {
            if (id) {
                const response = await axios.get(
                    `${Config.BACKEND_URL}/api/v1/product-category/${id}`, 
                    { withCredentials: true }
                );
                const { data } = response;
                if (data.success) {
                    setCategory(data.category.name);
                }
            }
        }
        fetchData(id);
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response;
            if (id) {
                // 🟠 Chế độ chỉnh sửa
                response = await axios.put(
                    `${Config.BACKEND_URL}/api/v1/product-category/${id}`, 
                    { name: category }, 
                    { withCredentials: true }
                );      
            } else {
                // 🔵 Chế độ thêm mới
                response = await axios.post(
                    `${Config.BACKEND_URL}/api/v1/product-category/add`, 
                    { name: category }, 
                    { withCredentials: true }
                );
            }

            const { data } = response;
            if (data.success) {
                toast.success(data.message);
                
                navigate("/admin/product-category")
            } else {
                toast.error(data.message);
            }
        } catch (err) {
            console.error(err);
            toast.error(err.response?.data?.message || "An error occurred");
        }
    };

    return (
        <div className="p-4">
            <div className="flex items-center sm:flex-row flex-col justify-between gap-4">
                <div className="flex items-center gap-2">
                    <Link to="/admin/product-category/add" className="px-4 py-2 rounded-md bg-blue-900 text-white text-center">Add Category</Link>
                    <Link to="/admin/product-category" className="px-4 py-2 rounded-md bg-blue-900 text-white text-center">Manage Categories</Link>
                </div>
            </div>
            <h1 className="text-4xl font-medium text-center mt-2">{id ? "Edit Category" : "Add Category"}</h1>
            <form className="flex items-center justify-center gap-4 p-4" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="category" 
                    placeholder="Enter Category" 
                    className="w-[40rem] px-4 py-2 border-2 border-gray-400 rounded-md"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                />  
                <button className="px-4 py-2 text-white bg-blue-950 rounded-md w-36" type="submit">
                    {id ? "Update" : "Add"}
                </button>
            </form>
        </div>
    );
}

export default AddEditCategory;
