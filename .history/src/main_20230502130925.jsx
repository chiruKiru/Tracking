import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Tra } from '../context/TrackingContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TransactionProvider>
      <App/>
    </TransactionProvider>
  </React.StrictMode>,
)
