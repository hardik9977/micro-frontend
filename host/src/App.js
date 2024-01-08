import './App.css';

import Test from 'app/Test';

import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div className="App">
      <h1> Host</h1>
      <Test />
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
