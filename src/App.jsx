import React, { useState } from "react";
import Tabs from "./Tabs";
import TodoList from "./TodoList";
import AddTask from "./AddTask";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [activeTab, setActiveTab] = useState("All"); // All, Active, Completed

  return (
    <div className="App">
      <h1>Todo App</h1>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <AddTask setTasks={setTasks} tasks={tasks} />
      <TodoList tasks={tasks} activeTab={activeTab} setTasks={setTasks} />
    </div>
  );
};

export default App;
