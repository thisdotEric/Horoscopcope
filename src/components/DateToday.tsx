import React from 'react';
import './DateToday.css';

interface DateTodayProps {
  dateToday: string;
}

const DateToday: React.FC<DateTodayProps> = ({ dateToday }) => {
  return (
    <div className="date-card">
      <div className="date-today">
        <p className="label">Today: </p>
        <p className="current-date">{dateToday}</p>
      </div>
      <div className="action">
        <button onClick={() => alert('clicked')}>
          Measure your love match 💘
        </button>
        {/* <p> </p> */}
      </div>
    </div>
  );
};

export default DateToday;
