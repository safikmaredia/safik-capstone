import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation';
import Authenticate from './routes/authenticate/authenticate';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/authenticate" element={<Authenticate />} />
        
      </Routes>
    </Router>
  );
};

export default App;
