import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

:focus {
    outline: 0;
}

body {
    color: ${(p) => p.theme['gray-100']};
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif;
}

`
