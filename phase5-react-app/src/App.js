import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FarmingGroupAdminLandingPage from './FarmingGroupAdminLandingPage';
import PublicClientLandingPage from './PublicClientLandingPage';

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
