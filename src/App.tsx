import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default.ts'
import { GlobalStyle } from './styles/global.ts'
import { Router } from './Router.tsx'
import { BrowserRouter } from 'react-router-dom'

export function App() {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <GlobalStyle />
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </>

  )
}