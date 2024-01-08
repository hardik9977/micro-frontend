import logo from './logo.svg';
import './App.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div className="App">
      <h1> app1</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
