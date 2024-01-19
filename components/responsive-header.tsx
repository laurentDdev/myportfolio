"use client"
import PageContainer from "@/components/page-container";
import {Sheet, SheetContent, SheetHeader, SheetTrigger} from "@/components/ui/sheet";
import {FaBars} from "react-icons/fa";
import {useState} from "react";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const ResponsiveHeader = () => {
    const [open, setOpen] = useState(false)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger   onClick={() => setOpen(true)}>
                <FaBars className={"h-6 w-6 text-black dark:text-white md:hidden"}  />
            </SheetTrigger>
            <SheetContent onCloseAutoFocus={() => setOpen(false)}>
                <div className={"flex flex-col gap-4"}>
                    <Link href={"/"} onClick={() => setOpen(false)} className={"block px-2 py-1 text-lg"} >
                        <Button variant={"ghost"}>Home</Button>
                    </Link>
                    <Link href={"/about"} onClick={() => setOpen(false)} className={"block px-2 py-1 text-lg"} >
                        <Button variant={"ghost"}>About</Button>
                    </Link>
                    <Link href={"/works"} onClick={() => setOpen(false)} className={"block px-2 py-1 text-lg"} >
                        <Button variant={"ghost"}>Works</Button>
                    </Link>
                    <Link href={"/contact"} onClick={() => setOpen(false)} className={"block px-2 py-1 text-lg"} >
                        <Button variant={"ghost"}>Contact</Button>
                    </Link>
                </div>
            </SheetContent>

        </Sheet>
    );
};

export default ResponsiveHeader;
