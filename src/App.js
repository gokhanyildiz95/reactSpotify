import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="outerWrap">
      <div className="App">
        <Navbar />
      </div>
      <div className="musicControls">
        music control
      </div>
    </div>
  );
}

export default App;
