import { createTheme, ThemeProvider } from '@mui/material/styles';

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
});

export default theme;
