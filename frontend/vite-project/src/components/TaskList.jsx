import { TaskItem } from './TaskItem';

export const TaskList = ({ tasks, toggleTask }) => {
  const pendingTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="space-y-4">
      {pendingTasks.map(task => (
        <TaskItem key={task.id} task={task} toggleTask={toggleTask} />
      ))}
      {completedTasks.length > 0 && (
        <>
          <h2 className="text-lg font-medium mt-8 mb-4">Completed</h2>
          {completedTasks.map(task => (
            <TaskItem key={task.id} task={task} toggleTask={toggleTask} isCompleted />
          ))}
        </>
      )}
    </div>
  );
};
