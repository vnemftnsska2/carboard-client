import "./app.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

//Route Page Components
import Task from "./pages/task/task";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import Dashboard from "./pages/dashboard/dashboard";
import Notice from "./pages/notice/notice";
import Inventory from "./pages/inventory/inventory";
import Pricing from "./pages/pricing/pricing";
import Store from "./pages/store/store";
import CarMaster from "./pages/car-master/car-master";
import Employee from "./pages/employee/employee";
import Customer from "./pages/customer/customer";
import Setting from "./pages/setting/setting";
import TestPage from "./pages/test_page/test_page";

const App = ({ taskRepository, authRepository, inventoryRepository }) => {
  const user = true;
  const [userKey, setUserKey] = useState("");

  return (
    <Routes>
      <Route
        path="/"
        element={<Login authRepository={authRepository} />}
        exact
      />
      <Route element={<Home />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="notice" element={<Notice />} />
        <Route path="task" element={<Task taskRepository={taskRepository} />} />
        <Route
          path="inventory"
          element={<Inventory inventoryRepository={inventoryRepository} />}
        />
        <Route path="store" element={<Store />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="carMaster" element={<CarMaster />} />
        <Route path="employee" element={<Employee />} />
        <Route path="customer" element={<Customer />} />
        <Route path="setting" element={<Setting />} />
        <Route path="test" element={<TestPage />} />
      </Route>
    </Routes>
  );
};

export default App;
