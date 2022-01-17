import React from 'react'
import StyledEngineProvider from '@mui/material/StyledEngineProvider'
import Home from './pages/Home/Home'
import './components/ReservationsCard/ReservationsCard.scss'
import './components/ReservationsBox/ReservationsBox.scss'

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Home />
    </StyledEngineProvider>
  )
}

export default App
