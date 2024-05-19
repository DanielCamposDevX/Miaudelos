'use client';

import { useAuth } from '@/app/contexts/auth';
import { ReactNode } from 'react';

export default function DefaultProviders({
  children,
}: {
  children: ReactNode;
}) {
  const { user } = useAuth();

  return (
    <main className="w-full h-screen relative overflow-hidden">{children}</main>
  );
}
