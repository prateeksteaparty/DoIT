import { RefreshCw, Calendar, Bell } from 'lucide-react';
export const AddTaskForm = ({ newTask, setNewTask, handleAddTask }) => {
    return (
      <form onSubmit={handleAddTask} className="mb-8">
        <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
          <input
            type="text"
            placeholder="Add A Task"
            className="flex-1 bg-transparent outline-none"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <div className="flex gap-4 text-gray-400">
            <Bell className="w-5 h-5" />
            <RefreshCw className="w-5 h-5" />
            <Calendar className="w-5 h-5" />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            ADD TASK
          </button>
        </div>
      </form>
    );
  };
  