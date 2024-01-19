import { FaGithub, FaLinkedin } from "react-icons/fa";
const SocialNetwork = () => {
    return (
        <div className={"flex gap-3"}>
            <FaGithub className={"text-xl"}/>
            <FaLinkedin className={"text-xl"}/>
        </div>
    );
};

export default SocialNetwork;
