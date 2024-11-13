import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router';
import GlobalStyles from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

function App() {

  return (
    <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Router>
        <AppRouter />
      </Router>
      </ThemeProvider>
    </>
  )
}

export default App