import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from 'styled-components';
import ResetCSS from './styles/ResetCSS';

const theme = {
  primary: "#F5F5F5",
  secondary: "#0A0A0A",
  tertiary: "#1F51FF",
  textPrimary: "#2F2522"
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
