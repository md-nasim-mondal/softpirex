import type { Metadata } from "next";
import AuthProvider from "@/services/AuthProvider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Softpirex",
  description: "A simple web development agency.",
  icons: "/icons/favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' data-theme='light'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          <Suspense>
            <div className='sticky top-0 left-0 w-full z-50'>
              <Navbar />
            </div>
            {children}
            <Footer />
          </Suspense>
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
