import { Table } from "antd";
function Customers(){
    const TableData = () => {
        const config = {
            dataSource: [
                {
                    key: '1',
                    no: 1,
                    name: 'Alice Johnson',
                    email: 'alice.johnson@example.com',
                    orders: 5,
                    total: '$120.00',
                },
                {
                    key: '2',
                    no: 2,
                    name: 'Bob Smith',
                    email: 'bob.smith@example.com',
                    orders: 3,
                    total: '$85.50',
                },
                {
                    key: '3',
                    no: 3,
                    name: 'Charlie Brown',
                    email: 'charlie.brown@example.com',
                    orders: 2,
                    total: '$45.00',
                },
                {
                    key: '4',
                    no: 4,
                    name: 'David Lee',
                    email: 'david.lee@example.com',
                    orders: 7,
                    total: '$200.00',
                },
                {
                    key: '5',
                    no: 5,
                    name: 'Emma Wilson',
                    email: 'emma.wilson@example.com',
                    orders: 4,
                    total: '$90.75',
                },
                {
                    key: '6',
                    no: 6,
                    name: 'Fujiko Tanaka',
                    email: 'fujiko.tanaka@example.com',
                    orders: 6,
                    total: '$150.25',
                },
                {
                    key: '7',
                    no: 7,
                    name: 'George White',
                    email: 'george.white@example.com',
                    orders: 3,
                    total: '$60.00',
                },
                {
                    key: '8',
                    no: 8,
                    name: 'Hannah Martinez',
                    email: 'hannah.martinez@example.com',
                    orders: 8,
                    total: '$180.40',
                },
                {
                    key: '9',
                    no: 9,
                    name: 'Ivan Rossi',
                    email: 'ivan.rossi@example.com',
                    orders: 2,
                    total: '$75.20',
                },
                {
                    key: '10',
                    no: 10,
                    name: 'Jasmine Patel',
                    email: 'jasmine.patel@example.com',
                    orders: 5,
                    total: '$130.00',
                },
            ],
            columns: [
                {
                    title: 'No.',
                    dataIndex: 'no',
                    key: 'no',
                    align: 'center',
                    className: 'text-lg'
                },
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                    align: 'center',
                    className: 'text-lg'
                },
                {
                    title: 'Email',
                    dataIndex: 'email',
                    key: 'email',
                    align: 'center',
                    className: 'text-lg'
                },
                {
                    title: 'Orders',
                    dataIndex: 'orders',
                    key: 'orders',
                    align: 'center',
                    className: 'text-lg'
                },
                {
                    title: 'Total',
                    dataIndex: 'total',
                    key: 'total',
                    align: 'center',
                    className: 'text-lg'
                },
            ],
        };

        return <Table {...config} pagination={{ pageSize: 5 }} bordered={true} scroll={{ x: "max-content" }} />;
    };
    
    return (
        <>
            <div className="py-4 px-6">
                <div>
                    <TableData />
                </div>
            </div>
        </>
    )
}

export default Customers;