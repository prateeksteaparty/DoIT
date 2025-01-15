import { useState } from "react";
import { Star } from "lucide-react";

export const TaskItem = ({ task, toggleTask, isCompleted = false }) => {
  const [isStarred, setIsStarred] = useState(false);

  const toggleStar = () => {
    setIsStarred(!isStarred);
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm dark:bg-[#2C2C2C] dark:text-white">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        className="w-5 h-5 rounded-sm border-gray-300"
      />
      <span className={`flex-1 ${isCompleted ? "line-through text-gray-400 " : ""}`}>
        {task.text}
      </span>
      <button
        onClick={toggleStar}
        className="p-1"
      >
        <Star
          className="w-6 h-6"
          stroke={isStarred ? "black" : "gray"} // Changes the star border (text) color
          fill={isStarred ? "yellow" : "none"}  // Fills the inside of the star
        />
      </button>
    </div>
  );
};
