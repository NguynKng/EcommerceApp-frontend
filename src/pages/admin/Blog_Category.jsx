import { Search } from "lucide-react"
import { Link } from "react-router-dom"
import { Table } from "antd";

function Blog_Category(){
    const CategoryTable = () => {
        const config = {
            dataSource: [
                {
                    key: '1',
                    no: 1,
                    category: "Technology",
                },
                {
                    key: '2',
                    no: 2,
                    category: "Travel",
                },
                {
                    key: '3',
                    no: 3,
                    category: "Finance",
                },
                {
                    key: '4',
                    no: 4,
                    category: "Business",
                },
                {
                    key: '5',
                    no: 5,
                    category: "Automobile",
                },
                {
                    key: '6',
                    no: 6,
                    category: "Education",
                },
                {
                    key: '7',
                    no: 7,
                    category: "Lifestyle",
                },
                {
                    key: '8',
                    no: 8,
                    category: "News",
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
                    title: 'Name',
                    dataIndex: 'category',
                    key: 'category',
                    align: 'center',
                    className:"text-lg"
                }
            ]
        }
        return <Table {...config} 
            pagination={{ pageSize: 5 }} 
            bordered={true} 
            scroll={{ x:"max-content" }} 
            className="mt-6 w-[56rem] mx-auto"
            size={"middle"}
            loading={false}
        />
    }
    
    return (
        <div className="p-4">
            <div className="flex sm:flex-row flex-col items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <Link to="/admin/blogs-category/add"className="px-4 py-2 rounded-md bg-blue-900 text-white text-center">Add Category</Link>
                    <Link to="/admin/blogs-category" className="px-4 py-2 rounded-md bg-blue-900 text-white text-center">Manage Category</Link>
                </div>
                <div className="flex items-center gap-2">
                    <input 
                        type="text" 
                        className="rounded-md border-[1px] border-black px-4 py-2 max-w-[20rem]"
                        placeholder="Search Category..."
                    />
                    <Search className="size-5 cursor-pointer" />
                </div>
            </div>
            <h1 className="text-4xl font-medium text-center mt-4">Manage Category</h1>
            <CategoryTable />
        </div>
    )
}

export default Blog_Category