import React from 'react'
import ReactDOM from 'react-dom/client'
import BaseRoutes from '../Routes.jsx'
import one 
import {NavBar} from '../components'
import { TransactionProvider } from '../context/TrackingContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TransactionProvider>
    <NavBar/>
      <one/>
    </TransactionProvider>
  </React.StrictMode>,
)
