import { Star } from "lucide-react";

export const TaskItem = ({ task, toggleTask, isCompleted = false }) => {
    return (
      <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="w-5 h-5 rounded-sm border-gray-300"
        />
        <span className={`flex-1 ${isCompleted ? 'line-through text-gray-500' : ''}`}>
          {task.text}
        </span>
        <button className="p-1 text-gray-400 hover:text-yellow-500">
          <Star className="w-5 h-5" />
        </button>
      </div>
    );
  };
  