import { UseFormRegister } from "react-hook-form";
import { Inputs } from "./Form";

type Props = {
    placeholder: string;
    name: 'name' | 'mail' | 'phone' | 'message' | 'company';
    required: boolean;
    register: UseFormRegister<Inputs>
}

export const Input = ({placeholder, name, required, register}: Props) => {
      
    return (
        <input
            className="bg-transparent border-b-2 border-b-teal-800 placeholder:text-white placeholder:opacity-80 outline-none text-white text-xl placeholder:text-sm"
            placeholder={placeholder}
            {...register(name, { required: required })}
        />

    )
}