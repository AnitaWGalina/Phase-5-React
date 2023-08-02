import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import the BrowserRouter component
import Login from "./Login";
import SignUpForm from "./SignUp";
import React from 'react';
import HomePage from './component/HomePage'; // Check the file name and path here
import NavBar from './component/NavBar';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Router>
        <SignUpForm />
        <Login />
        <NavBar />
        <HomePage />
      </Router>
    </div>
  );
}

export default App;
