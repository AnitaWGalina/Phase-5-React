import React from 'react';
import HomePage from './component/HomePage'; // Check the file name and path here
import NavBar from './component/NavBar';
import './App.css';


const App = () => {
  return (
    <div>
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
