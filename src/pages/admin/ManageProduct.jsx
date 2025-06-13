import { ChevronDown, Search } from "lucide-react"
import { Link } from "react-router-dom"
import { Table } from "antd"
import { useEffect, useState } from "react"
import axios from "axios"
import Config from "../../envVars"
import toast from "react-hot-toast"
import Swal from 'sweetalert2'

function ManageProduct() {
    const [products, setProducts] = useState([])
    const [query, setQuery] = useState("")
    const [loading, setLoading] = useState(true)
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("default");

    const handleSearch = async () => {
        try{
            const response = await axios.get(`${Config.BACKEND_URL}/api/v1/product?query=${query}`, {
                withCredentials: true
            })
            setProducts(response.data.products)
        }catch(err){
            console.error(err)
            toast.error(err.response?.data?.message || "An error occurred")
        }
    }
    
    const handleDeleteProduct = async (id) => {
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: 'Do you want to delete this product?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'Cancel',
            });
            
            if (result.isConfirmed) {
                const response = await axios.delete(`${Config.BACKEND_URL}/api/v1/product/${id}`, { 
                    withCredentials: true 
                });
                const { data } = response;
                if (data.success) {
                    toast.success(data.message);
                    setProducts((prevProducts) => prevProducts.filter((product) => product._id !== id));
                } else {
                    toast.error(data.message);
                }
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || "An error occurred");
        }
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const url = selectedCategory === "default" ? `${Config.BACKEND_URL}/api/v1/product` : `${Config.BACKEND_URL}/api/v1/product?category=${selectedCategory}`;

                const response = await axios.get(url, {
                    withCredentials: true
                })
                setProducts(response.data.products)
            } catch (error) {
                console.error("Error fetching products:", error)
                toast.error("Failed to load products. Please try again later.")
            } finally {
                setLoading(false)
            }
        }
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${Config.BACKEND_URL}/api/v1/product-category`, {
                    withCredentials: true
                })
                setCategories(response.data.categories)
            } catch (error) {
                console.error("Error fetching products:", error)
                toast.error("Failed to load products. Please try again later.")
            }
        }
        fetchCategories()
        fetchProducts()
    }, [selectedCategory])

    const ProductTable = () => {
        const config = {
            dataSource: products.map((product, index) => ({
                key: product._id,
                no: index + 1,
                name: product.name,
                id: product._id,
                images: product.images,
                price: product.price,
                category: product.category,
                quantity: product.quantity,
                brand: product.brand
            })),
            columns: [
                {
                    title: 'No.',
                    dataIndex: 'no',
                    key: 'no',
                    width: "5rem",
                    align: 'center',
                    className: "text-lg"
                },
                {
                    title: 'Thumbnail',
                    dataIndex: 'images',
                    key: 'images',
                    render: (images) => {
                        const thumbnail = images.find(img => img.type === 'thumbnail');
                        return (
                            <div className="flex items-center justify-center">
                                <img 
                                    src={thumbnail ? `${Config.BACKEND_URL}/images/${thumbnail.path} `
                                        : `/images/no-thumbnail.png`} 
                                    alt="Product Thumbnail" 
                                    className="size-12 object-cover rounded-md"  
                                />
                            </div>
                          );
                    },
                    align: 'center',
                    width: "10rem",
                    className:"text-lg"
                },
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                    width: "20rem",
                    align: 'center',
                    className: "text-lg"
                },
                {
                    title: 'Category',
                    dataIndex: 'category',
                    key: 'category',
                    width:"8rem",
                    align: 'center',
                    className: "text-lg"
                },
                {
                    title: 'Brand',
                    dataIndex: 'brand',
                    key: 'brand',
                    width:"8rem",
                    align: 'center',
                    className: "text-lg"
                },
                {
                    title: 'Price ($)',
                    dataIndex: 'price',
                    key: 'price',
                    align: 'center',
                    className: "text-lg"
                },
                {
                    title: 'Quantity',
                    dataIndex: 'quantity',
                    key: 'quantity',
                    align: 'center',
                    className: "text-lg"
                },
                {
                    title: 'Action',
                    dataIndex: 'id',
                    key: 'action',
                    render: (id) => (
                        <div className="flex items-center justify-center gap-2">
                            <Link to={`/admin/product/edit/${id}`} className="px-4 py-2 rounded-md hover:text-blue-500 bg-blue-900 text-white">Edit</Link>
                            <div className="px-4 py-2 rounded-md bg-red-500 hover:text-red-700 text-white cursor-pointer" onClick={() => handleDeleteProduct(id)}>Delete</div>
                        </div>
                    ),
                    align: 'center',
                    width: "12rem",
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
                    <Link to="/admin/product/add" className="px-4 py-2 rounded-md bg-blue-900 text-white text-center">Add Product</Link>
                    <Link to="/admin/product" className="px-4 py-2 rounded-md bg-blue-900 text-white text-center">Manage Product</Link>
                </div>
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        name="query"
                        className="rounded-md border-[1px] border-black px-4 py-2 w-full"
                        placeholder="Search Product..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <Search className="size-5 cursor-pointer" onClick={() => handleSearch()} />
                </div>
            </div>
            <h1 className="text-4xl font-medium text-center mt-4">Manage Product</h1>
            <div className="flex items-center justify-between gap-2">
                <div className="relative w-40 border-2 border-gray-200 rounded-md mt-4">
                    <select className="size-full px-4 py-2 appearance-none" 
                        name="productBrand" 
                        id="productBrand"
                        value={selectedCategory} 
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="default">All</option>
                        {categories.map((category) => (
                            <option key={category._id} value={category.name}>{category.name}</option>
                        ))}
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                    </div>
                </div>
                <h2 className="text-xl font-medium">{`Total (${products?.length})`}</h2>
            </div>
            <ProductTable />
        </div>
    )
}

export default ManageProduct
