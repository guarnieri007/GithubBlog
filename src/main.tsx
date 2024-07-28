import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { InitialPage } from './pages/InitialPage'
import { GlobalStyle } from './styles/global'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={defaultTheme}>
    <React.StrictMode>
      <GlobalStyle />
      <InitialPage/>
    </React.StrictMode>
  </ThemeProvider>
)
