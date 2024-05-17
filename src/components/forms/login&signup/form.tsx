'use client';
import Input from '@/components/globals/input';
import {
  LoginFormSchema,
  LoginForm as LoginFormType,
} from '@/schemas/forms/login';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';

export default function LoginForm() {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<LoginFormType>({ resolver: zodResolver(LoginFormSchema) });

  return (
    <form
      onSubmit={handleSubmit(data => console.log(data))}
      className="flex flex-col gap-5"
    >
      <Input
        label={'Email'}
        placeholder={''}
        error={errors.email?.message}
        register={register('email')}
        disabled={false}
      />
      <Input
        label={'Senha'}
        placeholder={''}
        error={errors.password?.message}
        register={register('password')}
        disabled={false}
      />
      <Button type="submit" variant="contained">
        Entrar
      </Button>
    </form>
  );
}
