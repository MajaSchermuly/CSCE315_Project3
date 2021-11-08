import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Analytics from './components/pages/Analytics';
import Account from './components/pages/Account';

function App() {
  return (
    <>
      <Router> 
      <Navbar />
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Login' exact component={Login} />
          <Route path='/Register' exact component={Register} />
          <Route path='/Analytics' exact component={Analytics} />
          <Route path='/Account' exact component={Account} />
      </Switch>
      </Router>
    </>
  );
}

export default App;
