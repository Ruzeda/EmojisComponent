import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvide } from './context/AppContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvide>
      <App />
    </AppProvide>
  </React.StrictMode>,
  document.getElementById('root')
);
