
import PageContainer from "@/components/page-container";
import {TechnologyStack} from "@/types";


import {Suspense} from "react";
import CarouselGraphic from "@/components/carousel-graphic";

const Page = () => {

    return (
        <PageContainer>
            <h1 className={"text-xl text-center font-verdana font-bold"}>
                Technology Stack and Skills
            </h1>
            <div className={"grid grid-cols-1 lg:grid-cols-2 h-full items-center"}>
                <div className="h-full flex flex-col lg:flex-row items-center">
                  <Suspense fallback={<div>Loading...</div>}>
                      <CarouselGraphic />
                  </Suspense>
                </div>
                <div className={"flex flex-col h-full justify-center items-center"}>
                    <h2 className={"text-center font-verdana font-bold text-myblue text-5xl"}>Core Stack</h2>
                    <div className={"mt-10 grid grid-cols-2 gap-10 max-w-[500px]"}>
                        <div className={"flex flex-col gap-2"}>
                            <h3 className={"text-3xl text-center font-verdana font-bold text-myyellow"}>Front</h3>
                            <ul>
                                {
                                    TechnologyStack.filter(tech => tech.type === "front").map(tech => (
                                        <li key={tech.name} className={"font-verdana text-xl font-bold text-center"}>{tech.name}</li>
                                    ))
                                }

                            </ul>
                        </div>
                        <div className={"flex flex-col gap-2"}>
                            <h3  className={"text-3xl text-center font-verdana font-bold text-myyellow"}>Back</h3>
                            <ul>
                                {
                                    TechnologyStack.filter(tech => tech.type === "back").map(tech => (
                                        <li key={tech.name} className={"font-verdana font-bold text-xl text-center"}>{tech.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
};

export default Page;
