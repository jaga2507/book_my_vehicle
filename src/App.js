import React from 'react';
import './App.css';
import Routing from './Router/Routing'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routing />
      </div>
    </BrowserRouter>
  );
}

export default App;
