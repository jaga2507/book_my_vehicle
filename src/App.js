import React from 'react';
import './App.css';
import Routing from './Router/Routing'
import { HashRouter } from 'react-router-dom'
import AOS from 'aos'

AOS.init();
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
