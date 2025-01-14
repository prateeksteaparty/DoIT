import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { TaskSummary } from '../components/TaskSummary';
import { AddTaskForm } from '../components/AddTaskForm';
import { TaskList } from '../components/TaskList';
import { Navbar } from '../components/Navbar';
export const TodoApp = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Buy groceries', completed: false },
    { id: 2, text: 'Finish project report', completed: false },
    { id: 3, text: 'Call the bank', completed: false },
    { id: 4, text: 'Schedule dentist appointment', completed: false },
    { id: 5, text: 'Plan weekend trip', completed: false },
    { id: 6, text: 'Read a book', completed: true },
    { id: 7, text: 'Clean the house', completed: true },
    { id: 8, text: 'Prepare presentation', completed: true },
  ]);

  const [newTask, setNewTask] = useState('');
  
  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const pendingTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);
  const completionPercentage = (completedTasks.length / tasks.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="flex flex-col p-6 shadow-lg">
        <div className='pb-4 shadow-xl'>
        <Sidebar />
        </div>
        <div className='shadow-xl'>
        <TaskSummary 
          pendingTasks={pendingTasks.length} 
          completedTasks={completedTasks.length} 
        />
        </div>
      </div>
      <div className="flex-1 p-8">
        <div className="max-w-3xl mx-auto">
          <AddTaskForm newTask={newTask} setNewTask={setNewTask} handleAddTask={handleAddTask} />
          <TaskList tasks={tasks} toggleTask={toggleTask} />
        </div>
      </div>
    </div>
  );
};