import { createTheme } from '@mui/material/styles';
import { Lexend_Deca } from 'next/font/google';

const lexend = Lexend_Deca({
  weight: ['100', '200', '300', '400', '500', '600', '700', '900'],
  subsets: ['latin'],
});

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4527a0',
    },
    secondary: {
      main: '#ffee58',
    },
    error: {
      main: '#ef5350',
    },
    warning: {
      main: '#ffa000',
    },
    info: {
      main: '#29b6f6',
    },
    success: {
      main: '#01a47a',
    },
    divider: '#000000',
  },
  typography: {
    fontFamily: lexend.style.fontFamily,
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
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#011B4F',
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        noOptions: {
          fontSize: 14,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          fontSize: 18,
          fontWeight: 400,
          color: '#A0A1A1',
          '&:hover': {
            color: '#ffffff',
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: 16,
          fontWeight: 500,
          color: '#424242',
          textTransform: 'none',
          ':hover': {
            color: '#363E7A',
            backgroundColor: '#F5F5F5',
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          fontWeight: 400,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
          '&.MuiButton-containedPrimary': {
            fontWeight: 400,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            height: '58px',
            fontSize: '16px',
            fontWeight: 300,
            '&:hover fieldset': {
              borderColor: '#ED8A2A',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#363E7A',
            },
          },
          '& .MuiInputLabel-root': {
            fontSize: '18px',
            fontWeight: 400,
          },
        },
      },
    },
  },
});
