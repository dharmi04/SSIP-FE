import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Explore from './Pages/Explore';
import Home from './Pages/Home';
import Productpage from './Pages/Productpage';
import Productdetail from './Pages/Productdetail';
import Dashboard from './Pages/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/home" element={<Home />} />
        <Route path="/productpage" element={<Productpage />} />
        <Route path="/productpage/:productId" element={<Productdetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
