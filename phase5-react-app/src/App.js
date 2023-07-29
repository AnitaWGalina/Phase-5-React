import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FarmingGroupAdminLandingPage from './Components/FarmingGroupAdminLandingPage';
import PublicClientLandingPage from './Components/PublicClientLandingPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FarmingGroupAdminLandingPage} />
        <Route exact path="/public-client" component={PublicClientLandingPage} />
      </Switch>
    </Router>
  );
};

export default App;
