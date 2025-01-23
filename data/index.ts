
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "To View My Resume Click Here!",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "./b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: `Tech Stack`,
    description: "",
    className: "lg:col-span-2 md:col-span-6 md:row-span-4",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "SOAR Automation Project",
    des: "Automated incident response using Wazuh, TheHive, and Shuffle SOAR",
    img: "./ShuffleWebhook.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/TrayJames/SOAR-Automation-Project",
  },
  {
    id: 2,
    title: "Cyber Deception Lab",
    des: "Using various tools and techniques, I demonstrate the use of cyber deception strategies to thwart attackers",
    img: "./CyberDeception.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/TrayJames/Cyber_Deception-Tools_and_Techniques",
  },
  {
    id: 3,
    title: "Log4j: Exploitation, Mitigation, and Prevention",
    des: "Walk through of a Log4j exploitation against a Minecraft server, illustrating mitigation and prevention strategies",
    img: "./SteveHacked.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/TrayJames/Log4j-Exploitation_Prevention_Mitigation",
  },
  {
    id: 4,
    title: "Chef Claude",
    des: "React Application using Claude AI API. Just enter some ingredients and Chef Claude will give you a delicious recipe!",
    img: "./ChefClaude.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/TrayJames/Chef-Claude",
  },
  {
    id: 5,
    title: "Undergrade Capstone Project",
    des: "Developing an Ancient DNA/Whole Genome pipeline to streamline Bioinformatics research",
    img: "./WDLWorkflow.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://portfolios.cs.earlham.edu/index.php/students/2023-2/cs488/tra-vaughn-james/",
  },
  
];



export const socialMedia = [
  {
    id: 1,
    img: "./git.svg",
    link: "https://github.com/TrayJames",
  },
  {
    id: 3,
    img: "./link.svg",
    link: "https://www.linkedin.com/in/tra-vaughn-james-39aa04192/"
  },
];