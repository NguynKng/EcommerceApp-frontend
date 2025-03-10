import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Config from "../../envVars";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";

function AddEditCoupon() {
    const [name, setName] = useState("");
    const [code, setCode] = useState("");
    const [discount, setDiscount] = useState("");
    const [expiryDate, setExpiryDate] = useState();
    const { id } = useParams();
    const navigate = useNavigate();

    // 🟢 Nếu có ID, tải dữ liệu thương hiệu cần chỉnh sửa
    useEffect(() => {
        const fetchData = async (id) => {
            if (id) {
                const response = await axios.get(
                    `${Config.BACKEND_URL}/api/v1/coupon/${id}`, 
                    { withCredentials: true }
                );
                const { data } = response;
                if (data.success) {
                    setName(data.coupon.name);
                    setCode(data.coupon.code);
                    setDiscount(data.coupon.discount);
                    setExpiryDate(data.coupon.expiryDate);
                }
            }
            else{
                setName("");
                setCode("");
                setDiscount("");
                setExpiryDate();
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
                    `${Config.BACKEND_URL}/api/v1/coupon/${id}`, 
                    {
                        name: name,
                        code: code,
                        discount: discount,
                        expiryDate: expiryDate
                    }, 
                    { withCredentials: true }
                );      
            } else {
                // 🔵 Chế độ thêm mới
                response = await axios.post(
                    `${Config.BACKEND_URL}/api/v1/coupon/add`, 
                    { 
                        name: name,
                        code: code,
                        discount: discount,
                        expiryDate: expiryDate 
                    }, 
                    { withCredentials: true }
                );
            }

            const { data } = response;
            if (data.success) {
                toast.success(data.message);
                
                navigate("/admin/coupon")
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
                    <Link to="/admin/coupon/add" className="px-4 py-2 rounded-md bg-blue-900 text-white text-center">Add Coupon</Link>
                    <Link to="/admin/coupon" className="px-4 py-2 rounded-md bg-blue-900 text-white text-center">Manage Coupon</Link>
                </div>
            </div>
            <h1 className="text-4xl font-medium text-center mt-2">{id ? "Edit Coupon" : "Add Coupon"}</h1>
            <form className="flex items-center justify-center gap-4 p-4" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="font-medium text-gray-700">Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-[40rem] px-4 py-2 border-2 border-gray-400 rounded-md"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="code" className="font-medium text-gray-700">Code</label>
                        <input
                            id="code"
                            type="text"
                            placeholder="Enter Code"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className="w-[40rem] px-4 py-2 border-2 border-gray-400 rounded-md"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="discount" className="font-medium text-gray-700">Discount</label>
                        <input
                            id="discount"
                            type="number"
                            placeholder="Enter Discount"
                            value={discount}
                            onChange={(e) => setDiscount(e.target.value)}
                            className="w-[40rem] px-4 py-2 border-2 border-gray-400 rounded-md"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="expiryDate" className="font-medium text-gray-700">Expiry Date</label>
                        <input
                            id="expiryDate"
                            type="date"
                            value={expiryDate ? new Date(expiryDate).toISOString().split("T")[0] : ""}
                            onChange={(e) => setExpiryDate(e.target.value)}
                            className="w-[40rem] px-4 py-2 border-2 border-gray-400 rounded-md"
                        />
                    </div>
                    <button className="px-4 py-2 text-white bg-blue-950 rounded-md" type="submit">
                    {id ? "Update" : "Add"}
                </button>
                </div>
            </form>
        </div>
    );
}

export default AddEditCoupon;
