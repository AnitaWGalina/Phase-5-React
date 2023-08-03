import React from "react";
import Login from "./Login";
import { ChakraProvider } from '@chakra-ui/react';
import SignUpForm from "./SignUp";
import HomePage from './component/HomePage'; 
import NavBar from './component/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
// import Footer from "./Footer";
import './App.css';
import Profile from "./component/Profile";
import UserProfile from "./UserProfile";

import FarmingGroupAdminLandingPage from './Components/FarmingGroupAdminLandingPage';
import PublicClientLandingPage from './Components/PublicClientLandingPage';
import FarmingGroupAdminProducts from './Components/FarmingGroupAdminProducts';
import FarmingGroupAdminServices from './Components/FarmingGroupAdminServices';
import PublicClientProducts from './Components/PublicClientProducts';
import PublicClientServices from './Components/PublicClientServices';
import EnlistProduceForm from './Components/EnlistProduceForm';
import LeaseLandForm from './Components/LeaseLandForm';
import TrainingForm from './Components/TrainingForm';
import LandList from './Components/LandList';


const App = () => {
  return (
    <div className="App">
    <ChakraProvider>
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
            element= {<Profile/>}
          />

          <Route path='/update_account'
            element= {<UserProfile/>}
          />
              
          <Route exact path="/landing_page" 
            element={<FarmingGroupAdminLandingPage />} 
          />

          <Route path="/products" 
            element={<FarmingGroupAdminProducts />} 
          />

          <Route path="/services" 
            element={<FarmingGroupAdminServices />} 
          />

          <Route path="/enlist_produce" 
            element={<EnlistProduceForm />} 
          />
          
          <Route path="/lease_land" 
            element={<LeaseLandForm />} 
          />

          <Route path="/training" 
            element={<TrainingForm />} 
          />

          <Route path="/land_list" 
            element={<LandList />} 
          />

          <Route exact path="/public_client" 
            element={<PublicClientLandingPage />} 
          />

          <Route path="/public-client-products" 
            element={<PublicClientProducts />} 
          />

          <Route path="/public-client-services" 
            element={<PublicClientServices />} 
          />
        </Routes>
      </Router>
    </ChakraProvider>
    </div>
  );
}

export default App;
