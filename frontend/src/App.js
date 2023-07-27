import React from "react";
import "./App.css";
import Login from "./login/Login";
import Signup from "./signup/SignUp";
import NotFoundPage from "./notFoundPage/NotFoundPage";
import Dashboard from "./dashboard/Dashboard";
import Item from "./item/Item";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="item" element={<Item />} />
      </Routes>
    </div>
  );
}

export default App;
