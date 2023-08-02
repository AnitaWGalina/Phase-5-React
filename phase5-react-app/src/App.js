import React from "react";

import Login from "./Login";
import SignUpForm from "./SignUp";

import HomePage from './component/HomePage'; // Check the file name and path here
import NavBar from './component/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./Footer";

import './App.css';


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
              element= {<About/>}/>
              <Route path='/contact'
              element= {<Contact/>}/>
        </Routes>
        {/* <Routes>
          <Route exact path="/about" component={About} />
          <Route exact path="/home-page" component={HomePage} />
          <Route exact path="/contact" component={Contact} />
        </Routes>
        <SignUpForm />
        <Login />
        <NavBar />
        <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
