import React from "react";
import Task from "./Task";

const TodoList = ({ tasks, activeTab, setTasks }) => {
  const filteredTasks = tasks.filter((task) => {
    if (activeTab === "All") return true;
    if (activeTab === "Active") return task.active;
    if (activeTab === "Completed") return !task.active;
    return true;
  });

  const handleToggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].active = !updatedTasks[index].active; // Toggle active status
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list">
      {filteredTasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          toggleTask={() => handleToggleTask(index)}
        />
      ))}
    </div>
  );
};

export default TodoList;
