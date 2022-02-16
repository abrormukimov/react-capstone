import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Company from './pages/Company';

const App = function myProject1() {
  return (
    <Router>
      <Routes>
        <Route path="company/:name" element={<Company />} />
        <Route exact path="/" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default App;
