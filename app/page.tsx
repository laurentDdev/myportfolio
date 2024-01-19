import Image from 'next/image'
import PageContainer from "@/components/page-container";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <PageContainer>
      <div className={"grid grid-cols-2  h-full"}>
        <div className={"w-[90%] flex flex-col justify-center gap-6"} >
            <h1 className={"text-7xl font-verdana font-bold"}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Hey It's Laurent I'm a <span className={"text-myblue"}>fullstack developer</span>
            </h1>
            <p className={"text-lg font-verdana font-bold"}>
                At the core of my life resides a passion that transcends lines of code, infusing vitality into every project I undertake. The realm of development is not merely a job for me but an infinite source of inspiration and wonder. Each line of code I write is a manifestation of my creativity, a step closer to bringing my ideas to fruition.
            </p>
            <Link href={"/works"}>
                <Button variant={"myvariant"} className={"mt-5 self-start p-6 font-verdana font-bold"}>View my work</Button>
            </Link>
        </div>
        <Image className={"self-center justify-self-center"} src="/assets/Vector.svg" alt="profil picture" width="500" height="500" />
      </div>
    </PageContainer>
  )
}
