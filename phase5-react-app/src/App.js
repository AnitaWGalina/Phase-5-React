import React from 'react';
import HomePage from './component/HomePage'; // Check the file name and path here
import NavBar from './component/NavBar';
import ProfilePage from './component/ProfilePage';
import './App.css';
import './ProfilePage.css';


const App = () => {
  return (
    <div>
      <NavBar />
      <HomePage />
      <ProfilePage />
    </div>
  );
}

export default App;
