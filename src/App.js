import React from 'react';
import Header from "./Header";
import {ThemeProvider,createGlobalStyle} from "styled-components";

const theme = {
  maincolor: '#b0e2a7',
  extrcolor: '#d4f5c5',
  fontcolor: '#000',
  activecold: '#2b5eff',
  fontfamily: 'Source Sans Pro'
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

  *, *:before, *:after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 10px;
    font-family: ${props => props.theme.fontfamily} 'sans-serif';
  }
`;

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}

export default App;
