import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Make sure this path is correct

// Mount the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* This line must exist to use the App component */}
  </React.StrictMode>
);