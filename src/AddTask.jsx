import React, { useState } from "react";

const AddTask = ({ setTasks, tasks, activeTab }) => {
  const [newTask, setNewTask] = useState("");

  // Function to handle adding a new task
  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, active: true }]); // New tasks are always active by default
      setNewTask(""); // Clear input field
    }
  };

  // Disable adding task in Completed tab
  const isAddTaskDisabled = activeTab === "Completed";

  return (
    <div className="add-task">
      <input
        type="text"
        placeholder="Add a task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        disabled={isAddTaskDisabled} // Disable input if in Completed tab
      />
      <button onClick={handleAddTask} disabled={isAddTaskDisabled}>
        Add
      </button>

      {/* Display a message if the user is in the Completed tab */}
      {isAddTaskDisabled && (
        <p style={{ color: "red" }}>Cannot add tasks in Completed tab</p>
      )}
    </div>
  );
};

export default AddTask;
