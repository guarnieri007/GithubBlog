import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default.ts'
import { GlobalStyle } from './styles/global.ts'

 export function App() {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle/>

      </ThemeProvider>
    </>

  )
}