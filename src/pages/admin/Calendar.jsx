import { Calendar } from "antd";

function CalendarPage(){
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };

    return (
        <div className="py-4 px-6">
            <Calendar className="p-4" onPanelChange={onPanelChange} fullscreen={true} />
        </div>
    )
}

export default CalendarPage;