import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";

// Respository
import TaskRepository from "./service/task_repository";
import { BrowserRouter } from "react-router-dom";

const taskRepository = new TaskRepository();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App taskRepository={taskRepository} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
