import React, { useState } from "react";

const AddTask = ({ setTasks, tasks }) => {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, active: true }]);
      setNewTask(""); // Clear the input field after adding the task
    }
  };

  return (
    <div className="add-task">
      <input
        type="text"
        placeholder="Add a task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default AddTask;
