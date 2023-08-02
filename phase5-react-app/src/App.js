import React from "react";
import Login from "./Login";
import SignUpForm from "./SignUp";
import HomePage from './component/HomePage'; 
import NavBar from './component/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
// import Footer from "./Footer";
import './App.css';
import UserProfile from "./UserProfile";


const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar/>
      <Routes>
          <Route path="/"
            element={<HomePage />}
          />

          <Route path="/signup"
            element={<SignUpForm />}
          />

          <Route path="/login"
            element={ <Login />}
          />

          <Route path='/about'
          element= {<About/>}
          />
          
          <Route path='/contact'
          element= {<Contact/>}
          />
          
          <Route path='/profile'
          element= {<UserProfile/>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
