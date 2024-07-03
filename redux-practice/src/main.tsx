import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// npm install @reduxjs/toolkit
// the part after @ is called the scope. reduxjs is the scope
// reduxjs is maintained by Redux organization.
//  
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
