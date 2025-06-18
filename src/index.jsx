import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 1. Find the div with id="root" in index.html
// 2. Tell React to render the <App> component inside it
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);