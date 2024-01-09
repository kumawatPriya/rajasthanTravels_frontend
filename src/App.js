import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Screens/Home";
import { Signup } from "./LoginPage/SignUp";
import { Login } from "./LoginPage/Login";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
