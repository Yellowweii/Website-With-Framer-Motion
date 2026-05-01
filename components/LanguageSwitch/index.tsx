"use client";

import React, { useState, useRef, useEffect } from "react";
import { languages } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";
import { MultipleLanguagesIcon } from "@/svgs";

const LanguageSwitch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<(typeof languages)[number]>(
    languages[0]
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (lang: (typeof languages)[number]) => {
    setSelectedLang(lang);
    setIsOpen(false);
    // TODO: Implement language switching logic here
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg backdrop-blur-sm  hover:bg-gray-200 dark:hover:bg-primary-700 transition-colors flex items-center justify-center text-gray-700 dark:text-gray-200 hover:text-accent-500"
        aria-label="Select language"
      >
        <MultipleLanguagesIcon className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 rounded-lg bg-white/95 dark:bg-primary-800/95 backdrop-blur-md border border-gray-200/40 dark:border-primary-700/40 shadow-lg overflow-hidden z-50"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-gray-100 dark:hover:bg-primary-700 transition-colors ${
                  selectedLang.code === lang.code
                    ? "bg-gray-100 dark:bg-primary-700"
                    : ""
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  {lang.name}
                </span>
                {selectedLang.code === lang.code && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="ml-auto text-accent-500"
                  >
                    ✓
                  </motion.span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitch;
