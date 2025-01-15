import React, { useState } from 'react';
import { Calendar, Bell, Plus, Star, RotateCcw, X, Trash2, Pencil } from 'lucide-react';

export function RightSideBar() {
  const [note, setNote] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                 'July', 'August', 'September', 'October', 'November', 'December'];
  
  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const generateCalendarDays = () => {
    const days = [];
    for(let i = 1; i <= 31; i++) {
      days.push(i);
    }
    return days;
  };

  return (
    <div className="flex flex-col h-screen border-gray-200 bg-gray-50 w-80 dark:bg-[#2C2C2C] dark:text-white relative">
      <div className="flex-1 p-4 pb-0 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <span className="text-lg">Buy groceries</span>
          </div>
          <Star className="w-5 h-5 text-gray-400" />
        </div>

        <button className="flex items-center gap-2 w-full text-gray-600 hover:bg-gray-100 p-2 rounded-lg dark:text-white dark:hover:bg-[#357937]">
          <Plus className="w-5 h-5" />
          <span>Add Step</span>
        </button>

        <button className="flex items-center gap-2 w-full text-gray-600 hover:bg-gray-100 p-2 rounded-lg dark:text-white dark:hover:bg-[#357937]">
          <Bell className="w-5 h-5" />
          <span>Set Reminder</span>
        </button>

        <button 
          className="flex items-center gap-2 w-full text-gray-600 hover:bg-gray-100 p-2 rounded-lg dark:text-white dark:hover:bg-[#357937]"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          <Calendar className="w-5 h-5" />
          <span>{selectedDate || 'Add Due Date'}</span>
        </button>

        <button className="flex items-center gap-2 w-full text-gray-600 hover:bg-gray-100 p-2 rounded-lg dark:text-white dark:hover:bg-[#357937]">
          <RotateCcw className="w-5 h-5" />
          <span>Repeat</span>
        </button>

        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-500 dark:text-white">Add Notes</span>
            <button 
              onClick={() => setIsEditing(!isEditing)}
              className="p-1 hover:bg-gray-100 rounded dark:hover:bg-[#357937]"
            >
              <Pencil className="w-4 h-4 text-gray-500 dark:text-white" />
            </button>
          </div>
          {isEditing ? (
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full p-2 border rounded-lg dark:bg-[#242424] dark:border-gray-600"
              placeholder="Type your note here..."
              rows="3"
            />
          ) : note ? (
            <p className="text-sm text-gray-600 dark:text-gray-300">{note}</p>
          ) : null}
        </div>
      </div>

      {showCalendar && (
        <div className="absolute left-0 right-0 p-4 bg-white dark:bg-[#242424] border dark:border-gray-600 rounded-lg shadow-lg m-4">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Select date</h3>
            <div className="flex items-center justify-between">
              <select 
                className="bg-transparent dark:text-white"
                defaultValue="August 2023"
              >
                {months.map(month => (
                  <option key={month}>{month} 2023</option>
                ))}
              </select>
              <div className="flex gap-2">
                <button className="p-1 hover:bg-gray-100 dark:hover:bg-[#357937] rounded">←</button>
                <button className="p-1 hover:bg-gray-100 dark:hover:bg-[#357937] rounded">→</button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                <div key={day} className="text-sm font-medium">{day}</div>
              ))}
              {generateCalendarDays().map(day => (
                <button
                  key={day}
                  onClick={() => handleDateSelect(`Aug ${day}, 2023`)}
                  className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#357937] 
                    ${day === 17 ? 'bg-black dark:bg-[#357937] text-white' : ''}`}
                >
                  {day}
                </button>
              ))}
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button 
                onClick={() => setShowCalendar(false)}
                className="px-3 py-1 hover:bg-gray-100 dark:hover:bg-[#357937] rounded"
              >
                Cancel
              </button>
              <button 
                className="px-3 py-1 hover:bg-gray-100 dark:hover:bg-[#357937] rounded"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between p-3 pb-20 border-gray-200 mt-4">
        <button className="p-2 hover:bg-gray-100 rounded-lg dark:hover:bg-[#357937]">
          <X className="w-5 h-5 text-gray-600 dark:text-white" />
        </button>
        <span className="text-gray-500 dark:text-white">Created Today</span>
        <button className="p-2 hover:bg-gray-100 rounded-lg dark:hover:bg-[#357937]">
          <Trash2 className="w-5 h-5 text-gray-600 dark:text-white" />
        </button>
      </div>
    </div>
  );
}