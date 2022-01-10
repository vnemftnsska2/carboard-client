import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";

// Respository
import TaskRepository from "./service/task_repository";

const taskRepository = new TaskRepository();
ReactDOM.render(
  <React.StrictMode>
    <App taskRepository={taskRepository} />
  </React.StrictMode>,
  document.getElementById("root")
);
