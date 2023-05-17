import React from 'react'
import { Button } from 'react-bootstrap'

const MainHome = () => {
  return (
    <>
    <a href='/Home'>
    <Button className="flex items-center justify-center gap-x-1 py-2 px-4 text-white fot-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900
              rounded-full md:inline-flex">
        Citizen
    </Button>
    </a>
    <a href='/state'>
    <Button className="flex items-center justify-center gap-x-1 py-2 px-4 text-white fot-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900
              rounded-full md:inline-flex" >
        State
    </Button >
    </a>
    <a href=>
    <Button className="flex items-center justify-center gap-x-1 py-2 px-4 text-white fot-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900
              rounded-full md:inline-flex" >
        Central
    </Button>
    </a>
    </>
    
  )
}

export default MainHome