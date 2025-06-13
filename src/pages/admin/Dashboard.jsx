import { MoveDownRight, MoveUpRight } from "lucide-react";
import { Column } from "@ant-design/charts";
import { Pie } from '@ant-design/plots';
import { Table } from "antd";
import Flag from "react-world-flags";
import { countryFlags } from "../../utils/data/countryFlag";
import { Calendar, theme } from 'antd';

function Dashboard(){
    const CustomCalendar = () => {
        const onPanelChange = (value, mode) => {
            console.log(value.format('YYYY-MM-DD'), mode);
        };
        const TodayDateTime = () => {
            const now = new Date();
        
            // Format the date: "Monday, September 21, 2004"
            const formattedDate = now.toLocaleDateString("en-US", { 
                weekday: "long", 
                month: "long", 
                day: "numeric", 
                year: "numeric" 
            });
        
            // Format the time: "10:30 AM"
            const formattedTime = now.toLocaleTimeString("en-US", { 
                hour: "2-digit", 
                minute: "2-digit", 
                second: "2-digit", 
                hour12: true 
            });
        
            return <h1 className="mt-2 text-lg">{formattedDate} - {formattedTime}</h1>;
        };
        const { token } = theme.useToken()
        const wrapperStyle = {
            border: `1px solid ${token.colorBorderSecondary}`,
            borderRadius: token.borderRadiusLG,
        };
        return (
            <div style={wrapperStyle}>
              <Calendar fullscreen={false} onPanelChange={onPanelChange} />
              <TodayDateTime />
            </div>
        );
    }

    //Pie Chart Data
    const DemoPie = () => {
        const config = {
            data: [
                { type: 'Youtube', value: 27 },
                { type: 'Google', value: 25 },
                { type: 'Facebook', value: 18 },
                { type: 'Instagram', value: 15 },
                { type: 'Twitter', value: 10 },
                { type: 'Tiktok', value: 5 },
            ],
            angleField: 'value',
            colorField: 'type',
            label: {
                text: 'value',
                style: {
                    fontWeight: 'bold',
                    fontSize: 20,
                },
            },
            legend: {
                color: {
                    title: false,
                    position: 'right',
                    rowPadding: 5,
                },
            },
        };
        return <Pie {...config} />;
    };

    //Table Data
    const TableData = () => {
        const config = {
            dataSource: [
                {
                    key: '1',
                    no: 1,
                    status: 'Completed',
                    nationality: "USA",
                    customer: 'Alice Johnson',
                    date: '2024-02-05',
                    total: '$120.00',
                },
                {
                    key: '2',
                    no: 2,
                    status: 'Pending',
                    nationality: "Canada",
                    customer: 'Bob Smith',
                    date: '2024-02-04',
                    total: '$85.50',
                },
                {
                    key: '3',
                    no: 3,
                    status: 'Cancelled',
                    nationality: "UK",
                    customer: 'Charlie Brown',
                    date: '2024-02-03',
                    total: '$45.00',
                },
                {
                    key: '4',
                    no: 4,
                    status: 'Completed',
                    nationality: "Germany",
                    customer: 'David Lee',
                    date: '2024-02-02',
                    total: '$200.00',
                },
                {
                    key: '5',
                    no: 5,
                    status: 'Pending',
                    nationality: "France",
                    customer: 'Emma Wilson',
                    date: '2024-02-01',
                    total: '$90.75',
                },
                {
                    key: '6',
                    no: 6,
                    status: 'Completed',
                    nationality: "Japan",
                    customer: 'Fujiko Tanaka',
                    date: '2024-01-31',
                    total: '$150.25',
                },
                {
                    key: '7',
                    no: 7,
                    status: 'Cancelled',
                    nationality: "Australia",
                    customer: 'George White',
                    date: '2024-01-30',
                    total: '$60.00',
                },
                {
                    key: '8',
                    no: 8,
                    status: 'Completed',
                    nationality: "Brazil",
                    customer: 'Hannah Martinez',
                    date: '2024-01-29',
                    total: '$180.40',
                },
                {
                    key: '9',
                    no: 9,
                    status: 'Pending',
                    nationality: "Italy",
                    customer: 'Ivan Rossi',
                    date: '2024-01-28',
                    total: '$75.20',
                },
                {
                    key: '10',
                    no: 10,
                    status: 'Completed',
                    nationality: "India",
                    customer: 'Jasmine Patel',
                    date: '2024-01-27',
                    total: '$130.00',
                },
                {
                    key: '11',
                    no: 11,
                    status: 'Completed',
                    nationality: "Vietnam",
                    customer: 'Jasmine Patel',
                    date: '2024-01-27',
                    total: '$130.00',
                },
            ],
            columns: [
                {
                    title: 'No.',
                    dataIndex: 'no',
                    key: 'no',
                    align: 'center',
                },
                {
                    title: 'Status',
                    dataIndex: 'status',
                    key: 'status',
                    render: (text) => (
                        <div className={`text-${text === "Completed" ? 'green-500' : text === "Pending" ? "gray-500" : "red-500"} text-sm border-2 ${text === "Completed" ? 'border-green-500' : text === "Pending" ? "border-gray-500" : "border-red-500"} p-1 rounded text-center`}>{text}</div>
                    ),
                    align: 'center',
                },
                {
                    title: 'Nationality',
                    dataIndex: 'nationality',
                    key: 'nationality',
                    render: (text) => (
                        <span className="flex justify-center items-center gap-2">
                            <Flag code={countryFlags[text]} className="w-6 h-4" />
                            {text}
                        </span>
                    ),
                    align: 'center',
                },
                {
                    title: 'Customer',
                    dataIndex: 'customer',
                    key: 'customer',
                    align: 'center',
                },
                {
                    title: 'Date',
                    dataIndex: 'date',
                    key: 'date',
                    align: 'center',
                },
                {
                    title: 'Total',
                    dataIndex: 'total',
                    key: 'total',
                    align: 'center',
                },
            ]
        }
        return <Table {...config} pagination={{ pageSize: 5 }} bordered={true} scroll={{x:"max-content"}} />
    }
    
    //Column Chart Data
    const DemoColumn = () => {
        const config = {
            data: [
                { type: 'January', value: 0.16 },
                { type: 'February', value: 0.125 },
                { type: 'March', value: 0.24 },
                { type: 'April', value: 0.19 },
                { type: 'May', value: 0.22 },
                { type: 'June', value: 0.05 },
                { type: 'July', value: 0.01 },
                { type: 'August', value: 0.015 },
                { type: 'September', value: 0.22 },
                { type: 'October', value: 0.05 },
                { type: 'November', value: 0.01 },
                { type: 'December', value: 0.015 }
            ],
            xField: 'type',
            yField: 'value',
            padding: true,
            autoFit: true,
            style: {
                fill: () => {
                return '#2d69e0';
                },
            },
            label: {
                text: (originData) => {
                const val = parseFloat(originData.value);
                if (val < 0.05) {
                    return (val * 100).toFixed(1) + '%';
                }
                return '';
                },
                offset: 10,
            },
            legend: false,
        };
        return <Column {...config} />;
    };

    return (
        <div className="py-4 px-6">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center gap-4">
                <div className="flex justify-between items-center border-2 border-black bg-white px-4 py-2 min-h-24 rounded-md">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-gray-400">Sales</h1>
                        <span className="text-2xl">2.382</span>
                    </div>
                    <div className="flex flex-col items-center justify-center self-end">
                        <div className="flex gap-1 self-end items-center text-red-500">
                            <MoveDownRight className="size-4" />
                            <span>3.65%</span>
                        </div>
                        <span className="text-sm text-gray-400 text-right">Since last week</span>
                    </div>
                </div>
                <div className="flex justify-between items-center bg-white border-2 border-black px-4 py-2 min-h-24 rounded-md">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-gray-400">Earnings</h1>
                        <span className="text-2xl">$21.300</span>
                    </div>
                    <div className="flex flex-col items-center justify-center self-end">
                        <div className="flex gap-1 self-end items-center text-green-500">
                            <MoveUpRight className="size-4" />
                            <span>6.65%</span>
                        </div>
                        <span className="text-sm text-gray-400 text-right">Since last week</span>
                    </div>
                </div>
                <div className="flex justify-between items-center bg-white border-2 border-black px-4 py-2 min-h-24 rounded-md">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-gray-400">Visitors</h1>
                        <span className="text-2xl">14.212</span>
                    </div>
                    <div className="flex flex-col items-center justify-center self-end">
                        <div className="flex gap-1 self-end items-center text-green-500">
                            <MoveUpRight className="size-4" />
                            <span>5.25%</span>
                        </div>
                        <span className="text-sm text-gray-400 text-right">Since last week</span>
                    </div>
                </div>
                <div className="flex justify-between items-center bg-white border-2 border-black px-4 py-2 min-h-24 rounded-md">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-gray-400">Orders</h1>
                        <span className="text-2xl">64</span>
                    </div>
                    <div className="flex flex-col items-center justify-center self-end">
                        <div className="flex gap-1 self-end items-center text-red-500">
                            <MoveDownRight className="size-4" />
                            <span>2.25%</span>
                        </div>
                        <span className="text-sm text-gray-400 text-right">Since last week</span>
                    </div>
                </div>
            </div>
            <div className="mt-4 flex lg:flex-row flex-col gap-4">
                <div className="lg:w-[40%] w-full bg-white p-4 rounded-md">
                    <h1 className="text-2xl mb-4">Calendar</h1>
                    <CustomCalendar />
                    <h1></h1>
                </div>
                <div className="lg:w-[60%] w-full bg-white p-4 rounded-md">
                    <h1 className="text-2xl mb-4">Income Statics</h1>
                    <DemoColumn />
                </div>
            </div>
            <div className="mt-4 flex lg:flex-row flex-col gap-4">
                <div className="lg:w-[60%] w-full bg-white p-4 rounded-md">
                    <h1 className="text-2xl mb-4">Recent Order</h1>
                    <TableData />
                </div>
                <div className="lg:w-[40%] w-full bg-white p-4 rounded-md">
                    <h1 className="text-2xl mb-4">Sales By Traffic Source</h1>
                    <DemoPie />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;