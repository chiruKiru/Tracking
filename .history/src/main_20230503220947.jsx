import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {NavBar} from '../components'
import { TransactionProvider } from '../context/TrackingContext.jsx'
import './index.css'
import AllTransac from '../NavBar_Data/AllTransac.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TransactionProvider>
    <NavBar/>
    <AllTransac/>
      <App/>
    </TransactionProvider>
  </React.StrictMode>,
)