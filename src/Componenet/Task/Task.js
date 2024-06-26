import React from "react";
import "./Task.css";
import { Button } from "antd";

function Task({ data, onCompleted, onRemove,onPending }) {
  const { task, priority, status, id } = data;

  function remove() {
    onRemove(id);
  }

  function completed() {
    console.log("Task completed");
    onCompleted(id);
  }
  function pending() {
    console.log("Task Pending");
    onPending(id);
  }
  

  return (
    <div className="task-container">
      <div
        className="task"
        style={{
          backgroundColor:
            status === "Completed"
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
        <Button
          size="small"
          className="delete-button"
          id="delete"
          onClick={remove}
          style={
            {
            backgroundColor : "red"
            }
          }
        >
          X
        </Button>
        {status === "pending" && (
          <Button
            style={{ backgroundColor: "green", color: "white" }}
            onClick={completed}
          >
            Completed
          </Button>
        )}
          {status !== "pending" && (
          <Button
            style={{ backgroundColor: "Blue", color: "white" }}
            onClick={pending}
          >
            Pending
          </Button>
        )}
      </div>
    </div>
  );
}

export default Task;
