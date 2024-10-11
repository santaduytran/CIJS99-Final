import React from "react";

const Task = ({ task, toggleTask, deleteTask, showDeleteButton }) => {
  return (
    <div className="task">
      <input type="checkbox" checked={!task.active} onChange={toggleTask} />
      <span style={{ textDecoration: task.active ? "none" : "line-through" }}>
        {task.text}
      </span>

      {/* Show delete button only if it's in the Completed tab */}
      {showDeleteButton && (
        <button onClick={deleteTask} className="delete-btn">
          Delete
        </button>
      )}
    </div>
  );
};

export default Task;
