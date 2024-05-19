import { usePathname, useRouter } from 'next/navigation';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useToast } from './toast';

interface SignInCredentials {
  email: string;
  password: string;
}

interface User {
  token: string;
  name: string;
}

interface AuthContextData {
  user: User | null;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData | null>(null);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const current = usePathname();
  const { toast } = useToast();

  useEffect(() => {
    if (current === '/login' || current === '/signup') return;
    const token = localStorage.getItem('token');
    if (!token) {
      toast({
        content: 'Você precisa estar logado para acessar essa página',
        severity: 'error',
      });
      router.push('/login');
      return;
    }
    const name = localStorage.getItem('name');
    setUser({ token, name: name ?? '' });
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
