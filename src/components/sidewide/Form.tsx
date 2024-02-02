import { Input } from "./Input"
import { TextArea } from "./TextArea"
import { useForm, SubmitHandler } from "react-hook-form"
import emailjs from 'emailjs-com';


export type Inputs = {
    name: string;
    mail: string;
    phone: string;
    company?: string;
    message: string;
}


export const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>()


    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
          await emailjs.send(
            'service_0i0hyak',
            'template_wq3ovj8',
            data,
            'wj78f7NKzADUgpYy1'
          );
    
          console.log('Email sent successfully!');
        } catch (error) {
          console.error('Error sending email:', error);
        }
      };

  return (
        <form className="flex flex-col gap-7" onSubmit={handleSubmit(onSubmit)}>
            <Input name='name' placeholder="Your name" required register={register}/>
            <Input name='mail' placeholder="Your e-mail adress" required register={register} />
            <Input name='phone' placeholder="Your phone number" required register={register} />
            <Input name='company' placeholder="Where do you work (optional)" required={false} register={register} />
            <TextArea name='message' placeholder="Tell me something about your project" required register={register}/>
            <button type="submit" className="px-3 py-2 border-[1px] border-white bg-transparent text-white rounded-full inline w-fit text-sm">Send</button>
        </form>
    )
}