import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './components/loginScreen';
import LandingPage from './components/landingpage';
import Login from './components/login';

function App() {
  return (
    <Router>
      <Routes>
        {/* LandingPage component will be rendered for the '/' route */}
        <Route path="/" element={<LandingPage />} />
        {/* Login component will be rendered for the '/login' route */}
        <Route path="/login" element={<Login />} />
        {/* Signup component will be rendered for the '/signup' route */}
        <Route path="/signup" element={<LoginScreen />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
