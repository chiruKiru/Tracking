import React, { useContext } from 'react'
import { Track } from '../context/TrackingContext'
const App = () => {
  const {connectWallet} = useContext(TransactionContext)
  return (
    <button 
              className="flex items-center justify-center gap-x-1 py-2 px-4 text-white fot-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900
              rounded-full md:inline-flex"> Connect Wallet
    </button>
  )
}

export default App