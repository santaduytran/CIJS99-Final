import React from "react";
import Task from "./Task";

const TodoList = ({ tasks, activeTab, setTasks }) => {
  // Filter tasks based on the active tab
  const filteredTasks = tasks.filter((task) => {
    if (activeTab === "All") return true;
    if (activeTab === "Active") return task.active;
    if (activeTab === "Completed") return !task.active;
    return true;
  });

  // Function to handle task completion toggle
  const handleToggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].active = !updatedTasks[index].active; // Toggle active status
    setTasks(updatedTasks);
  };

  // Function to delete a single completed task
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); // Remove task at index
    setTasks(updatedTasks);
  };

  // Function to delete all completed tasks
  const handleDeleteAllCompleted = () => {
    const updatedTasks = tasks.filter((task) => task.active); // Keep only active tasks
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list">
      {filteredTasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          toggleTask={() => handleToggleTask(index)}
          deleteTask={() => handleDeleteTask(index)} // Pass the delete handler
          showDeleteButton={activeTab === "Completed"} // Show delete button only in Completed tab
        />
      ))}

      {/* Button to delete all completed tasks - only visible in Completed tab */}
      {activeTab === "Completed" && filteredTasks.length > 0 && (
        <button onClick={handleDeleteAllCompleted} className="delete-all-btn">
          Delete All Completed
        </button>
      )}
    </div>
  );
};

export default TodoList;
