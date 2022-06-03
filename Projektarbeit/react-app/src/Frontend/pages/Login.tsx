import "../css/App.css";
import LoginForm from "../organisms/LoginForm";
import React from "react";
import HomeHeader from "../organisms/HomeHeader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";

function login() {
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}
export default login;
