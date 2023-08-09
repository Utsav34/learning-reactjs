import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Signup from "./pages/signup";
import UseStateEmp from "./pages/useStateEmp";
import Api from "./pages/Api";
import Asynwaitapi from "./pages/asynWaitapi";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="/useStateEmp" element={<UseStateEmp />} />
          <Route path="/api" element={<Api />} />
          <Route path="/asynwaitapi" element={<Asynwaitapi />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
