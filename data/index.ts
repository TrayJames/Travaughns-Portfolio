
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
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/TrayJames/SOAR-Automation-Project",
  },
  {
    id: 2,
    title: "OWASP Web Goat",
    des: "Excercised application security tools and common application vulnerabilities via OWASPS Web Goat",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/TrayJames/SOAR-Automation-Project",
  },
  {
    id: 3,
    title: "Chef Claud",
    des: "React Application using Claude AI API. Just enter some ingredients and Chef Claude will give you a delicious recipe!",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/TrayJames/Chef-Claude",
  },
  {
    id: 4,
    title: "Undergrade Capstone Project",
    des: "Developing an Ancient DNA/Whole Genome pipeline to streamline Bioinformatics research",
    img: "/p4.svg",
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