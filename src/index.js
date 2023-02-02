import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ResetCSS from './styles/ResetCSS';
import { AuthProvider } from './providers/auth';
import FontStyle from './styles/FontStyle';
import { ThemeStateProvider } from './providers/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ResetCSS />
      <FontStyle />
      <AuthProvider>
        <ThemeStateProvider>
          <App />
        </ThemeStateProvider>
      </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
