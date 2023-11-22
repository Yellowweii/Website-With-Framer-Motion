import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "微信小程序开发",
    location: "wxml、wxss、javascript、java、springboot、mysql",
    description:
      "With the help of a UI designer friend, I successfully developed a WeChat Miniprogram for making friends for my university (Nantong University). Now, the number of visits has reached 400 +.",
    icon: React.createElement(LuGraduationCap),
    date: "2023.05 - 2023.06",
  },
  {
    title: "前端开发实习生",
    location: "智子光年科技有限公司",
    description:
      "Under the guidance of tech experts, I learned how to write code in a standardized way, name variables in a standardized way, use git version control tools, Copilot code assistance tools, etc.",
    icon: React.createElement(CgWorkAlt),
    date: "2023.06 - 2023.09",
  },
  {
    title: "2025届应届毕业生",
    location: "南通大学",
    description: "I am currently a third-year student in school, mainly studying technology stacks such as React，Next.js，TailwindCSS，TypeScript，Framer Motion.",
    icon: React.createElement(FaReact),
    date: "2023.09 - present",
  },
];

export const projectsData = [
  {
    title: "tennis微信小程序",
    description: "This is a tennis WeChat miniprogram developed for tennis enthusiasts.It includes an intelligent recommendation algorithm based on level and distance range.",
    tags: ["微信小程序原生开发", "ColorUI组件库", "小程序云开发", "CMS后台管理", "Vant组件库"],
    imageUrl: "https://www.yellowwei.cn/img/QR_Code3.jpg",
  },
  {
    title: "怦动校园微信小程序",
    description: "This is a WeChat miniprogram designed to help NTU students make friends and fall in love.",
    tags: ["微信小程序原生开发", "Vant组件库", "Mysql", "SpringBoot", "Mybatis-Plus", "SpringMVC"],
    imageUrl: "https://www.yellowwei.cn/img/QR_Code.jpg",
  },
  {
    title: "技术博客",
    description: "This is my personal blog built using the Butterfly theme in the Hexo framework. It is used to record some difficulties and unsolvable problems I encountered in my studies",
    tags: ["Hexo", "MarkDown", "Butterfly", "CDN"],
    imageUrl: "https://www.yellowwei.cn/img/example3.png",
  },
];

export const skillsData = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "TailwindCSS",
  "Framer Motion",
  "Vue.js",
  "Node.js",
  "Git",
  "Java",
  "MySQL",
  "Spring",
  "SpringMVC",
  "Mybatis-Plus",
  "SpringBoot",
] as const;

export const settings = {
  pauseOnHover: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplaySpeed: 1000,
  autoplay: true,
  loop: true,
  cssEase: "linear",
  arrows: false,
  responsive: [
    {
      breakpoint: 1460,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        inifite: true,
        dots: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        inifite: true,
        dots: false,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 3,
        slideToscroll: 1,
        inifite: true,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slideToscroll: 1,
        inifite: true,
        dots: false,
      },
    },
  ],
};
