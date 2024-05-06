'use client'

import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"
import {usePathname} from "next/navigation"

import {sidebarLinks} from "../constants/index"
import {cn} from "../lib/utils"

const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname()
    return (
        <section className='w-full max-w-[264px]'>
            <Sheet>
                <SheetTrigger>
                    <Image src='/icons/hamburger.svg' alt='menu' width={30} height={30} className='cursor-pointer'/>
                </SheetTrigger>
                <SheetContent side='left' className='border-none bg-white'>
                    <nav className='flex flex-col gap-4'>
                        <Link href='/' className='cursor-pointer items-center gap-1 px-4 flex'>
                            <Image
                                src='/icons/logo.svg'
                                width={34}
                                height={34}
                                alt='logo'
                            />
                            <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>Future</h1>
                        </Link>
                        <div className='mobilenav-sheet'>
                            <SheetClose asChild>
                                <nav className='flex h-full flex-col gap-6 pt-16 text-white'>
                                    {sidebarLinks.map((item) => {
                                        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                                        return(
                                            <SheetClose asChild
                                                        key={item.label}>
                                                <Link
                                                    href={item.route}
                                                    className={cn('mobilenav-sheet_close w-full', {'bg-bank-gradient': isActive})}
                                                >
                                                    <Image
                                                        src={item.imgURL}
                                                        alt={item.label}
                                                        width={20}
                                                        height={20}
                                                        className={cn({'brightness-[3] invert-0': isActive})}
                                                    />
                                                    <p className={cn('text-16 font-semibold text-black-2', {'!text-white': isActive})}>
                                                        {item.label}
                                                    </p>
                                                </Link>
                                            </SheetClose>
                                        )
                                    })}
                                </nav>
                            </SheetClose>
                        </div>
                        user
                    </nav>
                </SheetContent>
            </Sheet>
            footer
        </section>
    )
}

export default MobileNav