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
    description:
      "I am currently a third-year student in school, mainly studying technology stacks such as React，Next.js，TailwindCSS，TypeScript，Framer Motion.",
    icon: React.createElement(FaReact),
    date: "2023.09 - present",
  },
];

export const projectsData = [
  {
    title: "tennis微信小程序",
    description:
      "This is a tennis WeChat miniprogram developed for tennis enthusiasts.It includes an intelligent recommendation algorithm based on level and distance range.",
    tags: [
      "微信小程序原生开发",
      "ColorUI组件库",
      "小程序云开发",
      "CMS后台管理",
      "Vant组件库",
    ],
    imageUrl: "https://www.yellowwei.cn/img/QR_Code3.jpg",
  },
  {
    title: "怦动校园微信小程序",
    description:
      "This is a WeChat miniprogram designed to help NTU students make friends and fall in love.",
    tags: [
      "微信小程序原生开发",
      "Vant组件库",
      "Mysql",
      "SpringBoot",
      "Mybatis-Plus",
      "SpringMVC",
    ],
    imageUrl: "https://www.yellowwei.cn/img/QR_Code.jpg",
  },
  {
    title: "技术博客",
    description:
      "This is my personal blog built using the Butterfly theme in the Hexo framework. It is used to record some difficulties and unsolvable problems I encountered in my studies",
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
  "Flutter",
  "Dart",
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

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Yellowweii",
    icon: "github",
  },
  {
    name: "Twitter",
    url: "https://x.com/Yellowwei66",
    icon: "twitter",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/wei-huang-3684922a3/",
    icon: "linkedin",
  },
  {
    name: "WeChat",
    icon: "wechat",
  },
  {
    name: "QQ",
    icon: "qq",
  },
] as const;

export const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "zh", name: "简体中文", flag: "🇨🇳" },
  { code: "zh-TW", name: "繁體中文", flag: "🇹🇼" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
] as const;

export const timelineData = [
  {
    id: 1,
    date: "2023.01",
    title: "开始前端学习之旅",
    description:
      "在一位校友的影响下，我开始了微信小程序的开发。由于刚接触基础不牢，所以先从最基本的HTML, CSS, JavaScript开始学起，随后用原生开发了一个纯HTML和CSS的静态网页，成功的那一刻，便埋下了我对于前端开发的兴趣。",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    imageAlt: "前端学习",
  },
  {
    id: 2,
    date: "2023.03",
    title: "深入学习Web API和框架",
    description:
      "慢慢接触了DOM和BOM等Web API，学会了利用JavaScript操纵网页元素。接触到了Jquery库，学会了利用XMLHttpRequest以及Axios发送Ajax请求，紧接着便接触到了前端开发框架Vue2和Vue3，学会了数据驱动视图的思想。",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    imageAlt: "Vue框架学习",
  },
  {
    id: 3,
    date: "2023.05 - 2023.06",
    title: "微信小程序开发 - 怦动校园",
    description:
      "学习原生微信小程序开发，由于缺乏后端开发，我自学了Java开发语言，从最基础的JavaSE，JavaEE，JSP，Servlet，Spring，SpringMVC，SpringBoot，MyBatis，Mybatis-Plus等后端开发技术，并在一位UI设计师朋友的帮助下，成功地为我所读的大学（南通大学）开发出了一个恋爱交友的微信小程序——怦动校园，如今访问量达到400+。",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800",
    imageAlt: "怦动校园小程序",
  },
  {
    id: 4,
    date: "2023.06 - 2023.09",
    title: "前端开发实习生 - 智子光年科技",
    description:
      "在2023年的暑假期间，成功在智子光年科技有限公司拿到实习资格，在技术大牛的带领下，学会了代码的规范书写，变量的规范命名，学会了运用Git版本控制工具，Github Copilot代码辅助工具等，还学会了对前端页面性能进行优化的思想，并加深了对微信小程序开发的理解（云开发）。",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    imageAlt: "实习经历",
  },
  {
    id: 5,
    date: "2023.09 - 至今",
    title: "React和Next.js深入学习",
    description:
      "确定了自己前端开发的方向，开始学习前端的另一个应用框架React以及Next.js的SSR渲染，并且搭配CSS框架TailwindCSS，TypeScript，Shadcn/ui组件库，可以轻松便捷地开发出一个适配各种机型的响应式网站，并成功开发出过六个Next.js的项目案例。",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    imageAlt: "React和Next.js",
  },
  {
    id: 6,
    date: "2023.10 - 至今",
    title: "个人博客搭建与优化",
    description:
      "了解到了开发个人博客的框架Hexo以及Vercel无服务器便可以部署项目的网站，并通过Hexo的Butterfly主题搭建了一个属于自己的个人博客 https://blog.yellowwei.cn，目前一直在迭代优化。随后更是接触到了React的动画库Framer Motion，简化了原生Web端通过animate来操作DOM的复杂性，并提升了动画的性能。",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
    imageAlt: "个人博客",
  },
] as const;
