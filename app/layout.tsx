import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meet Gaurav: Your next web app developer",
  description: "Hi! i am Gaurav. a passionate web developer specializing in creating robust MERN apps, dynamic Next.js solutions, and tailored WooCommerce websites. Let’s bring your ideas to life with cutting-edge technology and a personal touch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
