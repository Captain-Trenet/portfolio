import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TrenetBlair | Portfolio",
  description:
    "Trenet Blair is a highly skilled Full Stack Developer with expertise in front-end and back-end development. He excels at crafting visually appealing user interfaces and building robust server-side applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
