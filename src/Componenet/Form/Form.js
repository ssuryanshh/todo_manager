import React, { useState } from "react";
import "./Form.css";
import { Button, Input, Select } from "antd";
import Task from "../Task/Task";

function Form() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleCompleted(id) {
    setTasks(tasks.map(task => task.id === id ? { ...task, status: "Completed" } : task));
  }

  function generateRandomId() {
    return Math.floor(100000 + Math.random() * 900000);
  }

  function handleRemove(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function addTask() {
    const newTask = {
      task: task,
      priority: priority,
      status: "pending",
      id: generateRandomId(),
    };
    setTasks([...tasks, newTask]);
    setTask("");
    setPriority("");
  }

  return (
    <>
      <div className="form">
        <h3>Enter New Task</h3>
        <Input
          onChange={(e) => setTask(e.target.value)}
          value={task}
          placeholder="Enter the task"
          style={{
            border: "1px solid black",
            backgroundColor: "rgb(240, 240, 240)",
          }}
        />
        <Select
          onChange={(value) => setPriority(value)}
          value={priority || "select"}
          style={{
            width: 350,
            border: "1px solid black",
            backgroundColor: "rgb(240, 240, 240)",
          }}
          options={[
            {
              value: "select",
              label: "Select Priority",
              disabled: true,
            },
            {
              value: "high",
              label: "High",
            },
            {
              value: "medium",
              label: "Medium",
            },
            {
              value: "low",
              label: "Low",
            },
          ]}
        />
        <Button type="primary" onClick={addTask}>
          ADD TASK
        </Button>
      </div>
      <div className="pending-task">
        <h1>Pending Task</h1>
        <div className="task-container">
          {tasks.filter(task => task.status === "pending").map((task) => (
            <Task data={task} onCompleted={handleCompleted} onRemove={handleRemove} />
          ))}
        </div>
      </div>
      <div className="completed-task">
        <h1>Completed Task</h1>
        <div className="task-container">
          {tasks.filter(task => task.status === 'Completed').map((task) => (
            <Task data={task} onRemove={handleRemove}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default Form;
