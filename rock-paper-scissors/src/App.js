import React from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard';
import Hands from './components/Hands';

function App() {
  return (
    <div className="App">
      <Scoreboard />
      <Hands />
    </div>
  );
}

export default App;
