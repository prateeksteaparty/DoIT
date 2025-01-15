import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { TaskSummary } from '../components/TaskSummary';
import { AddTaskForm } from '../components/AddTaskForm';
import { TaskList } from '../components/TaskList';
import { Navbar } from '../components/Navbar';
import { AddList } from '../components/AddList';
import { RightSideBar } from '../components/RightSideBar';

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
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isRightSidebarVisible, setIsRightSidebarVisible] = useState(false);

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

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const toggleRightSidebar = () => {
    setIsRightSidebarVisible(!isRightSidebarVisible);
  };

  const pendingTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#242424]">
      <Navbar 
        toggleSidebar={toggleSidebar} 
        toggleRightSidebar={toggleRightSidebar}
      />
      <div className="flex">
        {isSidebarVisible && (
          <div className="flex flex-col p-8 shadow-lg bg-green-50 dark:bg-[#2C2C2C] space-y-6">
            <Sidebar />
            <AddList />
            <TaskSummary
              pendingTasks={pendingTasks.length}
              completedTasks={completedTasks.length}
            />
          </div>
        )}
        <div className="flex-1 p-8">
          <div className="max-w-3xl mx-auto">
            <AddTaskForm 
              newTask={newTask} 
              setNewTask={setNewTask} 
              handleAddTask={handleAddTask} 
            />
            <TaskList 
              tasks={tasks} 
              toggleTask={toggleTask}
            />
          </div>
        </div>
        {isRightSidebarVisible && (
          <RightSideBar 
            onClose={() => setIsRightSidebarVisible(false)}
          />
        )}
      </div>
    </div>
  );
};