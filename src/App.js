import React from 'react';
import './App.css';
import MagicVase from './components/MagicVase';
import SecretBox from './components/SecretBox';
import TreasureChest from './components/TreasureChest';

function App() {
  return (
    <div className="App">
      <h1>Scavenger Hunt</h1>
      <MagicVase />
      <SecretBox />
      <TreasureChest />
    </div>
  );
}

export default App;
