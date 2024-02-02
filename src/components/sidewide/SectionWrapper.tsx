import { ReactNode } from "react";

type Props = {
    title: string;
    children: ReactNode;
    id: string;
}

export const SectionWrapper = ({title, children, id}:Props) => {
   return (
    <section className="w-full h-screen text-white pt-5 md:pt-20 md:pl-20 px-6 relative overflow-hidden" id={id}>
        <h1 className="md:text-[100px] text-3xl uppercase font-bold leading-[100%] w-4/5 md:w-2/3" dangerouslySetInnerHTML={{__html: title}} />
        {children}
    </section>
   )
}