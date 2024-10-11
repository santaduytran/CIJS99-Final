import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs">
      <button
        onClick={() => setActiveTab("All")}
        className={activeTab === "All" ? "active" : ""}
      >
        All
      </button>
      <button
        onClick={() => setActiveTab("Active")}
        className={activeTab === "Active" ? "active" : ""}
      >
        Active
      </button>
      <button
        onClick={() => setActiveTab("Completed")}
        className={activeTab === "Completed" ? "active" : ""}
      >
        Completed
      </button>
    </div>
  );
};

export default Tabs;
