import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import Login from './Login';

const Home = () => {
  return <h2>Welcome to the Home Page!</h2>;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" component={RegistrationForm} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
      </Routes>
    </Router>
  );
};

export default App;
