"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface TimelineItem {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface TimelineProps {
  items: readonly TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 3, // 3秒间隔
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const itemVariantsRight = {
    hidden: { opacity: 0, x: 100, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.3,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  // 计算波浪形时间线的路径（使用平滑的曲线）
  const getWavePath = (itemCount: number, itemHeight: number) => {
    const centerX = 50; // 时间线在中间
    const amplitude = 35; // 波浪幅度
    let path = `M ${centerX} 0`;

    // 使用平滑的波浪曲线
    const points: Array<{ x: number; y: number }> = [];
    for (let i = 0; i <= itemCount; i++) {
      const y = i * itemHeight;
      const x = centerX + Math.sin(i * 0.6 * Math.PI) * amplitude;
      points.push({ x, y });
    }

    // 使用三次贝塞尔曲线连接点，创建平滑波浪
    for (let i = 0; i < points.length - 1; i++) {
      const current = points[i];
      const next = points[i + 1];
      const midY = (current.y + next.y) / 2;
      const controlX1 = current.x + (next.x - current.x) * 0.3;
      const controlX2 = current.x + (next.x - current.x) * 0.7;

      if (i === 0) {
        path += ` L ${current.x} ${current.y}`;
      }
      path += ` C ${controlX1} ${current.y}, ${controlX2} ${next.y}, ${next.x} ${next.y}`;
    }

    return path;
  };

  const itemHeight = 500; // 每个经历的高度（px）
  const wavePath = getWavePath(items.length, itemHeight);

  return (
    <motion.div
      className="relative max-w-7xl mx-auto px-4 py-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* 波浪形时间线 SVG */}
      <div className="absolute left-1/2 top-0 bottom-0 w-full -translate-x-1/2 pointer-events-none overflow-hidden">
        <svg
          className="absolute left-1/2 top-0 -translate-x-1/2"
          style={{ width: "200px", height: `${items.length * itemHeight}px` }}
          viewBox={`0 0 100 ${items.length * itemHeight}`}
          preserveAspectRatio="none"
        >
          <motion.path
            d={wavePath}
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop
                offset="0%"
                stopColor="rgb(59, 130, 246)"
                stopOpacity="0.8"
              />
              <stop
                offset="25%"
                stopColor="rgb(139, 92, 246)"
                stopOpacity="0.9"
              />
              <stop
                offset="50%"
                stopColor="rgb(236, 72, 153)"
                stopOpacity="0.8"
              />
              <stop
                offset="75%"
                stopColor="rgb(139, 92, 246)"
                stopOpacity="0.9"
              />
              <stop
                offset="100%"
                stopColor="rgb(59, 130, 246)"
                stopOpacity="0.8"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="space-y-24">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;
          const variants = isEven ? itemVariants : itemVariantsRight;

          return (
            <motion.div
              key={item.id}
              className={`relative flex items-center gap-8 ${
                isEven ? "flex-row" : "flex-row-reverse"
              }`}
              variants={variants}
            >
              {/* 内容卡片 */}
              <div className={`flex-1 ${isEven ? "pr-8" : "pl-8"}`}>
                <div className="bg-white/80 dark:bg-primary-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-primary-700/50 hover:shadow-xl transition-shadow">
                  {/* Date */}
                  <div className="text-sm font-semibold text-accent-500 mb-2">
                    {item.date}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    {item.title}
                  </h3>

                  {/* Image and Description - 横向布局 */}
                  <div className="flex gap-6 items-start">
                    {/* Image */}
                    <motion.div
                      className="flex-shrink-0 w-64 h-48 rounded-lg overflow-hidden shadow-md"
                      variants={imageVariants}
                    >
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        width={256}
                        height={192}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    {/* Description */}
                    <div className="flex-1 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 时间线圆点 */}
              <div className="relative z-10 flex-shrink-0">
                <motion.div
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 dark:from-accent-400 dark:to-accent-500 flex items-center justify-center shadow-lg shadow-accent-500/30"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 3 + 0.5,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-primary-900 flex items-center justify-center">
                    <span className="text-accent-500 font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* 右侧占位（保持对称） */}
              <div className={`flex-1 ${isEven ? "pl-8" : "pr-8"}`}></div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Timeline;
