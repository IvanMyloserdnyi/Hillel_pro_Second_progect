import s from "./Converter.module.css";
import {useState} from "react";

export function CustomCalendar(props) {
    const currentDate = props.currentDate
    const [selectedDate, setSelectedDate] = useState(currentDate);
    return (
            <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className={s.custom_calendar}
            />
    );
}