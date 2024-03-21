import React from 'react';
import LoginScreen from "./components/loginScreen";
import Heading from './components/header';
import "./App.css"
import Login from "./components/login"
import Code from './components/code';
import Done from './components/done';
import LandingPage from './components/landingpage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/landingpage';
import Login from './components/login';

function App() {
  return (
    
    <Router>
      <div className="App">
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" component={Login} />
      </div>
    </Router>

    </div>
  );
}

export default App;
