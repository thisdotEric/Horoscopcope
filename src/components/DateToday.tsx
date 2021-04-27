import React from "react";
import "./DateToday.css";

interface DateTodayProps {
  dateToday: string;
}

const DateToday: React.FC<DateTodayProps> = ({ dateToday }) => {
  return (
    <div className="date-card">
      <p className="label">Today: </p>
      <p className="current-date">{dateToday}</p>
    </div>
  );
};

export default DateToday;
