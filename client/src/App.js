import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import ContactState from './context/Contact/ContactState';
import AuthState from './context/Auth/AuthState';
import './App.css';

const App = () => {
  return (
    <AuthState>
    <ContactState>
    <Router>
    <Fragment>
      <Navbar/>
    <div className="container">
<Routes>
<Route exact path="/" element={<Home />} />
<Route exact path="/about" element={<About />} />
<Route exact path="/register" element={<Register />} />
<Route exact path="/login" element={<Login />} />
</Routes>
    </div>
    </Fragment>
    </Router>
    </ContactState>
    </AuthState>
  );
}

export default App;
