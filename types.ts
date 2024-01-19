export type Technology = {
    name: string;
    type: "front" | "back";
    skillScore: number;
    diminutive?: string;
}

export const TechnologyStack: Technology[] = [
    {
        name: "JavaScript",
        type: "front",
        diminutive: "JS",
        skillScore: 10
    },
    {
        name: "TypeScript",
        type: "front",
        diminutive: "TS",
        skillScore: 8
    },
    {
        name: "React",
        type: "front",
        diminutive: "React",
        skillScore: 9
    },
    {
        name: "Next",
        type: "front",
        diminutive: "Next",
        skillScore: 7
    },
    {
        name: "React Native",
        type: "front",
        diminutive: "RN",
        skillScore: 8
    },
    {
        name: "Angular",
        type: "front",
        diminutive: "Angular",
        skillScore: 8
    },
    {
        name: "Vue",
        type: "front",
        diminutive: "Vue",
        skillScore: 5
    },
    {
        name: "Node",
        type: "back",
        diminutive: "Node",
        skillScore: 9
    },
    {
        name: "Express",
        type: "back",
        diminutive: "Express",
        skillScore: 9
    },
    {
        name: "Prisma",
        diminutive: "Prisma",
        type: "back",
        skillScore: 7
    },
    {
        name: "PostgreSQL",
        diminutive: "PostgreSQL",
        type: "back",
        skillScore: 7
    },
    {
        name: "MySQL",
        diminutive: "MySQL",
        type: "back",
        skillScore: 8
    },
    {
        name: "MongoDB",
        diminutive: "MongoDB",
        type: "back",
        skillScore: 8
    },
    {
        name: "Go",
        diminutive: "Go",
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
