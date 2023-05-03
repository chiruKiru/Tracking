import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {NavBar from '../components'
import { TransactionProvider } from '../context/TrackingContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TransactionProvider>
      <App/>
      <NavBar/>
    </TransactionProvider>
  </React.StrictMode>,
)
