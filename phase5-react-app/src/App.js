import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import the BrowserRouter component
import Login from "./Login";
import SignUpForm from "./SignUp";

function App() {
  return (
    <Router>
      <div className="App">
        <SignUpForm />
        <Login />
      </div>
    </Router>
  );
}

export default App;
