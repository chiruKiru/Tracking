import React from 'react'
import ReactDOM from 'react-dom/client'
import BaseRoutes from '../Routes.jsx'
import App from './App.jsx'
import {NavBar} from '../components'
import { TransactionProvider } from '../context/TrackingContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <TransactionProvider>
    <NavBar/>
      <BaseRoutes/>
    </TransactionProvider>
)
