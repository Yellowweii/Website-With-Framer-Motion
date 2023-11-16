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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description: "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description: "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description: "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
