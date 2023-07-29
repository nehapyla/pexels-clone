import './App.css';
import Client from './components/temp';
import { useState } from 'react';

function App() {
  const [state, setState] = useState("dogs")

  return (
    <div className="App">
      <Client query={state} />
    </div>
  );
}

export default App;