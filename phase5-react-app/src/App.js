import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FarmingGroupAdminLandingPage from './Components/FarmingGroupAdminLandingPage';
import PublicClientLandingPage from './Components/PublicClientLandingPage';
import FarmingGroupAdminProducts from './Components/FarmingGroupAdminProducts';
import FarmingGroupAdminServices from './Components/FarmingGroupAdminServices';
import PublicClientProducts from './Components/PublicClientProducts';
import PublicClientServices from './Components/PublicClientServices';

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" component={FarmingGroupAdminLandingPage} />
      <Route exact path="/public-client" component={PublicClientLandingPage} />
      <Route path="/products" component={FarmingGroupAdminProducts} />
      <Route path="/services" component={FarmingGroupAdminServices} />
      <Route path="/public-client-products" component={PublicClientProducts} />
      <Route path="/public-client-services" component={PublicClientServices} />
      </Routes>
    </Router>
  );
}

export default App;
