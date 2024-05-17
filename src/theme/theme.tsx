import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#363E7A',
    },
    secondary: {
      main: '#E98727',
    },
    error: {
      main: '#DA3131',
    },
    warning: {
      main: '#F4E02F',
    },
    info: {
      main: '#0023DD',
    },
    success: {
      main: '#2DAB8C',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontSize: 32,
      fontWeight: 600,
    },
    h2: {
      fontSize: 24,
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
      fontSize: 21,
    },
    h4: {
      fontSize: 18,
      fontWeight: 600,
    },
    body1: {
      fontSize: 20,
    },
    body2: {
      fontSize: 17,
    },
    button: {
      fontSize: 14,
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 8,
  },
});
