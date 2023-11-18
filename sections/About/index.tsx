"use client";
import React from "react";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, x: "-200px" }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        在2023年的1月份，在一位校友的影响下，我开始了微信小程序的开发，由于刚接触基础不牢，所以先从最基本的<span className="font-bold">HTML, CSS, JavaScript</span>
        开始学起，随后用原生开发了一个纯HTML和CSS的静态网页，成功的那一刻，便埋下了我对于前端开发的兴趣，随后我慢慢接触了<span className="font-bold">DOM</span>和<span className="font-bold">BOM</span>
        等Web API，学会了利用JavaScript操纵网页元素，当时便一发不可自拔，觉得开发网页特效very interesting，慢慢地也就接触到了<span className="font-bold">Jquery</span>
        库，简化了DOM的操作，学会了利用XMLHttpRequest以及Jueqry和第三方库<span className="font-bold">Axios</span>发送<span className="font-bold">Ajax</span>请求，紧接着便接触到了前端开发框架
        <span className="font-bold">Vue2和Vue3</span>，学会了数据驱动视图的思想，省去了一系列的DOM操作。接着学习到了原生<span className="font-bold">微信小程序开发</span>，由于缺乏后端开发，我自学了
        <span className="font-bold">Java</span>
        开发语言，从最基础的<span className="font-bold">JavaSE，JavaEE，JSP，Servlet，Spring，SpringMVC，SpringBoot，MyBatis，Mybatis-Plus</span>
        等后端开发技术，并在一位Ui设计师朋友的帮助下，成功地为我所读的大学（南通大学）开发出了一个恋爱交友的微信小程序——怦动校园，如今访问量达到 <span className="font-bold">400+</span>
        。幸运的是，在2023年的暑假期间（6~9月），成功在 <span className="font-bold">智子光年科技有限公司</span>
        拿到实习资格，在技术大牛的带领下，学会了代码的规范书写，变量的规范命名，学会了运用 <span className="font-bold">Git</span>
        版本控制工具，<span className="font-bold">Github Copilot</span>
        代码辅助工具等，还学会了对<span className="font-bold">前端页面性能进行优化</span>
        的思想，并加深了对微信小程序开发的理解（<span className="font-bold">云开发</span>
        ）。随后更是确定了自己前端开发的方向，开始学习前端的另一个应用框架<span className="font-bold">React以及Next.js</span>
        的SSR渲染，并且搭配CSS框架<span className="font-bold">TailwindCSS</span>，<span className="font-bold">TypeScript</span>，<span className="font-bold">Shadcn/ui组件库</span>
        ，可以轻松便捷地开发出一个适配各种机型的响应式网站，并成功开发出过<span className="font-bold">六个</span>
        Next.js的项目案例，期间也了解到了开发个人博客的框架<span className="font-bold">Hexo以及Vercel</span>
        无服务器便可以部署项目的网站，并通过Hexo的Butterfly主题搭建了一个属于自己的个人博客
        <a target="_blank" className="text-sky-500" href="https://blog.yellowwei.cn">
          https://blog.yellowwei.cn
        </a>
        ，目前一直在
        <span className="font-bold">迭代优化</span>
        。随后更是接触到了React的动画库<span className="font-bold">Framer Motion</span>，简化了原生Web端通过animate来操作DOM的复杂性，并提升了动画的性能......
      </p>
    </motion.section>
  );
};

export default About;
