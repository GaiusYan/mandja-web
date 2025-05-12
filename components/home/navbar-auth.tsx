import { cn } from "@/lib/utils";

import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
  display: 'swap',
});
export const NavbarAuth = () => {
    return (
        <div className="p-5
            flex
            justify-between
            items-center bg-white shadow-md fixed top-0 left-0 right-0 z-10">
            <div className='flex flex-row gap-1 items-center'>
            <p className=
                {cn(roboto.className,
                " flex items-center text-xl text-[#7E69AB] font-extrabold")}>
                <Link href={"/"}>
                    Mandja-web
                </Link>
                </p>
            </div>
        </div>
    )
}