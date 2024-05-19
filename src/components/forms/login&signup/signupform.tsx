'use client';
import Input from '@/components/globals/input';
import LoadingGifs from '@/components/globals/loadingGif';
import { usePost } from '@/hooks/useApi';
import {
  SignupFormSchema,
  SignupForm as SignupFormType,
} from '@/schemas/forms/signup';
import { Signup } from '@/services/signup';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoadingButton } from '@mui/lab';
import { useForm } from 'react-hook-form';

export default function SignupForm() {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignupFormType>({ resolver: zodResolver(SignupFormSchema) });

  const { postData, loading } = usePost(Signup, '/');

  async function handleFormSubmit(data: SignupFormType) {
    const res = postData(data);
    console.log(res);
  }

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col gap-8 py-6 w-10/12 justify-around items-center bg-white border rounded-2xl border-black shadow-lg"
    >
      {loading && <LoadingGifs />}
      Crie sua conta:
      <div className="flex flex-col gap-1  w-10/12 items-center">
        <Input
          label={'Nome'}
          placeholder={'John Doe'}
          error={errors.name?.message}
          register={register('name')}
          disabled={false}
          width="w-full"
        />
        <Input
          label={'Email'}
          placeholder={'email@email.com'}
          error={errors.email?.message}
          register={register('email')}
          disabled={false}
          width="w-full"
        />
        <Input
          label={'Senha'}
          placeholder={'******'}
          error={errors.password?.message}
          register={register('password')}
          disabled={false}
          type="password"
          width="w-full"
        />
        <Input
          label={'Confirmar senha'}
          placeholder={'******'}
          error={errors.confirmPassword?.message}
          register={register('confirmPassword')}
          disabled={false}
          type="password"
          width="w-full"
        />
        <Input
          label={'CPF'}
          placeholder={'******'}
          mask={'999.999.999-99'}
          error={errors.cpf?.message}
          register={register('cpf')}
          disabled={false}
          width="w-full"
        />
        <Input
          label={'Telefone'}
          placeholder={'(00) 0000-0000'}
          mask={'(99) 9 9999-9999'}
          error={errors.phone?.message}
          register={register('phone')}
          disabled={false}
          width="w-full"
        />
      </div>
      <div className="flex flex-col gap-4 w-9/12 items-center">
        <LoadingButton
          type="submit"
          variant="contained"
          className="w-full"
          color="secondary"
        >
          Criar
        </LoadingButton>
      </div>
    </form>
  );
}
