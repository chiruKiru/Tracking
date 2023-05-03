import React from 'react'

const App = () => {
  return (
    <button onClick={()=>connectWallet()}
              className="flex items-center justify-center gap-x-1 py-2 px-4 text-white fot-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900
              rounded-full md:inline-flex"> Connect Wallet
              <Nav3/> </button>
  )
}

export default App