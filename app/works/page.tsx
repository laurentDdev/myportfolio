import React from 'react';
import PageContainer from "@/components/page-container";
import {WorksList} from "@/types";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {FaGithub} from "react-icons/fa";
import Link from "next/link";

const Page = () => {
    return (
        <PageContainer>
            <div className={"p-4 h-full"}>
                <h1 className={"text-4xl text-center font-verdana font-bold mb-7"}>
                    My works
                </h1>
                <div className={"flex flex-col items-center justify-between h-full"}>
                    {
                        WorksList.map((work, index) => (
                            <div key={index} className={"flex flex-col-reverse xl:flex-row gap-6 items-center justify-around my-10"}>
                                <div className={"xl:w-1/4 flex justify-start flex-col gap-6"}>
                                    <h2 className={"flex gap-2 text-3xl font-verdana font-bold"}><span className={"text-myblue font-bold font-verdana"}>{index + 1}</span>{work.name}</h2>
                                    <p className={"text-mytext text-xl"}>{work.description}</p>
                                    <ul className={"flex flex-wrap gap-2"}>
                                        {
                                            work.technologies.map((tech, index) => (
                                                <li key={index} className={"bg-mytext font-bold font-verdana px-4 py-3 rounded-lg"}>{tech}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className={"flex flex-col gap-6"}>
                                    <Image src={work.image} width={600} height={600} alt={"image intro to website"} />
                                    <div className={"flex gap-2"}>
                                        <Link href={work.repo}>
                                            <Button variant={"ghost"} className={"flex gap-2 items-center"}><FaGithub/> Github</Button>
                                        </Link>
                                        <Link href={work.url} className={"flex-grow"}>
                                            <Button className={"w-full"}  variant={"myvariant"}>View site</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </PageContainer>
    );
};

export default Page;
