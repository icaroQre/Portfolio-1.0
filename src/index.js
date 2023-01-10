import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from 'styled-components';
import ResetCSS from './styles/ResetCSS';

const theme = {
  primary: "#000000",
  secondary: "#FFFFFF",
  tertiary: "#1F51FF",
  secondaryLight: "#1F1F1F",
  textPrimary: "#999999"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ResetCSS />
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
