import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Explore from './Pages/Explore';
import Home from './Pages/Home';
import Productpage from './Pages/Productpage';
import Productdetail from './Pages/Productdetail';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/home" element={<Home />} />
        <Route path="/productpage" element={<Productpage />} />
        <Route path="/productpage/:productId" element={<Productdetail />} />
      </Routes>
    </Router>
  );
}

export default App;
