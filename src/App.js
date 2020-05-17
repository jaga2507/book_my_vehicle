import React from 'react';
import './App.css';
import Routing from './Router/Routing'
import { HashRouter } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routing />
      </div>
    </HashRouter>
  );
}

export default App;
