import React from 'react';
import Header from "./Header";
import {createGlobalStyle} from "styled-components";
import Home from "./Home";
import Video from "./Video";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import configureStore from "./services";
import ThemesProvider from "./ThemesProvider";
import TranslationProvider from "./TranslationProvider";

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
  a {
    text-decoration: none;
    color: #000;
  }
`;
//this component help us to relate i18n and redux

function App() {
  const {store, persistor} = configureStore();

  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemesProvider>
            <TranslationProvider>
              <GlobalStyle />
              <Router>
                <Header />
                <Switch>
                  <Route path="/" exact>
                    <Home />
                  </Route>
                  <Route path="/video/:id">
                    <Video />
                  </Route>
                </Switch>
              </Router>
            </TranslationProvider>
          </ThemesProvider>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
