import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SessionWrapper from "@/components/SesionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Insta Clone using Next js" ,
  description: "A Clone of Instagram using Next js and Tailwind css",
};

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
    <html lang="en">
      <body className={inter.className}>
      <Header />
        {children}
        </body>
    </html>
    </SessionWrapper>
  );
}
