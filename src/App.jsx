import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Productcard from './components/productcard.jsx'; // Importing ProductCard

function App() {
  const cards = Array.from({ length: 10 }); // Creates an array of 10 items for rendering product cards
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // 4 columns for the grid layout
    gap: '16px', // Gap between cards
    padding: '16px', // Padding around the grid
  };

  return (
    <div style={gridStyle}>
      {/* Rendering ProductCard component for each item in the 'cards' array */}
      {cards.map((_, index) => (
        <Productcard key={index} /> // Each ProductCard is given a unique key
      ))}
    </div>
  );
}

export default App;
