import React from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard';
import Hands from './components/Hands';
import Rules from './components/Rules';

function App() {
  return (
    <div className="App">
      <Scoreboard />
      <Hands />
      <Rules />
    </div>
  );
}

export default App;
