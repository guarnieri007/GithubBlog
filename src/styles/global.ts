import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {
  --white: ${prop => prop.theme["white"]};
  --blue: ${prop => prop.theme["blue"]};
  --base-title: ${prop => prop.theme["base-title"]};
  --base-subtitle: ${prop => prop.theme["base-subtitle"]};
  --base-text: ${prop => prop.theme["base-text"]};
  --base-span: ${prop => prop.theme["base-span"]};
  --base-label: ${prop => prop.theme["base-label"]};
  --base-border: ${prop => prop.theme["base-border"]};
  --base-post: ${prop => prop.theme["base-post"]};
  --base-profile: ${prop => prop.theme["base-profile"]};
  --base-background: ${prop => prop.theme["base-background"]};
  --base-input: ${prop => prop.theme["base-input"]};
  }

* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-optical-sizing: auto;
    font-size: 12px;
}

:focus {
    outline: 0;
}

body {
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: "Nunito", sans-serif;
}

`;
