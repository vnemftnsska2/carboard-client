import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";

// Respository
import TaskRepository from "./service/task_repository";
import AuthRepository from "./service/auth_repository";
import PriceRepository from "./service/price_repository";
import { BrowserRouter } from "react-router-dom";

const API_SERVER = process.env.REACT_APP_API_SERVER;
const authRepository = new AuthRepository(API_SERVER);
const taskRepository = new TaskRepository(API_SERVER);
const inventoryRepository = new AuthRepository(API_SERVER);
const priceRepository = new PriceRepository(API_SERVER);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App
        taskRepository={taskRepository}
        authRepository={authRepository}
        inventoryRepository={inventoryRepository}
        priceRepository={priceRepository}
      />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
