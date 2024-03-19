import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { Inputs } from './Form';

type Props = {
  placeholder: string;
  name: 'name' | 'mail' | 'phone' | 'message' | 'company';
  required: boolean;
  register: UseFormRegister<Inputs>;
  error: FieldErrors<Inputs>;
};

export const Input = ({
  placeholder,
  name,
  required,
  register,
  error,
}: Props) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return (
    <div className="relative">
      <input
        className="w-full border-b-2 border-b-teal-800 bg-transparent text-overline-16 text-white outline-none placeholder:text-overline-16-light placeholder:text-white placeholder:opacity-80"
        placeholder={placeholder}
        {...register(name, {
          required: required,
          pattern: name === 'mail' ? emailRegex : undefined,
        })}
      />
      {error && (
        <p className="absolute right-0 top-0 text-overline-14 text-red-600">
          {error[name]?.type === 'required' && 'This field is required'}
          {error[name]?.type === 'pattern' && 'This is an invalid format'}
        </p>
      )}
    </div>
  );
};
