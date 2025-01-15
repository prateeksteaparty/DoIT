import { List, Calendar, Star, Menu, User, Plus } from 'lucide-react';
import { useState } from 'react';

export const Sidebar = () => {
  const [activeButton, setActiveButton] = useState('allTasks');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="w-64 bg-white p-4 dark:bg-[#232323] dark:text-white shadow-xl">
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img
            src="/pfp.jpg" 
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="ml-4 text-gray-700 dark:text-white">Hey, Pratik</p>
      </div>
      <nav className="space-y-2">
        <button
          onClick={() => handleButtonClick('allTasks')}
          className={`flex items-center w-full p-3 ${
            activeButton === 'allTasks'
              ? 'bg-green-50 dark:bg-[#357937] text-gray-700 dark:text-white'
              : 'text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-[#357937]'
          } rounded-lg`}
          aria-label="View all tasks"
        >
          <List className="w-5 h-5 mr-3" />
          All Tasks
        </button>
        <button
          onClick={() => handleButtonClick('today')}
          className={`flex items-center w-full p-3 ${
            activeButton === 'today'
              ? 'bg-green-50 dark:bg-[#357937] text-gray-700 dark:text-white'
              : 'text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-[#357937]'
          } rounded-lg`}
          aria-label="View today's tasks"
        >
          <Calendar className="w-5 h-5 mr-3" />
          Today
        </button>
        <button
          onClick={() => handleButtonClick('important')}
          className={`flex items-center w-full p-3 ${
            activeButton === 'important'
              ? 'bg-green-50 dark:bg-[#357937] text-gray-700 dark:text-white'
              : 'text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-[#357937]'
          } rounded-lg`}
          aria-label="View important tasks"
        >
          <Star className="w-5 h-5 mr-3" />
          Important
        </button>
        <button
          onClick={() => handleButtonClick('planned')}
          className={`flex items-center w-full p-3 ${
            activeButton === 'planned'
              ? 'bg-green-50 dark:bg-[#357937] text-gray-700 dark:text-white'
              : 'text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-[#357937]'
          } rounded-lg`}
          aria-label="View planned tasks"
        >
          <Menu className="w-5 h-5 mr-3" />
          Planned
        </button>
        <button
          onClick={() => handleButtonClick('assignedToMe')}
          className={`flex items-center w-full p-3 ${
            activeButton === 'assignedToMe'
              ? 'bg-green-50 dark:bg-[#357937] text-gray-700 dark:text-white'
              : 'text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-[#357937]'
          } rounded-lg`}
          aria-label="View tasks assigned to me"
        >
          <User className="w-5 h-5 mr-3" />
          Assigned to me
        </button>
      </nav>
    </div>
  );
};
