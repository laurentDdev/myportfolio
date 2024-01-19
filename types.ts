export type Technology = {
    name: string;
    type: "front" | "back";
    skillScore: number;
}

export const TechnologyStack: Technology[] = [
    {
        name: "JavaScript",
        type: "front",
        skillScore: 10
    },
    {
        name: "TypeScript",
        type: "front",
        skillScore: 8
    },
    {
        name: "React",
        type: "front",
        skillScore: 9
    },
    {
        name: "Next",
        type: "front",
        skillScore: 7
    },
    {
        name: "React Native",
        type: "front",
        skillScore: 8
    },
    {
        name: "Angular",
        type: "front",
        skillScore: 8
    },
    {
        name: "Vue",
        type: "front",
        skillScore: 5
    },
    {
        name: "Node",
        type: "back",
        skillScore: 9
    },
    {
        name: "Express",
        type: "back",
        skillScore: 9
    },
    {
        name: "Prisma",
        type: "back",
        skillScore: 7
    },
    {
        name: "PostgreSQL",
        type: "back",
        skillScore: 7
    },
    {
        name: "MySQL",
        type: "back",
        skillScore: 8
    },
    {
        name: "MongoDB",
        type: "back",
        skillScore: 8
    },
    {
        name: "Go",
        type: "back",
        skillScore: 6
    },
]


export type Works = {
    name: string;
    description: string;
    technologies: string[];
    url: string;
    repo: string;
    image: string;
}


export const WorksList: Works[] = [
    {
        name: "Ip Address Tracker",
        description: "A straightforward tool to quickly locate and visualize the real-time geographical location of an IP address. Get swift insights into the origin of a connection with this user-friendly IP tracking solution.",
        technologies: ["React", "react-map-gl", "IP Geolocation API", "Vite"],
        url: "https://iptracker-orpin.vercel.app/",
        repo: "https://github.com/laurentDdev/iptracker",
        image: "/assets/website/myiptracker.png"
    },
    {
        name: "Ip Address Tracker",
        description: "A straightforward tool to quickly locate and visualize the real-time geographical location of an IP address. Get swift insights into the origin of a connection with this user-friendly IP tracking solution.",
        technologies: ["React", "react-map-gl", "IP Geolocation API", "Vite"],
        url: "https://iptracker-orpin.vercel.app/",
        repo: "https://github.com/laurentDdev/iptracker",
        image: "/assets/website/myiptracker.png"
    },
    {
        name: "Ip Address Tracker",
        description: "A straightforward tool to quickly locate and visualize the real-time geographical location of an IP address. Get swift insights into the origin of a connection with this user-friendly IP tracking solution.",
        technologies: ["React", "react-map-gl", "IP Geolocation API", "Vite"],
        url: "https://iptracker-orpin.vercel.app/",
        repo: "https://github.com/laurentDdev/iptracker",
        image: "/assets/website/myiptracker.png"
    },

]
