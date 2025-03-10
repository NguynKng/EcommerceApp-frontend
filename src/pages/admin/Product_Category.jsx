import { Search } from "lucide-react"
import { Link } from "react-router-dom"
import { Table, message } from "antd"
import { useEffect, useState } from "react"
import axios from "axios"
import Config from "../../envVars"
import toast from "react-hot-toast"

function Product_Category() {
    const [productCategories, setProductCategories] = useState([])
    const [query, setQuery] = useState("")
    const [loading, setLoading] = useState(true)

    const handleSearch = async () => {
        try{
            const response = await axios.get(`${Config.BACKEND_URL}/api/v1/product-category?query=${query}`, {
                withCredentials: true
            })
            setProductCategories(response.data.categories)
        }catch(err){
            console.error(err)
            toast.error(err.response?.data?.message || "An error occurred")
        }
    }
    
    const handleDeleteCategory = async (id) => {
        const response = await axios.delete(`${Config.BACKEND_URL}/api/v1/product-category/${id}`, { withCredentials: true })
        const {data} = response
        if (data.success) {
            toast.success(data.message)
            setProductCategories((prevCategories) => prevCategories.filter((category) => category._id !== id));
        } else {
            toast.error(data.message)
        }
    }

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${Config.BACKEND_URL}/api/v1/product-category`, {
                    withCredentials: true
                })
                setProductCategories(response.data.categories)
            } catch (error) {
                console.error("Error fetching categories:", error)
                message.error("Failed to load categories. Please try again later.")
            } finally {
                setLoading(false)
            }
        }
        fetchCategories()
    }, [])

    const ProductCategoryTable = () => {
        const config = {
            dataSource: productCategories.map((productCategory, index) => ({
                key: productCategory._id,
                no: index + 1,
                name: productCategory.name,
                id: productCategory._id
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
                    className: "text-lg"
                },
                {
                    title: 'Action',
                    dataIndex: 'id',
                    key: 'action',
                    render: (id) => (
                        <div className="flex items-center justify-center gap-2">
                            <Link to={`/admin/product-category/edit/${id}`} className="px-4 py-2 rounded-md bg-blue-900 text-white">Edit</Link>
                            <Link className="px-4 py-2 rounded-md bg-red-500 text-white" onClick={() => handleDeleteCategory(id)}>Delete</Link>
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
            className="mt-6 w-[56rem] mx-auto"
            size="middle"
            loading={loading}
        />
    }

    return (
        <div className="p-4">
            <div className="flex sm:flex-row flex-col items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <Link to="/admin/product-category/add" className="px-4 py-2 rounded-md bg-blue-900 text-white text-center">Add Category</Link>
                    <Link to="/admin/product-category" className="px-4 py-2 rounded-md bg-blue-900 text-white text-center">Manage Category</Link>
                </div>
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        name="query"
                        className="rounded-md border-[1px] border-black px-4 py-2 max-w-[20rem]"
                        placeholder="Search Category..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <Search className="size-5 cursor-pointer" onClick={() => handleSearch()} />
                </div>
            </div>
            <h1 className="text-4xl font-medium text-center mt-4">Manage Category</h1>
            <ProductCategoryTable />
        </div>
    )
}

export default Product_Category
