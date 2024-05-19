'use client';
import { Alert, Snackbar, SnackbarOrigin } from '@mui/material';
import { ReactNode, createContext, useContext, useState } from 'react';

interface ToastContextData {
  toast: (options: {
    content: string;
    severity: 'success' | 'error' | 'warning' | 'info';
  }) => void;
}

interface ToastProviderProps {
  children: ReactNode;
}

const ToastContext = createContext<ToastContextData | null>(null);

interface State extends SnackbarOrigin {
  open: boolean;
  severity: 'success' | 'error' | 'warning' | 'info';
  content: string;
}

const ToastProvider = ({ children }: ToastProviderProps) => {
  const [snack, setSnack] = useState<State>({
    open: false,
    vertical: 'bottom',
    horizontal: 'right',
    content: '',
    severity: 'success',
  });
  const { vertical, horizontal, open, content, severity } = snack;

  const toast = ({
    content,
    severity,
  }: {
    content: string;
    severity: 'success' | 'error' | 'warning' | 'info';
  }) => {
    console.log('OI');
    const prev = { ...snack };
    setSnack({ ...prev, open: true, content, severity });
  };

  const handleClose = () => {
    setSnack({ ...snack, open: false });
  };

  const Layout = () => {
    return (
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        autoHideDuration={5000}
        key={vertical + horizontal}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="standard"
          sx={{ width: '100%' }}
        >
          {content}
        </Alert>
      </Snackbar>
    );
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <Layout />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
