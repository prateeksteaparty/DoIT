export const TaskSummary = ({ pendingTasks, completedTasks }) => {
    const total = pendingTasks + completedTasks;
    const completionPercentage = total ? (completedTasks / total) * 100 : 0;
    

    const size = 160;
    const strokeWidth = 30;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (completionPercentage / 100) * circumference;
  
    return (
      <div className="bg-white rounded-lg p-4 shadow-xl dark:bg-[#232323] dark:text-white">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">Today Tasks</span>
          <span className="text-gray-400 w-5 h-5 flex items-center justify-center rounded-full border border-gray-200">i</span>
        </div>
        <p className="text-3xl font-bold mb-4">{pendingTasks}</p>
        
        <div className="relative">
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="transform -rotate-90"
          >
 
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              className="fill-none stroke-[#045428] stroke-[30]"
            />
            
       
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              className="fill-none stroke-[#34D399] stroke-[30]"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>
        </div>
        
        <div className="flex items-center justify-between mt-2 text-xs">
          <div className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
            <span className="text-gray-600">Pending</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-[#045428] mr-2"></span>
            <span className="text-gray-600">Done</span>
          </div>
        </div>
      </div>
    );
  };
  