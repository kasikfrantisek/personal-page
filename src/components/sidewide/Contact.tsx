import Link from "next/link"
import { SectionWrapper } from "./SectionWrapper"
import { Form } from "./Form"

export const Contacts = () => {
    return (
        <SectionWrapper title="Hit me up!" id="contact">
            <div className="grid grid-cols-2 h-full w-full pt-14">
                <div className="">
                    <h5 className="text-3xl text-white w-2/3">
                        Hey you cen hit me up directly on one of the contacts bellow, but if you prefare good old forms just fill up the one on the right.
                    </h5>
                    <div className="text-white text-3xl flex flex-col gap-8 pt-14 font-semibold uppercase">
                        <Link href="tel:+420607508287">+420 607 508 287</Link>
                        <Link href="mailto:kasik.frantisek97@gmail.com">kasik.frantisek97@gmail.com</Link>
                        <Link href="instagram.com/frantaklasik">@frantaklasik</Link>
                    </div>
                </div>
                <div className="w-2/3">
                    <Form />
                </div>
            </div>
        </SectionWrapper>
    )
}