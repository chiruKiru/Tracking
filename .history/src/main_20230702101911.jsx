import React from 'react'
import ReactDOM from 'react-dom/client'
import BaseRoutes from '../Routes.jsx'
import {NavBar} from '../components'
import { TransactionProvider } from '../context/TrackingContext.jsx'
import './index.css'
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import chakraTheme from '@chakra-ui/theme'

const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <TransactionProvider>
      <ChakraBaseProvider>
    <NavBar/>
      <BaseRoutes/>
      </ChakraBaseProvider>
    </TransactionProvider>
)
