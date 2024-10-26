import React, { useState, useEffect } from 'react';
import './App.css';
import { Loader } from './components/loader';
import Homepage from './screens/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Descpage from './screens/Descpage';
import Contactpage from './screens/Contactpage';
import Navbar from './components/navbar';
import Modelpage from './screens/Modelpage';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setIsLoading(false);
      setIsSpinning(true);
    }, 3000);

    const spinnerTimeout = setTimeout(() => {
      setIsSpinning(false);
    }, 5000);

    return () => {
      clearTimeout(loaderTimeout);
      clearTimeout(spinnerTimeout);
    };
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {isSpinning && (
        <div className="spinner">
          <div className="emoji">🍐</div>
        </div>
      )}
      {!isLoading && !isSpinning && (
        <Router>
          <Navbar />
          <div className="App">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/description" element={<Descpage />} />
              <Route path="/models" element={<Modelpage/>} />
              <Route path="/contact" element={<Contactpage />} />
            </Routes>
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
