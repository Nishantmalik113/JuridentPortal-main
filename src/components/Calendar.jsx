import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  
  // Example events (you can replace this with your actual events)
  const events = {
    '2024-03-10': ['Court Hearing', 'Client Meeting'],
    '2024-03-15': ['Document Submission'],
    '2024-03-20': ['Case Review'],
    '2024-03-25': ['Court Appearance']
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const dateStr = date.toISOString().split('T')[0];
      const dayEvents = events[dateStr];
      
      if (dayEvents) {
        return (
          <div className="flex flex-col items-center">
            <div className="flex gap-1 mt-1">
              {dayEvents.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-[#D4AF37]"
                />
              ))}
            </div>
          </div>
        );
      }
    }
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const dateStr = date.toISOString().split('T')[0];
      return events[dateStr] ? 'has-events' : null;
    }
  };

  return (
    <div className="mb-10 z-10 h-96 mx-auto p-1">
      <div className=" rounded-xl p-6 shadow-lg">
        <Calendar
          onChange={setDate}
          value={date}
          tileContent={tileContent}
          tileClassName={tileClassName}
          className="rounded-lg border-none bg-transparent text-white"
        />

        
      </div>
    </div>
  );
};

export default CalendarComponent; 