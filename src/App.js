import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Login from "./pages/Login/Login";
import Signup from "./pages/sign-up/sign-up";
import Reset from "./pages/reset/reset"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/reset" element={<Reset />}/>
      </Routes>
    </Router>
  );
}

export default App;
