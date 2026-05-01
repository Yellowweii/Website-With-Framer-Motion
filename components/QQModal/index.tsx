"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { HiX } from "react-icons/hi";
import confetti from "canvas-confetti";

interface QQModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QQModal: React.FC<QQModalProps> = ({ isOpen, onClose }) => {
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";

      // Confetti effect
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          zIndex: 10001,
        });
      }, 300);

      // Show welcome message after a short delay
      const welcomeTimer = setTimeout(() => {
        setShowWelcomeMessage(true);
      }, 300);

      // Hide welcome message after 3 seconds
      const hideTimer = setTimeout(() => {
        setShowWelcomeMessage(false);
      }, 2000);

      // Cleanup function
      return () => {
        clearTimeout(welcomeTimer);
        clearTimeout(hideTimer);
        document.removeEventListener("keydown", handleEscape);
        document.body.style.overflow = "unset";
        setShowWelcomeMessage(false);
      };
    } else {
      setShowWelcomeMessage(false);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 dark:bg-black/70 z-[9999] backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{
              duration: 0.3,
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-white dark:bg-primary-800 rounded-2xl shadow-2xl max-w-md w-full p-6">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-primary-700 transition-colors text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 z-10"
                aria-label="Close modal"
              >
                <HiX className="w-5 h-5" />
              </button>

              {/* Welcome Message */}
              <AnimatePresence>
                {showWelcomeMessage && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -30,
                      x: "-50%",
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: -20,
                      scale: 0.9,
                    }}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                    className="absolute top-0 left-1/2 z-20"
                  >
                    <motion.div
                      initial={{ rotate: -5 }}
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{
                        duration: 0.6,
                        delay: 0.3,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl px-6 py-3 shadow-2xl">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50 -z-10"></div>

                        <span className="text-white font-semibold text-lg whitespace-nowrap">
                          很高兴认识你 👏
                        </span>

                        {/* Decorative dots */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5, duration: 0.3 }}
                          className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full shadow-lg"
                        />
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6, duration: 0.3 }}
                          className="absolute -bottom-1 -left-1 w-2 h-2 bg-green-400 rounded-full shadow-lg"
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* QR Code Image */}
              <div className="w-full flex items-center justify-center">
                <Image
                  src="/QQ.png"
                  alt="QQ QR Code"
                  width={400}
                  height={400}
                  className="max-w-full max-h-[70vh] w-auto h-auto object-contain rounded-lg"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default QQModal;
