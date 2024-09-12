import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    {/* Router mit basename für GitHub Pages */}
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* Definiere deine Routen */}
        <Route path="/" element={<App />} />
        {/* Füge weitere Routen hier hinzu */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
