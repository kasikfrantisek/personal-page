import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Inputs } from "./Form";

type Props = {
    placeholder: string;
    name: 'name' | 'mail' | 'phone' | 'message' | 'company';
    required: boolean;
    register: UseFormRegister<Inputs>;
    error: FieldErrors<Inputs>;

}

export const TextArea = ({placeholder, name, required, register, error}: Props) => {
    return (
        <div className="relative">
            <textarea className="bg-transparent resize-none h-[20vh] border-b-2 w-full border-b-teal-800 placeholder:text-white placeholder:opacity-80 outline-none text-white text-xl placeholder:text-sm"
            placeholder={placeholder}
            {...register(name, { required: required })}/>
            {error && <p className="absolute top-none text-xs text-red-800">
                    {error[name]?.type === 'required' && 'This field is required'}
                </p>
             }
        </div>
    )
}