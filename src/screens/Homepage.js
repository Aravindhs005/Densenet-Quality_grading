import React, { useState } from 'react';
import ApplePage from './Applepage';
import TomatoPage from './Tomatopage';
import PotatoPage from './Potatopage';
import OrangePage from './Orangepage';
import BananaPage from './Bananapage';
import CucumberPage from './CucumberPage';
import './styles/homepage.css';

export const Homepage = () => {
  const [selectedFruit, setSelectedFruit] = useState('Tomato');

  const renderFruitPage = () => {
    switch (selectedFruit) {
      case 'Tomato':
        return <TomatoPage />;
      case 'Apple':
        return <ApplePage />;
      case 'Potato':
        return <PotatoPage />;
      case 'Orange':
        return <OrangePage />;
      case 'Banana':
        return <BananaPage />;
      case 'Cucumber':
        return <CucumberPage />;
      default:
        return <TomatoPage />;
    }
  };

  return (
    <div className="homepage">
      <h1>Welcome to Fresh.Sight.AI 🍎</h1>
      <p>Select a fruit below to analyze its ripeness:</p>

      <div className="fruit-buttons">
        <button onClick={() => setSelectedFruit('Tomato')}>Tomato</button>
        <button onClick={() => setSelectedFruit('Apple')}>Apple</button>
        <button onClick={() => setSelectedFruit('Potato')}>Potato</button>
        <button onClick={() => setSelectedFruit('Orange')}>Orange</button>
        <button onClick={() => setSelectedFruit('Banana')}>Banana</button>
        <button onClick={() => setSelectedFruit('Cucumber')}>Cucumber</button>

      </div>

      <div className="fruit-page-container">
        {renderFruitPage()}
      </div>
    </div>
  );
};

export default Homepage;
