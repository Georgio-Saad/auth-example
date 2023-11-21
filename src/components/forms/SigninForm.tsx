'use client';

import { signIn } from 'next-auth/react';
import React from 'react';
import { useForm } from 'react-hook-form';

interface SigninForm {
  email: string;
  password: string;
}

export default function SigninForm() {
  const { register, handleSubmit } = useForm<SigninForm>({
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = handleSubmit(({ email, password }) => {
    signIn('credentials', {
      email,
      password,
      redirect: true,
      callbackUrl: 'http://localhost:3000/my-account',
    });
  });

  return (
    <form className="flex flex-col gap-3" onSubmit={onSubmit}>
      <h1 className="text-4xl">Sign In</h1>
      <input {...register('email')} className="text-black" />
      <input {...register('password')} className="text-black" />
      <button type="submit"> Sign In</button>
      <div className="flex flex-row justify-between">
        <button
          className="bg-orange-600 rounded-full hover:opacity-40 duration-300 w-1/2"
          onClick={(event) => {
            event.preventDefault();

            signIn('google');
          }}
        >
          Google
        </button>
        <button
          className="bg-orange-600 rounded-full hover:opacity-40 duration-300 w-1/2"
          onClick={(event) => {
            event.preventDefault();

            signIn('google');
          }}
        >
          Facebook
        </button>
      </div>
    </form>
  );
}
