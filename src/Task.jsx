import React from "react";

const Task = ({ task, toggleTask }) => {
  return (
    <div className="task">
      <input type="checkbox" checked={!task.active} onChange={toggleTask} />
      <span style={{ textDecoration: task.active ? "none" : "line-through" }}>
        {task.text}
      </span>
    </div>
  );
};

export default Task;
