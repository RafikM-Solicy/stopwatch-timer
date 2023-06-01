import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Stopwatch from '../Stopwatch/Stopwatch';
import Timer from '../Timer/Timer';
import Header from '../Header/Header';

function App() {
  return (
    <Router>
      <div>
        <Header />
          <Routes>
            <Route path="/stopwatch" element={<Stopwatch />} />
            <Route path="/timer" element={<Timer />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
