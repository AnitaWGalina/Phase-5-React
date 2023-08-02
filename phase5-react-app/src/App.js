import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import the BrowserRouter and Routes components
import Login from "./Login";
import SignUpForm from "./SignUp";
import HomePage from "./component/HomePage"; // Check the file name and path here
import NavBar from "./component/NavBar";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
