import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
  palette: {
    primary: {
      light: '#F2E4DC',
      main: '#A6806A',
      dark: '#A6806A',
      contrastText: '#fff',
    },
    secondary: {
      light: '#D9C1B4',
      main: '#f44336',
      dark: '#0D0D0D',
      contrastText: '#000',
    },
  },
  spacing: 4,
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
