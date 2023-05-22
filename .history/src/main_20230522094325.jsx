import React from 'react'
import ReactDOM from 'react-dom/client'
import BaseRoutes from '../Routes.jsx'
import {NavBar} from '../components'
import { TransactionProvider } from '../context/TrackingContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <TransactionProvider>
    <NavBar/>
      <BaseRoutes/>
    </TransactionProvider>
)
