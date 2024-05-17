'use client';
import { type AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export function useGet(serviceFunction: any, params?: any) {

  const navigation = useRouter();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>({});
  const [message, setMessage] = useState('');
  const fetchData: (servFunction: any, param?: any) => Promise<any> = async (
    servFunction,
    param,
  ) => {
    setLoading(true);
    try {
      const response = await servFunction(param);
      setData(response);
      return response;
    } catch (error) {
      const errorT = error as AxiosError;
      if (errorT.response?.status === 401) {
        localStorage.removeItem('@eleng:token');
        localStorage.removeItem('@eleng:colaborador');
        navigation.push('/login');
      }
      setMessage(
        String((errorT.response?.data as { message?: string })?.message) ??
          'Erro inesperado, tente novamente mais tarde',
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchData(serviceFunction, params);
  }, []);

  return { message, loading, data, fetchData };
}

export function usePost(
  serviceFunction: any,
  path: string,
  shouldwarn?: boolean,
  sucessMessage?: string,
) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const postData = async (data: any) => {
    setLoading(true);
    try {
      const res = await serviceFunction(data);
      if (path !== '') {
        router.push(path);
      }
      return res;
    } catch (error) {
      const errorT = error as AxiosError;

        setMessage(
          String((errorT.response?.data as { message?: string })?.message),
        );
   
    }
    setLoading(false);
  };

  return { status, message, loading, postData };
}
