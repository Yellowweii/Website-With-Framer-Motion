"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links, socialLinks } from "@/constants";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import { useTheme } from "next-themes";
import { BsMoon, BsSun } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiWechat } from "react-icons/si";
import { HiMenu, HiX } from "react-icons/hi";
import LanguageSwitch from "@/components/LanguageSwitch";
import Logo from "@/components/Logo";
import WeChatModal from "@/components/WeChatModal";
import QQModal from "@/components/QQModal";
import { QQIcon } from "@/svgs";

// Icon mapping for social links
const iconMap: Record<string, React.JSX.Element> = {
  github: <FaGithub className="w-5 h-5" />,
  twitter: <FaTwitter className="w-5 h-5" />,
  linkedin: <FaLinkedin className="w-5 h-5" />,
  wechat: <SiWechat className="w-5 h-5" />,
  qq: <QQIcon />,
};

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWeChatModalOpen, setIsWeChatModalOpen] = useState(false);
  const [isQQModalOpen, setIsQQModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to show/hide border
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleWeChatClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWeChatModalOpen(true);
  };

  const handleQQClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsQQModalOpen(true);
  };

  const handleLinkClick = (linkName: string) => {
    setActiveSection(linkName as (typeof links)[number]["name"]);
    setTimeOfLastClick(Date.now());
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-16 w-full bg-white/90 dark:bg-primary-900/90 backdrop-blur-[0.5rem]"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Border with smooth transition */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gray-200/80 dark:bg-primary-800/80"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{
            scaleX: isScrolled ? 1 : 0,
            opacity: isScrolled ? 1 : 0,
          }}
          transition={{
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
          }}
          style={{ originX: 0.5 }}
        />

        {/* Shadow with smooth transition */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isScrolled ? 1 : 0,
          }}
          transition={{
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
          }}
          style={{
            boxShadow:
              "0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.1)",
          }}
        />
        <div className="w-full h-full px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>
            {/* Navigation Links */}
            <nav className="hidden md:flex items-center">
              <ul className="flex items-center gap-1 sm:gap-3 text-[0.9rem] font-medium text-gray-700 dark:text-gray-300">
                {links.map((link, index) => (
                  <motion.li
                    key={link.hash}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      className={clsx(
                        "flex items-center justify-center px-3 py-2 rounded-lg hover:text-accent-500 transition-colors relative",
                        {
                          "text-accent-500": activeSection === link.name,
                          "text-gray-700 dark:text-gray-300":
                            activeSection !== link.name,
                        }
                      )}
                      href={link.hash}
                      onClick={() => {
                        setActiveSection(link.name);
                        setTimeOfLastClick(Date.now());
                      }}
                    >
                      {link.name}
                      {link.name === activeSection && (
                        <motion.span
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-500 rounded-full"
                          layoutId="activeSection"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Language, Theme, Social Links */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Social Links */}
            <div className="flex items-center gap-1 sm:gap-2">
              {socialLinks.map((social) => {
                if (social.icon === "wechat") {
                  return (
                    <div key={social.name} className="relative">
                      <button
                        onClick={handleWeChatClick}
                        className="p-2 rounded-lg backdrop-blur-sm hover:bg-gray-200 dark:hover:bg-primary-700 transition-colors flex items-center justify-center text-gray-700 dark:text-gray-200 hover:text-accent-500"
                        aria-label={social.name}
                      >
                        {iconMap[social.icon]}
                      </button>
                    </div>
                  );
                }
                if (social.icon === "qq") {
                  return (
                    <div key={social.name} className="relative">
                      <button
                        onClick={handleQQClick}
                        className="p-2 rounded-lg backdrop-blur-sm hover:bg-gray-200 dark:hover:bg-primary-700 transition-colors flex items-center justify-center text-gray-700 dark:text-gray-200 hover:text-accent-500"
                        aria-label={social.name}
                      >
                        {iconMap[social.icon]}
                      </button>
                    </div>
                  );
                }
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg backdrop-blur-sm hover:bg-gray-200 dark:hover:bg-primary-700 transition-colors flex items-center justify-center text-gray-700 dark:text-gray-200 hover:text-accent-500"
                    aria-label={social.name}
                  >
                    {iconMap[social.icon]}
                  </a>
                );
              })}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg backdrop-blur-sm hover:bg-gray-200 dark:hover:bg-primary-700 transition-colors flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <BsMoon className="w-5 h-5 text-gray-700 dark:text-gray-200" />
              ) : (
                <BsSun className="w-5 h-5 text-gray-700 dark:text-gray-200" />
              )}
            </button>

            {/* Language Switch */}
            <div className="hidden sm:block">
              <LanguageSwitch />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg backdrop-blur-sm hover:bg-gray-200 dark:hover:bg-primary-700 transition-colors flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            ) : (
              <HiMenu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-gray-200/80 dark:border-primary-800/80 bg-white/95 dark:bg-primary-900/95 backdrop-blur-md"
            >
              <nav className="px-4 py-4">
                <ul className="flex flex-col gap-2">
                  {links.map((link) => (
                    <li key={link.hash}>
                      <Link
                        className={clsx(
                          "block px-4 py-2 rounded-lg transition-colors",
                          {
                            "text-accent-500 bg-accent-500/10 dark:bg-accent-500/10":
                              activeSection === link.name,
                            "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-primary-800":
                              activeSection !== link.name,
                          }
                        )}
                        href={link.hash}
                        onClick={() => handleLinkClick(link.name)}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                  {/* Mobile Language Switch */}
                  <li className="pt-2 border-t border-gray-200 dark:border-gray-700 mt-2">
                    <div className="px-4">
                      <LanguageSwitch />
                    </div>
                  </li>
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* WeChat QR Code Modal */}
      <WeChatModal
        isOpen={isWeChatModalOpen}
        onClose={() => setIsWeChatModalOpen(false)}
      />

      {/* QQ QR Code Modal */}
      <QQModal isOpen={isQQModalOpen} onClose={() => setIsQQModalOpen(false)} />
    </header>
  );
}
