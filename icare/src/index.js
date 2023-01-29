import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import DocNavbar from './components/doctorNavbar';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Auth context must be at the highest level of Context Provider */}
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
