"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  const iconSizes = {
    sm: 32,
    md: 40,
    lg: 48,
  };

  const strokeWidth = size === "sm" ? 2.5 : size === "md" ? 3 : 3.5;

  // YW连字路径 - 几何、直线、Y和W共享中间垂直线
  // Y: 顶部V形 -> 中间垂直线向下
  // W: 从Y的中间垂直线开始，形成W的形状（共享中间线）
  // 设计思路：Y和W在中间垂直线处连接，形成连字效果
  const ywPath =
    "M 6 6 L 12 20 L 20 20 M 20 20 L 28 6 M 20 20 L 20 38 M 20 20 L 24 28 L 30 20 L 36 28 L 40 20";

  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
      <motion.div
        className="flex items-center gap-2.5"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {/* YW连字Logo - 极简工程感 */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <svg
            width={iconSizes[size]}
            height={iconSizes[size]}
            viewBox="0 0 46 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            {/* YW连字路径 - 主色：黑白灰 */}
            <motion.path
              d={ywPath}
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className="text-gray-900 dark:text-gray-100"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: 1,
              }}
              transition={{
                pathLength: { duration: 0.8, ease: "easeInOut" },
                opacity: { duration: 0.4 },
              }}
            />
            {/* Hover时的冷色强调效果 - 克制使用 */}
            <motion.path
              d={ywPath}
              stroke="#6366f1"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ opacity: 0 }}
              animate={{
                opacity: isHovered ? 0.4 : 0,
              }}
              transition={{ duration: 0.3 }}
              style={{ filter: "blur(2px)" }}
            />
          </svg>
        </motion.div>

        {/* Logo Text - 极简文字，保持克制 */}
        <motion.span
          className={`${sizeClasses[size]} font-medium tracking-tight text-gray-900 dark:text-gray-200`}
          initial={{ opacity: 0, x: -8 }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.4,
            delay: 0.2,
          }}
        >
          Yellowwei
        </motion.span>
      </motion.div>
    </Link>
  );
};

export default Logo;
