import ActiveSectionContextProvider from "@/context/ActiveSectionContextProvider";
import NextThemes from "@/context/NextThemes";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yellowwei | Personal Website",
  description: "Yellowwei is a full-stack developer with 1 year of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="!scroll-smooth" lang="en">
      <meta
        name="google-site-verification"
        content="griT4JKk0-bapkkeN7scy6WVPRhHLZTXpOduDgIQsYg"
      />
      <body
        className={`${inter.className} text-gray-900 dark:text-gray-200 pt-20 bg-white dark:bg-primary-900`}
      >
        {/* 极淡的背景光晕 - 非常subtle，保持克制 */}
        <div className="hidden dark:block bg-accent-500/3 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="hidden dark:block bg-accent-500/2 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <NextThemes>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
          </ActiveSectionContextProvider>
        </NextThemes>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#ffffff",
              color: "#111827",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "12px 20px",
              fontSize: "14px",
              fontWeight: "500",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            },
            className: "dark:bg-primary-800 dark:text-gray-200 dark:border-primary-700",
          }}
        />
      </body>
    </html>
  );
}
