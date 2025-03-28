import { Search } from "lucide-react"
import { Link } from "react-router-dom"
import { Table, message } from "antd"
import { useEffect, useState } from "react"
import axios from "axios"
import Config from "../../envVars"
import toast from "react-hot-toast"
import { formatTime } from "../../utils/formattedFunction"

function ManageCoupon() {
    const [coupons, setCoupons] = useState([])
    const [query, setQuery] = useState("")
    const [loading, setLoading] = useState(true)

    const handleSearch = async () => {
        try{
            const response = await axios.get(`${Config.BACKEND_URL}/api/v1/coupon?query=${query}`, {
                withCredentials: true
            })
            setCoupons(response.data.coupons)
        }catch(err){
            console.error(err)
            toast.error(err.response?.data?.message || "An error occurred")
        }
    }
    
    const handleDeleteCoupon = async (id) => {
        const response = await axios.delete(`${Config.BACKEND_URL}/api/v1/coupon/${id}`, { withCredentials: true })
        const { data } = response
        if (data.success) {
            toast.success(data.message)
            setCoupons((prevCoupons) => prevCoupons.filter((coupon) => coupon._id !== id));
        } else {
            toast.error(data.message)
        }
    }

    useEffect(() => {
        const fetchCoupons = async () => {
            try {
                const response = await axios.get(`${Config.BACKEND_URL}/api/v1/coupon`, {
                    withCredentials: true
                })
                setCoupons(response.data.coupons)
            } catch (error) {
                console.error("Error fetching coupons:", error)
                message.error("Failed to load coupons. Please try again later.")
            } finally {
                setLoading(false)
            }
        }
        fetchCoupons()
    }, [])

    const CouponTable = () => {
        const config = {
            dataSource: coupons.map((coupon, index) => ({
                key: coupon._id,
                no: index + 1,
                name: coupon.name,
                code: coupon.code,
                discount: coupon.discount,
                expiryDate: formatTime(coupon.expiryDate),
                id: coupon._id
            })),
            columns: [
                {
                    title: 'No.',
                    dataIndex: 'no',
                    key: 'no',
                    align: 'center',
                    className: "text-lg"
                },
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                    align: 'center',
                    className: "text-lg",
                    width: "20rem"
                },
                {
                    title: 'Code',
                    dataIndex: 'code',
                    key: 'code',
                    align: 'center',
                    className: "text-lg"
                },
                {
                    title: 'Discount (%)',
                    dataIndex: 'discount',
                    key: 'discount',
                    align: 'center',
                    className: "text-lg",
                    width: "10rem"
                },
                {
                    title: 'Expiry Date',
                    dataIndex: 'expiryDate',
                    key: 'expiryDate',
                    align: 'center',
                    className: "text-lg"
                },
                {
                    title: 'Action',
                    dataIndex: 'id',
                    key: 'action',
                    render: (id) => (
                        <div className="flex items-center justify-center gap-2">
                            <Link to={`/admin/coupon/edit/${id}`} className="px-4 py-2 rounded-md bg-blue-900 text-white">Edit</Link>
                            <Link className="px-4 py-2 rounded-md bg-red-500 text-white" onClick={() => handleDeleteCoupon(id)}>Delete</Link>
                        </div>
                    ),
                    align: 'center',
                    width: "16rem",
                    className:"text-lg"
                }
            ]
        }

        return <Table {...config}
            pagination={{ pageSize: 5 }}
            bordered={true}
            scroll={{ x: "max-content" }}
            className="mt-6 mx-auto"
            size="middle"
            loading={loading}
        />
    }

    return (
        <div className="p-4">
            <div className="flex sm:flex-row flex-col items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <Link to="/admin/coupon/add" className="px-4 py-2 rounded-md bg-blue-900 text-white text-center">Add Coupon</Link>
                    <Link to="/admin/coupon" className="px-4 py-2 rounded-md bg-blue-900 text-white text-center">Manage Coupon</Link>
                </div>
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        name="query"
                        className="rounded-md border-[1px] border-black px-4 py-2 max-w-[20rem]"
                        placeholder="Search Coupon..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <Search className="size-5 cursor-pointer" onClick={() => handleSearch()} />
                </div>
            </div>
            <h1 className="text-4xl font-medium text-center mt-4">Manage Coupon</h1>
            <CouponTable />
        </div>
    )
}

export default ManageCoupon
