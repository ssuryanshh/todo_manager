import React from "react";
import "./Task.css";
import { Button } from "antd";

function Task({ data, onCompleted, onRemove }) {
  const { task, priority, status, id } = data;

  function remove() {
    console.log("Task removed");
    onRemove(id);
  }

  function completed() {
    console.log("Task completed");
    onCompleted(id);
  }

  return (
    <div className="task-container">
      <div
        className="task"
        style={{
          backgroundColor: status === "Completed"
            ? "green"
            : priority === "high"
            ? "red"
            : priority === "medium"
            ? "yellow"
            : "white",
        }}
      >
        <h3>Task: {task}</h3>
        <h3>Priority: {priority}</h3>
        <h3>Status: {status}</h3>
        {status === "pending" && (
          <>
            <Button size="small" className="delete-button" id="delete" onClick={remove}>
              X
            </Button>
            <Button style={{ backgroundColor: "green", color: "white" }} onClick={completed}>
              Completed
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Task;
