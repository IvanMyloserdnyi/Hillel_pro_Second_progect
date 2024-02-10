import s from "./Converter.module.css";

export function CustomCalendar({selectedDate, setValidDate}) {
    return (
            <input
                type="date"
                value={selectedDate}
                onChange={(e) => setValidDate(e)}
                className={s.custom_calendar}
            />
    );
}