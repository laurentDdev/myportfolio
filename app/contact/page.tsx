"use client"
import PageContainer from "@/components/page-container";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import emailjs from '@emailjs/browser';
import {useState} from "react";
const Page = () => {

    const [error, setError] = useState("");

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const value = Object.fromEntries(data.entries());

        if (value.FirstName === "" || value.LastName === "" || value.Mail === "" || value.Message === "") {
            setError("Veuillez remplir tous les champs")
            return;
        }

        emailjs.send('service_vqq7j1e', 'template_de7ltt7', {
            to_name: value.FirstName + " " + value.LastName,
            to_email: 'laurent5dessy@gmail.com',
            by_pseudo: 'laurent5dessy',
            from_message: value.Message,
            from_name: value.FirstName + " " + value.LastName,
            from_email: value.Mail
        }, 'CC65Jr390ZTa5m4pK')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setError("")
            }, (error) => {
                console.log('FAILED...', error);
                setError("Une erreur est survenue, veuillez réessayer plus tard")
            });
    };
    return (
        <PageContainer>
            <div className={"h-full flex flex-col items-center gap-4 justify-center"}>
                <h2 className={"font-bold text-xl font-verdana"}>Form contact</h2>
                <form onSubmit={handleSubmit} className="space-y-4 md:w-1/2 xl:w-2/5">
                    <div className={"flex gap-4"}>
                        <Input name="LastName" placeholder="Lastname" className="block w-full rounded-md border-gray-300" />
                        <Input name="FirstName" placeholder="FirstName" className="block w-full rounded-md border-gray-300 shadow-sm" />
                    </div>
                    <Input name="Mail" type="email" placeholder="Email" className="block w-full rounded-md border-gray-300 shadow-sm" />
                    <Textarea name="Message" as="textarea" rows={7} placeholder="Message" className="block resize-none w-full rounded-md border-gray-300 shadow-sm" />
                    {error.length > 0 && <p className={"text-red-500"}>{error}</p>}
                    <Button type="submit" variant={"myvariant"} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Send
                    </Button>
                </form>
            </div>
        </PageContainer>
    );
};

export default Page;
