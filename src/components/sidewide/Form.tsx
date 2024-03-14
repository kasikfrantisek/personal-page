import emailjs from 'emailjs-com';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TailSpin } from 'react-loader-spinner';

import { Input } from './Input';
import { TextArea } from './TextArea';

export type Inputs = {
  name: string;
  mail: string;
  phone: string;
  company?: string;
  message: string;
};

export const Form = () => {
  const [succes, setSucces] = useState(false);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    try {
      await emailjs.send(
        'service_0i0hyak',
        'template_wq3ovj8',
        data,
        'wj78f7NKzADUgpYy1',
      );
      setSucces(true);
      setLoading(false);
      reset();
    } catch (error) {
      setSucces(false);
      setLoading(false);
    }

    setShow(true);
  };

  if (loading)
    return (
      <div className="flex size-full items-start justify-center">
        <TailSpin
          visible={true}
          height="100"
          width="100"
          color="#115E59"
          ariaLabel="tail-spin-loading"
          radius="0"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );

  if (show)
    return (
      <div>
        <h3 className="mb-8 w-2/3 text-h2 text-white">
          {succes
            ? 'Thank you, for the message, I will contact you as soon as possible (2 to 3 days)'
            : 'Something went wrong, please try again...'}
        </h3>
        <button
          className="inline w-fit rounded-full border-[1px] border-white bg-transparent px-3 py-2 text-overline-16-light text-white"
          onClick={() => {
            setShow(false);
            setSucces(false);
          }}
        >
          Send new
        </button>
      </div>
    );

  return (
    <form
      className="flex w-2/3 flex-col gap-7"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        name="name"
        placeholder="Your name"
        required
        register={register}
        error={errors}
      />
      <Input
        name="mail"
        placeholder="Your e-mail adress"
        required
        register={register}
        error={errors}
      />
      <Input
        name="phone"
        placeholder="Your phone number"
        required
        register={register}
        error={errors}
      />
      <Input
        name="company"
        placeholder="Where do you work (optional)"
        required={false}
        register={register}
        error={errors}
      />
      <TextArea
        name="message"
        placeholder="Tell me something about your project"
        required
        register={register}
        error={errors}
      />
      <button
        type="submit"
        className="inline w-fit rounded-full border-[1px] border-white bg-transparent px-3 py-2 text-overline-16-light text-white"
      >
        Send
      </button>
    </form>
  );
};
