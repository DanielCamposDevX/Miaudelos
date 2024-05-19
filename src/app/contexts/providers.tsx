'use client';
import { AuthProvider } from './auth';
import { ToastProvider } from './toast';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <AuthProvider>{children}</AuthProvider>
    </ToastProvider>
  );
}
