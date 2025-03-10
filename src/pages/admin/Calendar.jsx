import { Calendar } from "antd";

function CalendarPage(){
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
    
        return <h1 className="text-2xl">{formattedDate} - {formattedTime}</h1>;
    };

    return (
        <div className="py-4 px-6">
            <TodayDateTime />
            <Calendar className="p-4" onPanelChange={onPanelChange} fullscreen={true} />
        </div>
    )
}

export default CalendarPage;