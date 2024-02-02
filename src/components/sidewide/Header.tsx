import Link from "next/link"

export const Header = () => {
    return (
        <header className="fixed w-screen bg-black">
            <nav className="text-white flex justify-between py-5 px-6 items-center bg-black">
                <Link href="/">
                    <p className="uppercase text-3xl font-bold">FK</p>
                </Link>
                <ul className="flex gap-5 text-sm font-semibold uppercase">
                    <li>
                        <Link href="/#about">About</Link>
                    </li>
                    <li>
                        <Link href="/#experience">Experience</Link>
                    </li>
                    <li>
                        <Link href="/#projects">Projects</Link>
                    </li>
                    <li>
                        <Link href="/#contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}