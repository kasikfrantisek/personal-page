import { Input } from "./Input"
import { TextArea } from "./TextArea"
import { useForm, SubmitHandler } from "react-hook-form"
import emailjs from 'emailjs-com';
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";


export type Inputs = {
    name: string;
    mail: string;
    phone: string;
    company?: string;
    message: string;
}


export const Form = () => {
    const [succes, setSucces] = useState(false);
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<Inputs>()


    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setLoading(true)
        try {
          await emailjs.send(
            'service_0i0hyak',
            'template_wq3ovj8',
            data,
            'wj78f7NKzADUgpYy1'
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

    useEffect(() => {
        console.log(show)
    }, [show])

    if(loading) return (
        <div className="w-full h-full flex items-start justify-center">
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
    )

    if(show) return (
        <div>
            <h3 className="text-3xl text-white w-2/3 mb-8">{succes ? 'Thank you, for the message, I will contact you as soon as possible (2 to 3 days)' : 'Something went wrong, please try again...' }</h3>
            <button className="px-3 py-2 border-[1px] border-white bg-transparent text-white rounded-full inline w-fit text-sm" onClick={() => {
                setShow(false);
                setSucces(false);
            }}>Send new</button>
        </div>
    )

    return (
        <form className="flex flex-col gap-7 w-2/3" onSubmit={handleSubmit(onSubmit)}>
            <Input name='name' placeholder="Your name" required register={register} error={errors} />
            <Input name='mail' placeholder="Your e-mail adress" required register={register}  error={errors} />
            <Input name='phone' placeholder="Your phone number" required register={register}  error={errors} />
            <Input name='company' placeholder="Where do you work (optional)" required={false} register={register}  error={errors} />
            <TextArea name='message' placeholder="Tell me something about your project" required register={register} error={errors}/>
            <button type="submit" className="px-3 py-2 border-[1px] border-white bg-transparent text-white rounded-full inline w-fit text-sm">Send</button>
        </form>
    )
}