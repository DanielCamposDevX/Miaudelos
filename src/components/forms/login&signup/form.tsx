'use client';
import LoadingVideo from '@/assets/videos/loading.mp4';
import Input from '@/components/globals/input';
import VideoLogin from '@/components/globals/video';
import { usePost } from '@/hooks/useApi';
import {
  LoginFormSchema,
  LoginForm as LoginFormType,
} from '@/schemas/forms/login';
import { Login } from '@/services/login';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoadingButton } from '@mui/lab';
import { useForm } from 'react-hook-form';

export default function LoginForm() {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<LoginFormType>({ resolver: zodResolver(LoginFormSchema) });

  const { postData, loading } = usePost(Login, '/');

  async function handleFormSubmit(data: LoginFormType) {
    const res = postData(data);
    console.log(res);
  }

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col h-3/6 w-10/12 justify-around items-center bg-white border rounded-2xl border-black shadow-lg"
    >
      {loading && <VideoLogin Video={LoadingVideo} loop />}
      <div className="flex flex-col gap-1  w-10/12 items-center">
        <Input
          label={'Email'}
          placeholder={''}
          error={errors.email?.message}
          register={register('email')}
          disabled={false}
          width="w-full"
        />
        <Input
          label={'Senha'}
          placeholder={''}
          error={errors.password?.message}
          register={register('password')}
          disabled={false}
          type="password"
          width="w-full"
        />
      </div>
      <div className="flex flex-col gap-4 w-9/12 items-center">
        <LoadingButton type="submit" variant="contained" className="w-full">
          Entrar
        </LoadingButton>
        <p
          className="text-sm cursor-pointer text-purple-600 underline"
          onClick={() => {
            alert('CONTA');
          }}
        >
          Ou clique aqui para criar uma conta
        </p>
      </div>
    </form>
  );
}
