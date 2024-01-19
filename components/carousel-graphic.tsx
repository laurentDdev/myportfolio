"use client"
import dynamic from "next/dynamic";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {TechnologyStack} from "@/types";


const frontEndStack = TechnologyStack.filter((tech) => tech.type === 'front');
const backEndStack = TechnologyStack.filter((tech) => tech.type === 'back');

const GraphFront = dynamic(() => import ("@/components/graph-front"), {ssr: false})
const GraphBack = dynamic(() => import ("@/components/graph-back"), {ssr: false})

const CarouselGraphic = () => {
    return (
        <Carousel className={"w-full xl:w-[80%]"}
                  plugins={[
                      Autoplay({
                          delay: 5000
                      })
                  ]}>
            <CarouselContent>
                <CarouselItem>
                    <div className="flex-none p-4 flex flex-col items-center justify-center">
                        <h2 className="text-lg font-bold mb-4">Front-End Stack</h2>
                        <GraphFront data={frontEndStack} />
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="flex-none p-4 w-full flex flex-col items-center justify-center">
                        <h2 className="text-lg font-bold mb-4 text-center">Back-End Stack</h2>
                        <GraphBack data={backEndStack} />
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};

export default CarouselGraphic;
