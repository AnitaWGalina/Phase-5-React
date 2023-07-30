import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FarmingGroupAdminLandingPage from './Components/FarmingGroupAdminLandingPage';
import PublicClientLandingPage from './Components/PublicClientLandingPage';
import FarmingGroupAdminProducts from './Components/FarmingGroupAdminProducts';
import FarmingGroupAdminServices from './Components/FarmingGroupAdminServices';
import PublicClientProducts from './Components/PublicClientProducts';
import PublicClientServices from './Components/PublicClientServices';
import EnlistProduceForm from './Components/EnlistProduceForm'; // Import the EnlistProduceForm component
import LeaseLandForm from './Components/LeaseLandForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<FarmingGroupAdminLandingPage />} />
        <Route exact path="/public-client" element={<PublicClientLandingPage />} />
        <Route path="/products" element={<FarmingGroupAdminProducts />} />
        <Route path="/services" element={<FarmingGroupAdminServices />} />
        <Route path="/public-client-products" element={<PublicClientProducts />} />
        <Route path="/public-client-services" element={<PublicClientServices />} />
        <Route path="/enlist-produce" element={<EnlistProduceForm />} />
        <Route path="/lease-land" element={<LeaseLandForm />} />
      </Routes>
    </Router>
  );
}

export default App;
