import { Search } from "lucide-react"
import { Link } from "react-router-dom"
import { Table } from "antd";

function ManageBlog(){
    const BlogTable = () => {
        const config = {
            dataSource: [
                {
                    key: '1',
                    no: 1,
                    thumbnail: "/images/blog-1.jpg",
                    title: "The Future of AI in Everyday Life",
                    author: "John Doe",
                    category: "Technology"
                },
                {
                    key: '2',
                    no: 2,
                    thumbnail: "/images/blog-1.jpg",
                    title: "10 Best Travel Destinations for 2024",
                    author: "Emily Carter",
                    category: "Travel"
                },
                {
                    key: '3',
                    no: 3,
                    thumbnail: "/images/blog-1.jpg",
                    title: "Stock Market Trends to Watch This Year",
                    author: "Sarah Johnson",
                    category: "Finance"
                },
                {
                    key: '4',
                    no: 4,
                    thumbnail: "/images/blog-1.jpg",
                    title: "How to Improve Productivity at Work",
                    author: "Michael Lee",
                    category: "Business"
                },
                {
                    key: '5',
                    no: 5,
                    thumbnail: "/images/blog-1.jpg",
                    title: "The Rise of Electric Cars: What’s Next?",
                    author: "Alex Brown",
                    category: "Automobile"
                },
                {
                    key: '6',
                    no: 6,
                    thumbnail: "/images/blog-1.jpg",
                    title: "A Guide to Learning Web Development",
                    author: "Jessica White",
                    category: "Education"
                },
                {
                    key: '7',
                    no: 7,
                    thumbnail: "/images/blog-1.jpg",
                    title: "The Power of Minimalism: Declutter Your Life",
                    author: "Robert King",
                    category: "Lifestyle"
                },
                {
                    key: '8',
                    no: 8,
                    thumbnail: "/images/blog-1.jpg",
                    title: "Breaking News: Major Tech Merger Announced",
                    author: "Admin",
                    category: "News"
                },
                {
                    key: '9',
                    no: 9,
                    thumbnail: "/images/blog-1.jpg",
                    title: "The Power of Minimalism: Declutter Your Life",
                    author: "Robert King",
                    category: "Lifestyle"
                },
                {
                    key: '10',
                    no: 10,
                    thumbnail: "/images/blog-1.jpg",
                    title: "The Power of Minimalism: Declutter Your Life",
                    author: "Robert King",
                    category: "Lifestyle"
                }
            ],
            columns: [
                {
                    title: 'No.',
                    dataIndex: 'no',
                    key: 'no',
                    align: 'center',
                    className:"text-lg"
                },
                {
                    title: 'Thumbnail',
                    dataIndex: 'thumbnail',
                    key: 'thumbnail',
                    render: (image) => (
                        <img className="w-24 h-16 object-cover mx-auto" src={image} alt="thumbnail" />
                    ),
                    align: 'center',
                    width: "10rem",
                    className:"text-lg"
                },
                {
                    title: 'Title',
                    dataIndex: 'title',
                    key: 'title',
                    align: 'center',
                    className:"text-lg"
                },
                {
                    title: 'Author',
                    dataIndex: 'author',
                    key: 'author',
                    align: 'center',
                    className:"text-lg"
                },
                {
                    title: 'Category',
                    dataIndex: 'category',
                    key: 'category',
                    align: 'center',
                    className:"text-lg"
                },
                {
                    title: 'Action',
                    dataIndex: 'action',
                    key: 'action',
                    render: () => (
                        <div className="flex items-center justify-center gap-2">
                            <Link className="px-4 py-2 rounded-md bg-blue-900 text-white">Edit</Link>
                            <Link className="px-4 py-2 rounded-md bg-red-500 text-white">Delete</Link>
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
            scroll={{ x:"max-content" }} 
            className="mt-6"
            size={"middle"}
            loading={false}
        />
    }

    return (
        <div className="p-4">
            <div className="flex items-center sm:flex-row flex-col justify-between gap-4">
                <div className="flex items-center gap-2">
                    <Link to="/admin/blogs/add"className="px-4 py-2 rounded-md bg-blue-900 text-white text-center">Add Blog</Link>
                    <Link to="/admin/blogs" className="px-4 py-2 rounded-md bg-blue-900 text-white text-center">Manage Blogs</Link>
                </div>
                <div className="flex items-center gap-2">
                    <input 
                        type="text" 
                        className="rounded-md border-[1px] border-black px-4 py-2 max-w-[20rem]"
                        placeholder="Search Blog..."
                    />
                    <Search className="size-5 cursor-pointer" />
                </div>
            </div>
            <h1 className="text-4xl font-medium text-center mt-4">Manage Blogs</h1>
            <BlogTable />
        </div>
    )
}

export default ManageBlog