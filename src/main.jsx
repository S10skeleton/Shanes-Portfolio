import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Styles/Styles.css'
import loadGoogleFont from './utils/loadFonts.js';

loadGoogleFont();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
