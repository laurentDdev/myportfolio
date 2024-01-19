"use client"
import PageContainer from "@/components/page-container";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";

const Page = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(Array.from(data.entries()));
    };
    return (
        <PageContainer>
            <div className={"h-full flex flex-col items-center gap-4 justify-center"}>
                <h2 className={"font-bold text-xl font-verdana"}>Form contact</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className={"flex gap-4"}>
                        <Input name="LastName" placeholder="Lastname" className="block w-full rounded-md border-gray-300 shadow-sm" />
                        <Input name="FirstName" placeholder="FirstName" className="block w-full rounded-md border-gray-300 shadow-sm" />
                    </div>
                    <Input name="Mail" type="email" placeholder="Email" className="block w-full rounded-md border-gray-300 shadow-sm" />
                    <Textarea name="Message" as="textarea" rows="7" placeholder="Message" className="block resize-none w-full rounded-md border-gray-300 shadow-sm" />
                    <Button type="submit" variant={"myvariant"} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Send
                    </Button>
                </form>
            </div>
        </PageContainer>
    );
};

export default Page;
