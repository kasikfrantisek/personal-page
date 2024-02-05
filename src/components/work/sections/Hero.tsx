
type Props = {
    title: string;
}

export const Hero = ({title}: Props) => {
    return (
        <section className="h-[50vh] w-screen flex items-center text-white pt-5 md:pt-20 md:pl-20 px-6 relative overflow-hidden">
            <h1 className="md:text-[100px] text-3xl uppercase font-bold leading-[100%] w-4/5 md:w-2/3 relative" >{title}
                <span className="md:text-[400px] text-3xl uppercase font-bold leading-[82%] fixed top-[60px] opacity-15 left-10 max-w-[100vw] break-words -z-50" >{title}</span>
            </h1>
        </section>
    )
}